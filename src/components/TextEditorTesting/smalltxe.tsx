// "use client";

// import { useEffect, useState } from "react";
// import { Editor } from "@tinymce/tinymce-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import conf from "@/conf/conf";

// // Ensure you have your TinyMCE API key

// export default function SmallComponent() {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const sharedConfig = {
//     menubar: "file edit view insert format tools table help",
//     toolbar:
//       "undo redo | formatselect | bold italic backcolor | \
//               alignleft aligncenter alignright alignjustify | \
//               bullist numlist outdent indent | removeformat | help",
//     plugins: [
//       "advlist autolink lists link image charmap print preview anchor",
//       "searchreplace visualblocks code fullscreen",
//       "insertdatetime media table paste code help wordcount",
//     ],
//   };

//   if (!isMounted) {
//     return null; // or a loading spinner
//   }

//   return (
//     <Card className="w-full max-w-4xl mx-auto">
//       <CardHeader>
//         <CardTitle>Shared TinyMCE Editors</CardTitle>
//       </CardHeader>
//       <CardContent className="space-y-4">
//         <div>
//           <h3 className="text-lg font-semibold mb-2">Editor 1</h3>
//           <Editor
//             apiKey={conf.tinymce}
//             init={{
//               ...sharedConfig,
//               height: 300,
//             }}
//           />
//         </div>
//         <div>
//           <h3 className="text-lg font-semibold mb-2">Editor 2</h3>
//           <Editor
//             apiKey={conf.tinymce}
//             init={{
//               ...sharedConfig,
//               height: 300,
//             }}
//           />
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

"use client";

import React, { useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import conf from "@/conf/conf";

export default function TopEditor() {
  const [editor1Content, setEditor1Content] = useState(
    "<p>Click here to edit content 1</p>"
  );
  const [editor2Content, setEditor2Content] = useState(
    "<p>Click here to edit content 2</p>"
  );
  const [activeEditor, setActiveEditor] = useState<number | null>(null);
  const editorRef = useRef<any>(null);

  const editorConfig = {
    menubar: false,
    plugins: "link image lists",
    toolbar:
      "undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | link image",
    height: 300,
  };

  const handleEditorChange = (content: string) => {
    if (activeEditor === 1) {
      setEditor1Content(content);
    } else if (activeEditor === 2) {
      setEditor2Content(content);
    }
  };

  const openEditor = (editorNumber: number) => {
    setActiveEditor(editorNumber);
  };

  const closeEditor = () => {
    setActiveEditor(null);
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">TinyMCE Top Editor</h1>

      <div
        className="border p-2 rounded cursor-pointer"
        onClick={() => openEditor(1)}
        dangerouslySetInnerHTML={{ __html: editor1Content }}
      />

      <div
        className="border p-2 rounded cursor-pointer"
        onClick={() => openEditor(2)}
        dangerouslySetInnerHTML={{ __html: editor2Content }}
      />

      {activeEditor !== null && (
        <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
          <div className="container mx-auto p-4">
            <Editor
              apiKey={conf.tinymce}
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue={
                activeEditor === 1 ? editor1Content : editor2Content
              }
              init={editorConfig}
              onEditorChange={handleEditorChange}
            />
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={closeEditor}
            >
              Close Editor
            </button>
          </div>
        </div>
      )}
    </div>
  );
}