"use client";

import NirmanButton from "../NirmanButton/NirmanButton";
import { useState, ChangeEvent, FormEvent } from "react";
import { Editor } from "@tinymce/tinymce-react";
import conf from "@/conf/conf";

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newBlog: Blog = {
      title,
      content,
      coverPhoto: coverPhoto
        ? URL.createObjectURL(coverPhoto)
        : "/placeholder.svg?height=300&width=400",
      date: new Date().toISOString(),
    };
    addBlog(newBlog);
    setTitle("");
    setContent("");
    setCoverPhoto(null);
  };

  return (
    <div className="min-h-screen bg-white ">
      <header className="bg-white shadow-sm  text-black px-6 py-4 flex items-center justify-between">
        {/* Left Button */}
        <div className="ml-12">
          <NirmanButton />
        </div>

        {/* Right Button */}
        <div className="mr-12">
          <button
            type="submit"
            className="bg-black text-sm text-white px-2 py-2 rounded-lg "
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
      }

      /* Remove focus border */
      .tox-tinymce, .tox-edit-area, .tox.tox-tinymce-inline {
        border: none !important;
        outline: none !important;
        box-shadow: none !important;
      }
    `,
                }}
              />
            </div>
            {/* <div className="mb-4">
              <label
                htmlFor="coverPhoto"
                className="block text-sm font-medium text-gray-700"
              >
                Cover Photo
              </label>
              <input
                type="file"
                id="coverPhoto"
                accept="image/*"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCoverPhoto(e.target.files ? e.target.files[0] : null)
                }
                className="mt-1 block w-full"
              />
            </div> */}
            {/* <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded-3xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Create Blog Post
            </button> */}
          </form>
        </div>
      </main>
    </div>
  );
}

// import { useState, ChangeEvent, FormEvent } from "react";
// import { Editor } from "@tinymce/tinymce-react";
// import conf from "@/conf/conf";
// interface Blog {
//   title: string;
//   content: string;
//   coverPhoto: string;
//   date: string;
// }

// interface BlogCreatorProps {
//   addBlog: (blog: Blog) => void;
// }

// export default function BlogCreator({ addBlog }: BlogCreatorProps) {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [coverPhoto, setCoverPhoto] = useState<File | null>(null);

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const newBlog: Blog = {
//       title,
//       content,
//       coverPhoto: coverPhoto
//         ? URL.createObjectURL(coverPhoto)
//         : "/placeholder.svg?height=300&width=400",
//       date: new Date().toISOString(),
//     };
//     addBlog(newBlog);
//     setTitle("");
//     setContent("");
//     setCoverPhoto(null);
//   };

//   return (
//     <div className="bg-white p-6 rounded-3xl shadow-md mb-8">
//       <h2 className="text-2xl font-bold mb-4 text-purple-800">
//         Create a New Blog Post
//       </h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label
//             htmlFor="title"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Title
//           </label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={(e: ChangeEvent<HTMLInputElement>) =>
//               setTitle(e.target.value)
//             }
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="content"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Content
//           </label>
//           <div className="border border-gray-300 rounded-md">
//             <Editor
//               apiKey={conf.tinymce}
//               value={content}
//               onEditorChange={(newContent: string) => setContent(newContent)}
//               init={{
//                 inline: true,
//                 menubar: true,
//                 plugins: [
//                   "advlist",
//                   "autolink",
//                   "lists",
//                   "link",
//                   "image",
//                   "charmap",
//                   "preview",
//                   "anchor",
//                   "searchreplace",
//                   "visualblocks",
//                   "code",
//                   "fullscreen",
//                   "insertdatetime",
//                   "media",
//                   "table",
//                   "code",
//                   "help",
//                   "wordcount",
//                 ],
//                 toolbar:
//                   "undo redo | formatselect | bold italic backcolor | " +
//                   "alignleft aligncenter alignright alignjustify | " +
//                   "bullist numlist outdent indent | removeformat | help",
//                 content_style: `
//                   .tox.tox-tinymce-inline .tox-editor-header {

//                     border: 1px solid #eee;
//                     border-radius: 10px;
//                     box-shadow: none;
//                     overflow: hidden;
//                     padding: 4px;
//                     position: fixed; /* Change to fixed */
//                     width: 800px;
//                     z-index: 100;
//                     top: 0px;

//                   }
//       `,
//               }}
//             />
//           </div>
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="coverPhoto"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Cover Photo
//           </label>
//           <input
//             type="file"
//             id="coverPhoto"
//             accept="image/*"
//             onChange={(e: ChangeEvent<HTMLInputElement>) =>
//               setCoverPhoto(e.target.files ? e.target.files[0] : null)
//             }
//             className="mt-1 block w-full"
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-purple-600 text-white px-4 py-2 rounded-3xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
//         >
//           Create Blog Post
//         </button>
//       </form>
//     </div>
//   );
// }
