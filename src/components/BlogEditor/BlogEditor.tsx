"use client";

import { useState, useRef, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageIcon, SaveIcon } from "lucide-react";
import conf from "@/conf/conf";

export default function BlogEditorPage() {
  const [title, setTitle] = useState("Untitled Story");
  const [coverImage, setCoverImage] = useState<string | null>(null);
//   const [wordCount, setWordCount] = useState(0);
  const editorRef = useRef<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      console.log({ title, coverImage, content });
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
          {/* <Input
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="text-3xl font-bold bg-transparent border-none focus:outline-none focus:ring-0 p-0"
            placeholder="Untitled Story"
          /> */}
          <div className="text-3xl font-bold bg-transparent border-none focus:outline-none focus:ring-0 p-0">
            <Editor
              apiKey={conf.tinymce}
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
                toolbar: true,
                content_style: `
                body { 
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                  font-size: 18px;
                  line-height: 1.6;
                  color: #333;
                  max-width: 100%;
                  padding: 0;
                }
                p { margin: 0 0 1em 0; }
              `,
              }}
              initialValue="<p>Start writing your story...</p>"
            />
          </div>
          <div className="flex items-center gap-4">
            {/* <span className="text-sm text-gray-500">{wordCount} words</span> */}
            <Button onClick={handleSubmit} size="sm">
              <SaveIcon className="w-4 h-4 mr-2" />
              Publish
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <div
            className="relative h-[300px] bg-gray-200 rounded-lg overflow-hidden cursor-pointer"
            onClick={handleImageClick}
          >
            {coverImage ? (
              <img
                src={coverImage}
                alt="Cover"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <ImageIcon className="w-12 h-12 text-gray-400" />
              </div>
            )}
            <Input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          <Editor
            apiKey={conf.tinymce}
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
              toolbar: true,
              content_style: `
                body { 
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                  font-size: 18px;
                  line-height: 1.6;
                  color: #333;
                  max-width: 100%;
                  padding: 0;
                }
                p { margin: 0 0 1em 0; }
              `,
            }}
            initialValue="<p>Start writing your story...</p>"
          />
        </div>
      </main>
    </div>
  );
}
