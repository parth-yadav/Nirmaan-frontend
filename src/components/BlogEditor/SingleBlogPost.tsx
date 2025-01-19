"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

interface Blog {
  id: number;
  title: string;
  content: string;
  coverPhoto: string;
  date: string;
}

interface SingleBlogPostProps {
  blog: Blog;
}

export default function SingleBlogPost({ blog }: SingleBlogPostProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden max-w-3xl mx-auto mt-8"
    >
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        src={blog.coverPhoto || "/placeholder.svg"}
        alt={blog.title}
        className="w-full h-64 object-cover"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="p-6"
      >
        <h1 className="text-3xl font-bold text-purple-800 mb-4">
          {blog.title}
        </h1>
        <p className="text-gray-600 text-sm mb-4">
          {new Date(blog.date).toLocaleDateString()}
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="prose prose-purple max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </motion.div>
    </motion.div>
  );
}
