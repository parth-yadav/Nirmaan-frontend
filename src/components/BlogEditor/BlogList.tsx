import BlogPost from "./BlogPost";

interface Blog {
  id: number;
  title: string;
  content: string;
  coverPhoto: string;
  date: string;
}

interface BlogListProps {
  blogs: Blog[];
  selectBlog: (id: number) => void;
}

export default function BlogList({ blogs, selectBlog }: BlogListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogPost key={blog.id} blog={blog} selectBlog={selectBlog} />
      ))}
    </div>
  );
}
