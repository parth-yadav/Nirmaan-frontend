import React from "react";
import BlogSearch from "./BlogSearch";
import BlogCard from "./BlogCard";
import { useState } from "react";
import BlogFilter from "./BlogFilter";
import BlogView from "./BlogView";

const blogData = [
  {
    tags: ["Freshers", "UPSC"],
    date: "12 Feb 2024",
    title: "Nirman",
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisi nam viverra dolor faucibus tempor mollis eget sit. Gravida senectus sed faucibus eu sed pharetra feugiat. Venenatis mi diam egestas faucibus sit nam.",
    likes: 459,
    views: 9878,
    comments: 32,
  },
  {
    tags: ["Freshers", "UPSC"],
    date: "12 Feb 2024",
    title:
      "Lorem ipsum dolor sit amet consectetur. Volutpat imperdiet id arcu in.",
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisi nam viverra dolor faucibus tempor mollis eget sit. Gravida senectus sed faucibus eu sed pharetra feugiat. Venenatis mi diam egestas faucibus sit nam.",
    likes: 459,
    views: 9878,
    comments: 32,
  },

  {
    tags: ["Freshers", "UPSC"],
    date: "12 Feb 2024",
    title:
      "Lorem ipsum dolor sit amet consectetur. Volutpat imperdiet id arcu in.",
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisi nam viverra dolor faucibus tempor mollis eget sit. Gravida senectus sed faucibus eu sed pharetra feugiat. Venenatis mi diam egestas faucibus sit nam.",
    likes: 459,
    views: 9878,
    comments: 32,
  },
  {
    tags: ["Freshers", "UPSC"],
    date: "12 Feb 2024",
    title:
      "Lorem ipsum dolor sit amet consectetur. Volutpat imperdiet id arcu in.",
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisi nam viverra dolor faucibus tempor mollis eget sit. Gravida senectus sed faucibus eu sed pharetra feugiat. Venenatis mi diam egestas faucibus sit nam.",
    likes: 459,
    views: 9878,
    comments: 32,
  },
  {
    tags: ["Freshers", "UPSC"],
    date: "12 Feb 2024",
    title:
      "Very small title ",
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisi nam viverra dolor faucibus tempor mollis eget sit. Gravida senectus sed faucibus eu sed pharetra feugiat. Venenatis mi diam egestas faucibus sit nam.",
    likes: 459,
    views: 9878,
    comments: 32,
  },

  // Repeat the above object 3 more times for the other blog cards
];

function BlogList() {
  const [filteredBlogs, setFilteredBlogs] = useState(blogData);

  const handleSearch = (searchTerm) => {
    const filtered = blogData.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBlogs(filtered);
  };
  return (
    <div className="flex flex-col mt-14 max-md:mt-10 max-md:max-w-full px-4 max-md:px-2">
      {/* Title */}
      <h1 className="text-3xl font-semibold tracking-tight leading-9 text-black dark:text-white text-center max-md:text-2xl">
        Blogs
      </h1>

      {/* Search and Filters */}
      <div className="flex flex-row mt-4 justify-between items-center max-md:flex-col max-md:gap-4">
        <div className="flex flex-row gap-8 max-md:flex-col max-md:gap-4 w-full">
          <BlogSearch onSearch={handleSearch} />
          <BlogFilter />
        </div>
        <div className="max-md:w-full">
          <BlogView />
        </div>
      </div>

      {/* Blog Cards Section */}
      <section className="mt-6 max-md:max-w-full">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 max-md:gap-4">
          {filteredBlogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </section>

      {/* Additional Section */}
      <section className="mt-12 max-md:mt-10 max-md:max-w-full">
        {/* Add content here */}
      </section>
    </div>
  );
}

export default BlogList;
