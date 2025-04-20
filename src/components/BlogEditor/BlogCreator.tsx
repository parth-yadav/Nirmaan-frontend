"use client";

import NirmanButton from "../NirmanButton/NirmanButton";
import { useState, ChangeEvent, FormEvent } from "react";
import { Editor } from "@tinymce/tinymce-react";
import conf from "@/conf/conf";
import StoryPreview from "./PrePublish"; // Import the StoryPreview component

interface Blog {
  title: string;
  content: string;
  coverPhoto: string;
  date: string;
}

interface BlogCreatorProps {
  addBlog: (blog: Blog) => void;
}

export default function BlogCreator({ addBlog }: BlogCreatorProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [coverPhoto, setCoverPhoto] = useState<File | null>(null);
  const [coverPhotoPreview, setCoverPhotoPreview] = useState<string>(
    "/placeholder.svg?height=300&width=400"
  );
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const handlePublishClick = () => {
    setShowPreviewModal(true);
  };

  const handleCloseModal = () => {
    setShowPreviewModal(false);
  };

  const handleImageChange = (newImage: File) => {
    setCoverPhoto(newImage);
    setCoverPhotoPreview(URL.createObjectURL(newImage));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newBlog: Blog = {
      title,
      content,
      coverPhoto: coverPhotoPreview,
      date: new Date().toISOString(),
    };
    addBlog(newBlog);
    setTitle("");
    setContent("");
    setCoverPhoto(null);
    setCoverPhotoPreview("/placeholder.svg?height=300&width=400");
  };

  const handleFinalPublish = () => {
    const newBlog: Blog = {
      title,
      content,
      coverPhoto: coverPhotoPreview,
      date: new Date().toISOString(),
    };
    addBlog(newBlog);
    setTitle("");
    setContent("");
    setCoverPhoto(null);
    setCoverPhotoPreview("/placeholder.svg?height=300&width=400");
    setShowPreviewModal(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm text-black px-6 py-4 flex items-center justify-between">
        {/* Left Button */}
        <div className="ml-12">
          <NirmanButton />
        </div>

        {/* Right Button */}
        <div className="mr-12">
          <button
            type="button"
            onClick={handlePublishClick}
            className="bg-black text-sm text-white px-2 py-2 rounded-lg"
          >
            Publish
          </button>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="bg-white p-6 rounded-3xl h-screen shadow-lg mb-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setTitle(e.target.value)
                }
                className="mt-1 w-full text-4xl font-bold border-none focus:ring-0 focus:outline-none p-0"
                placeholder="Title"
                required
              />
            </div>
            <div className="mb-4">
              <Editor
                apiKey={conf.tinymce}
                value={content}
                onEditorChange={(newContent: string) => setContent(newContent)}
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
                    "undo redo | formatselect | bold italic backcolor | " +
                    "alignleft aligncenter alignright alignjustify | " +
                    "bullist numlist outdent indent | removeformat | help",
                  placeholder: "Type here...",
                  content_style: `
      .tox.tox-tinymce-inline .tox-editor-header {
        border: none !important;
        border-radius: 10px;
        box-shadow: none !important;
        overflow: hidden;
        padding: 4px;
        position: fixed;
        width: 800px;
        z-index: 100;
        top: 0px;
        left: 50vw;
      }
    `,
                }}
              />
            </div>
          </form>
        </div>
      </main>

      {/* Render the StoryPreview modal conditionally */}
      {showPreviewModal && (
        <StoryPreview
          title={title}
          content={content}
          coverPhoto={coverPhotoPreview}
          onClose={handleCloseModal}
          onPublish={handleFinalPublish}
          onImageChange={handleImageChange}
        />
      )}
    </div>
  );
}
