"use client";

import { useState } from "react";
import BlogCreator from "./BlogCreator";
import BlogList from "./BlogList";
import SingleBlogPost from "./SingleBlogPost";
import NirmanButton from "../NirmanButton/NirmanButton";

interface Blog {
  id: number;
  title: string;
  content: string;
  coverPhoto: string;
  date: string;
}

const dummyBlogs: Blog[] = [
  {
    id: 1,
    title: "My First Blog Post",
    content:
      "<p>This is the content of my first blog post. It's amazing!</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
    coverPhoto: "/placeholder.svg?height=300&width=400",
    date: "2023-05-01T12:00:00Z",
  },
  {
    id: 2,
    title: "Adventures in Coding",
    content:
      "<p>Today, I learned about React and Next.js. It was fun!</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
    coverPhoto: "/placeholder.svg?height=300&width=400",
    date: "2023-05-05T14:30:00Z",
  },
];

export default function BlogEditorPage() {
  const [blogs, setBlogs] = useState<Blog[]>(dummyBlogs);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const addBlog = (blog: Omit<Blog, "id">) => {
    setBlogs([...blogs, { ...blog, id: blogs.length + 1 }]);
  };

  const selectBlog = (id: number) => {
    const blog = blogs.find((b) => b.id === id);
    setSelectedBlog(blog || null);
  };

  return (
    <div className="min-h-screen bg-purple-100 ">
      <header className="bg-white text-black pl-6 py-4">
        <div className="text-left ml-12">
          <NirmanButton />
        </div>
      </header>
      <main className="container mx-auto p-4">
       
         
            <BlogCreator addBlog={addBlog} />
         
      
      </main>
    </div>
  );
}
