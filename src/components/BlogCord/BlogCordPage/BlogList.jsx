// import React from "react";
// import BlogSearch from "./BlogSearch";
// import BlogCard from "./BlogCard";
// import { useState } from "react";
// import BlogFilter from "./BlogFilter";
// import BlogView from "./BlogView";
// import BlogNew from "./BlogNewButton";
// import BlogEditor from "../BlogEditorComponents/BlogEditor";
// import BlogEdit from "./BlogEditButton";

// import BlogNewForm from "../BlogComponentsNew/NewBlogForm";

// const blogData = [
//   {
//     tags: ["Freshers", "UPSC"],
//     date: "12 Feb 2024",
//     title: "Nirman",
//     content:
//       "Lorem ipsum dolor sit amet consectetur. Nisi nam viverra dolor faucibus tempor mollis eget sit. Gravida senectus sed faucibus eu sed pharetra feugiat. Venenatis mi diam egestas faucibus sit nam.",
//     likes: 459,
//     views: 9878,
//     comments: 32,
//   },
//   {
//     tags: ["Freshers", "UPSC"],
//     date: "12 Feb 2024",
//     title:
//       "Lorem ipsum dolor sit amet consectetur. Volutpat imperdiet id arcu in.",
//     content:
//       "Lorem ipsum dolor sit amet consectetur. Nisi nam viverra dolor faucibus tempor mollis eget sit. Gravida senectus sed faucibus eu sed pharetra feugiat. Venenatis mi diam egestas faucibus sit nam.",
//     likes: 459,
//     views: 9878,
//     comments: 32,
//   },

//   {
//     tags: ["Freshers", "UPSC"],
//     date: "12 Feb 2024",
//     title:
//       "Lorem ipsum dolor sit amet consectetur. Volutpat imperdiet id arcu in.",
//     content:
//       "Lorem ipsum dolor sit amet consectetur. Nisi nam viverra dolor faucibus tempor mollis eget sit. Gravida senectus sed faucibus eu sed pharetra feugiat. Venenatis mi diam egestas faucibus sit nam.",
//     likes: 459,
//     views: 9878,
//     comments: 32,
//   },
//   {
//     tags: ["Freshers", "UPSC"],
//     date: "12 Feb 2024",
//     title:
//       "Lorem ipsum dolor sit amet consectetur. Volutpat imperdiet id arcu in.",
//     content:
//       "Lorem ipsum dolor sit amet consectetur. Nisi nam viverra dolor faucibus tempor mollis eget sit. Gravida senectus sed faucibus eu sed pharetra feugiat. Venenatis mi diam egestas faucibus sit nam.",
//     likes: 459,
//     views: 9878,
//     comments: 32,
//   },
//   {
//     tags: ["Freshers", "UPSC"],
//     date: "12 Feb 2024",
//     title: "Very small title ",
//     content:
//       "Lorem ipsum dolor sit amet consectetur. Nisi nam viverra dolor faucibus tempor mollis eget sit. Gravida senectus sed faucibus eu sed pharetra feugiat. Venenatis mi diam egestas faucibus sit nam.",
//     likes: 459,
//     views: 9878,
//     comments: 32,
//   },

//   // Repeat the above object 3 more times for the other blog cards
// ];

// function BlogListCo() {
//   const [filteredBlogs, setFilteredBlogs] = useState(blogData);

//   const handleSearch = (searchTerm) => {
//     const filtered = blogData.filter(
//       (blog) =>
//         blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         blog.content.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredBlogs(filtered);
//   };
//   return (
//     <>
//       <div className="flex flex-col mt-14 max-md:mt-10 max-md:max-w-full">
//        <BlogEditor />
//         <BlogNewForm /> 

        // <h1 className="text-3xl font-semibold tracking-tight leading-9 text-black max-md:max-w-full dark:text-white">
        //   Blogs
        // </h1>
        // <div className="flex flex-row mt-4 justify-between">
        //   <div className="flex flex-row gap-8">
        //     <BlogSearch onSearch={handleSearch} />
        //     <BlogFilter />
        //     <BlogView />
        //   </div>
        //   <BlogEdit />
        //   <BlogNew />
        // </div>
//         <section className="mt-12 max-md:mt-10 max-md:max-w-full">
//           <div className="  grid grid-cols-1 gap-5 md:grid-cols-2">
//             {filteredBlogs.map((blog, index) => (
//               <BlogCard key={index} {...blog} />
//             ))}
//           </div>
//         </section>
//         <section className="mt-12 max-md:mt-10 max-md:max-w-full"></section>
//       </div>
//     </>
//   );
// }

// export default BlogListCo;
// {
//   /* {isChildVisible && (
//     <div className="fixed inset-0 overflow-auto flex items-start  z-50">
//       <div className="  rounded-lg w-full justify-end  ">
//         <BlogEditor />
//       </div>
//     </div>   )}*/
// }

import React, { useState } from "react";
import BlogSearch from "./BlogSearch";
import BlogCard from "./BlogCard";
import BlogFilter from "./BlogFilter";
import BlogView from "./BlogView";
import BlogNew from "./BlogNewButton";
import BlogEdit from "./BlogEditButton";
 import BlogEditor from "../BlogEditorComponents/SingleFileBEC";
import { Modal } from "../BlogCordPage/Modal/Modal";
import BlogNewForm from "../BlogComponentsNew/NewBlogForm";

// const blogData = [
//   { ispub
//     tags: ["Freshers", "UPSC"],
//     date: "12 Feb 2024",
//     title: "Nirman",
//     content:
//       "Lorem ipsum dolor sit amet consectetur. Nisi nam viverra dolor faucibus tempor mollis eget sit. Gravida senectus sed faucibus eu sed pharetra feugiat. Venenatis mi diam egestas faucibus sit nam.",
//     likes: 459,
//     views: 9878,
//     comments: 32,
//   },
//   {
//     tags: ["Freshers", "UPSC","SSC"],
//     date: "12 Feb 2024",
//     title:
//       "Lorem ipsum dolor sit amet consectetur. Volutpat imperdiet id arcu in.",
//     content:
//       "Lorem ipsum dolor sit amet consectetur. Nisi nam viverra dolor faucibus tempor mollis eget sit. Gravida senectus sed faucibus eu sed pharetra feugiat. Venenatis mi diam egestas faucibus sit nam.",
//     likes: 459,
//     views: 9878,
//     comments: 32,
//   },
//   {
//     tags: ["Freshers", "UPSC"],
//     date: "12 Feb 2024",
//     title:
//       "Lorem ipsum dolor sit amet consectetur. Volutpat imperdiet id arcu in.",
//     content:
//       "Lorem ipsum dolor sit amet consectetur. Nisi nam viverra dolor faucibus tempor mollis eget sit. Gravida senectus sed faucibus eu sed pharetra feugiat. Venenatis mi diam egestas faucibus sit nam.",
//     likes: 459,
//     views: 78,
//     comments: 32,
//   },
//   {
//     tags: ["Freshers", "UPSC"],
//     date: "12 Feb 2024",
//     title:
//       "Lorem ipsum dolor sit amet consectetur. Volutpat imperdiet id arcu in.",
//     content:
//       "Lorem ipsum dolor sit amet consectetur. Nisi nam viverra dolor faucibus tempor mollis eget sit. Gravida senectus sed faucibus eu sed pharetra feugiat. Venenatis mi diam egestas faucibus sit nam.",
//     likes: 459,
//     views: 9878,
//     comments: 39,
//   },
//   {
//     tags: ["Freshers", "UPSC"],
//     date: "12 Feb 2024",
//     title: "Very small title ",
//     content:
//       "Lorem ipsum dolor sit amet consectetur. Nisi nam viverra dolor faucibus tempor mollis eget sit. Gravida senectus sed faucibus eu sed pharetra feugiat. Venenatis mi diam egestas faucibus sit nam.",
//     likes: 459,
//     views: 9878,
//     comments: 92,
//   },
// ];

const blogData = [
  {
    isPublished: true,
    tags: ["Freshers", "UPSC"],
    date: "12 Feb 2024",
    title: "Nirman",
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisi nam viverra dolor faucibus tempor mollis eget sit. Gravida senectus sed faucibus eu sed pharetra feugiat. Venenatis mi diam egestas faucibus sit nam.",
    description:
      "A comprehensive guide to Nirman for UPSC aspirants and freshers.",
    likes: 459,
    views: 9878,
    comments: 32,
    saves: 120,
  },
  {
    isPublished: true,
    tags: ["Freshers", "UPSC", "SSC"],
    date: "12 Feb 2024",
    title:
      "Lorem ipsum dolor sit amet consectetur. Volutpat imperdiet id arcu in.",
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisi nam viverra dolor faucibus tempor mollis eget sit. Gravida senectus sed faucibus eu sed pharetra feugiat. Venenatis mi diam egestas faucibus sit nam.",
    description:
      "An in-depth analysis of recent developments in UPSC and SSC examinations.",
    likes: 459,
    views: 9878,
    comments: 32,
    saves: 95,
  },
  {
    isPublished: false,
    tags: ["Freshers", "UPSC"],
    date: "12 Feb 2024",
    title:
      "Lorem ipsum dolor sit amet consectetur. Volutpat imperdiet id arcu in.",
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisi nam viverra dolor faucibus tempor mollis eget sit. Gravida senectus sed faucibus eu sed pharetra feugiat. Venenatis mi diam egestas faucibus sit nam.",
    description:
      "Essential strategies for UPSC preparation tailored for freshers.",
    likes: 459,
    views: 78,
    comments: 32,
    saves: 50,
  },
  {
    isPublished: true,
    tags: ["Freshers", "UPSC"],
    date: "12 Feb 2024",
    title:
      "Lorem ipsum dolor sit amet consectetur. Volutpat imperdiet id arcu in.",
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisi nam viverra dolor faucibus tempor mollis eget sit. Gravida senectus sed faucibus eu sed pharetra feugiat. Venenatis mi diam egestas faucibus sit nam.",
    description:
      "Key insights into the latest UPSC exam pattern and syllabus changes.",
    likes: 459,
    views: 9878,
    comments: 39,
    saves: 210,
  },
  {
    isPublished: true,
    tags: ["Freshers", "UPSC"],
    date: "12 Feb 2024",
    title: "Very small title",
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisi nam viverra dolor faucibus tempor mollis eget sit. Gravida senectus sed faucibus eu sed pharetra feugiat. Venenatis mi diam egestas faucibus sit nam.",
    description: "A quick guide to essential UPSC topics for freshers.",
    likes: 459,
    views: 9878,
    comments: 92,
    saves: 180,
  },
];

// function BlogListCo() {
//   const [filteredBlogs, setFilteredBlogs] = useState(blogData);
//   const [selectedBlog, setSelectedBlog] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleSearch = (searchTerm) => {
//     const filtered = blogData.filter(
//       (blog) =>
//         blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         blog.content.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredBlogs(filtered);
//   };

//   const openModal = (blog) => {
//     setSelectedBlog(blog);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <div className="flex flex-col mt-14 max-md:mt-10 max-md:max-w-full">
//         {/* <BlogEditor /> */}
//         {/* <BlogNewForm /> */}
//         <h1 className="text-3xl font-semibold tracking-tight leading-9 text-black max-md:max-w-full dark:text-white">
//           Blogs
//         </h1>
//         <div className="flex flex-row mt-4 justify-between">
//           <div className="flex flex-row gap-8">
//             <BlogSearch onSearch={handleSearch} />
//             <BlogFilter />
//             <BlogView />
//           </div>
//           {/* <BlogEdit /> */}
//           <BlogNew />
//         </div>
//         <section className="mt-12 max-md:mt-10 max-md:max-w-full">
//           <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
//             {filteredBlogs.map((blog, index) => (
//               <BlogCard key={index} {...blog} onClick={() => openModal(blog)} />
//             ))}
//           </div>
//         </section>
//       </div>
//       {selectedBlog && (
        
//         // <Modal isOpen={isModalOpen} onClose={closeModal} blog={selectedBlog} />
//         <BlogEditor
//           blog={selectedBlog}
//           isOpen={isModalOpen}
//           onClose={closeModal}
//         />
//       )}
//     </>
//   );
// }

// export default BlogListCo;
export default function BlogListCo() {
  const [filteredBlogs, setFilteredBlogs] = useState(blogData);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const handleSearch = (searchTerm) => {
    const filtered = blogData.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBlogs(filtered);
  };

  const openEditor = (blog) => {
    setSelectedBlog(blog);
    setIsEditorOpen(true);
  };

  const closeEditor = () => {
    setIsEditorOpen(false);
    setSelectedBlog(null);
  };

  return (
    <div className="flex flex-col mt-14 max-md:mt-10 max-md:max-w-full">
      <BlogNewForm />
      <h1 className="text-3xl font-semibold tracking-tight leading-9 text-black max-md:max-w-full dark:text-white">
        Blogs
      </h1>
      <div className="flex flex-row mt-4 justify-between">
        <div className="flex flex-row gap-8">
          <BlogSearch onSearch={handleSearch} />
          <BlogFilter />
          <BlogView />
        </div>
        <BlogNew />
      </div>
      <section className="mt-12 max-md:mt-10 max-md:max-w-full">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {filteredBlogs.map((blog, index) => (
            <BlogCard key={index} {...blog} onClick={() => openEditor(blog)} />
          ))}
        </div>
      </section>
      {selectedBlog && (
        <BlogEditor
          blog={selectedBlog}
          isOpen={isEditorOpen}
          onClose={closeEditor}
        />
      )}
    </div>
  );
}
