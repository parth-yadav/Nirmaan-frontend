"use client";

import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import conf from "@/conf/conf";

export default function TinyMCECustomCSS() {
  const [content, setContent] = useState("");

  const handleEditorChange = (content: string) => {
    setContent(content);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">TinyMCE CSS Customization</h1>

      <h2 className="text-xl font-semibold mb-2">1. Using content_style</h2>
      <Editor
        apiKey={conf.tinymce}
        initialValue="<p>This editor uses content_style for custom CSS.</p>"
        init={{
          height: 300,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor |",
          content_style: `
            body { font-family: Arial, sans-serif; }
            p { line-height: 1.5; color: #333; }
            .custom-class { background-color: #f0f0f0; padding: 10px; }
          `,
        }}
        onEditorChange={handleEditorChange}
      />

      <h2 className="text-xl font-semibold mb-2 mt-8">2. Using content_css</h2>
      <Editor
        apiKey={conf.tinymce}
        initialValue="<p>This editor uses content_css for custom CSS.</p>"
        init={{
          height: 300,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help",
          content_css: "/path/to/your/custom.css", // Make sure this file exists in your public directory
        }}
        onEditorChange={handleEditorChange}
      />

      <h2 className="text-xl font-semibold mb-2 mt-8">
        3. Overriding TinyMCE's default CSS classes
      </h2>
      <Editor
        apiKey={conf.tinymce}
        initialValue="<p>This editor overrides TinyMCE's default CSS classes.</p>"
        init={
            {
          height: 300,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help",
          content_style: `
            .mce-content-body {
              font-family: 'Courier New', monospace;
              font-size: 20px;
            }
            .mce-content-body p {
              margin: 10px 0;
            }
           
.tox-tinymce-inline {
  overflow: visible !important; /* Allow toolbar to overflow */
  position: static !important;  /* Make sure parent doesn't constrain the toolbar */
}




            
          `,
        }}
        onEditorChange={handleEditorChange}
      />

      <h2 className="text-xl font-semibold mb-2 mt-8">
        4. Using skin and skin_url
      </h2>
      <Editor
        apiKey={conf.tinymce}
        initialValue="<p>This editor uses a custom skin.</p>"
        init={{
          height: 300,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help",
          skin: "custom",
          skin_url: "/path/to/your/custom/skin", // Make sure this directory exists with the necessary skin files
        }}
        onEditorChange={handleEditorChange}
      />

      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Editor Content:</h2>
        <div className="border p-4 whitespace-pre-wrap">{content}</div>
      </div>
    </div>
  );
}
