"use client";

import { useRef, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@/components/ui/button";
import { SaveIcon } from "lucide-react";
import conf from "@/conf/conf";

export default function BlogEditorPage() {
  const editorRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("editor-header");
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add(
            "bg-background/80",
            "backdrop-blur-sm",
            "shadow-md"
          );
        } else {
          header.classList.remove(
            "bg-background/80",
            "backdrop-blur-sm",
            "shadow-md"
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      console.log({ content });
      // Here you would typically send this data to your backend
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header
        id="editor-header"
        className="fixed top-0 left-0 right-0 z-10 transition-all duration-300"
      >
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold bg-transparent border-none focus:outline-none focus:ring-0 p-0">
            <Editor
              apiKey={conf.tinymce}
              onInit={(evt, editor) => (editorRef.current = editor)}
              init={{
                inline: true,
                menubar: false,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                ],
                toolbar: "bold italic",
                content_style: `
                  body { 
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    font-size: 24px;
                    font-weight: bold;
                    line-height: 1.6;
                    color: #333;
                    max-width: 100%;
                    padding: 0;
                  }
                `,
              }}
              initialValue="Untitled Story"
            />
          </div>
          <div className="flex items-center gap-4">
            <Button onClick={handleSubmit} size="sm">
              <SaveIcon className="w-4 h-4 mr-2" />
              Publish
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <Editor
            apiKey={conf.tinymce}
            onInit={(evt, editor) => (editorRef.current = editor)}
            init={{
              inline: true,
              menubar: true,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | image | help",
              content_style: `
      .tox.tox-tinymce-inline .tox-editor-header {
       
        z-index: 100;
      
      }
      `,
              file_picker_types: "image",
              image_title: true,
              automatic_uploads: true,
              file_picker_callback: (cb, value, meta) => {
                const input = document.createElement("input");
                input.setAttribute("type", "file");
                input.setAttribute("accept", "image/*");

                input.onchange = function () {
                  const file = (this as HTMLInputElement).files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = function () {
                      const id = "blobid" + new Date().getTime();
                      const blobCache =
                        editorRef.current.editorUpload.blobCache;
                      const base64 = (reader.result as string).split(",")[1];
                      const blobInfo = blobCache.create(id, file, base64);
                      blobCache.add(blobInfo);
                      cb(blobInfo.blobUri(), { title: file.name });
                    };
                    reader.readAsDataURL(file);
                  }
                };

                input.click();
              },
            }}
            initialValue="<p>Start writing your story...</p>"
          />
        </div>
      </main>
    </div>
  );
}
