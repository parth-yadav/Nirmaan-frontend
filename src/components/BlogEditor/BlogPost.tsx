import { motion } from "framer-motion";

// Define the types for the props
interface Blog {
  id: number; // Changed to number
  title: string;
  coverPhoto?: string;
  content: string;
  date: string | Date;
}

interface BlogPostProps {
  blog: Blog;
  selectBlog: (id: number) => void; // Changed id to number
}


export default function BlogPost({ blog, selectBlog }: BlogPostProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl shadow-md overflow-hidden"
    >
      <img
        src={blog.coverPhoto || "/placeholder.svg"}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 " >
        <h3 className="text-xl font-semibold text-purple-800 mb-2">
          {blog.title}
        </h3>
        <p className="text-gray-600 text-sm mb-2">
          {new Date(blog.date).toLocaleDateString()}
        </p>
        <div
          className="text-gray-700 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        <button
          onClick={() => selectBlog(blog.id)}
          className="mt-4 text-purple-600 hover:text-purple-800 focus:outline-none focus:underline"
        >
          Read More
        </button>
      </div>
    </motion.div>
  );
}
