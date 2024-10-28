import { Img } from "react-image";
import { format } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { BlogPost } from "./blog-data";

interface BlogPost {
  title: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  coverImage: string;
  content: string;
}

export default function SingleBlog({ post }: { post: BlogPost | undefined }) {
  if (!post) {
    return (
      <Card className="max-w-4xl mx-auto my-8">
        <CardHeader>
          <Skeleton className="h-8 w-3/4" />
          <div className="flex items-center space-x-4 mt-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div>
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-32 mt-2" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Skeleton className="w-full h-[400px] mb-8" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6 mt-2" />
          <Skeleton className="h-4 w-4/6 mt-2" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-4xl mx-auto my-8">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">{post.title}</CardTitle>
        <div className="flex items-center space-x-4 mt-4">
          <Avatar>
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{post.author.name}</p>
            <p className="text-sm text-muted-foreground">
              {format(new Date(post.date), "MMMM d, yyyy")}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-[400px] mb-8">
          <Img
            src={post.coverImage}
            alt={`Cover image for ${post.title}`}
            className="object-cover w-full h-full"
            loader={<Skeleton className="w-full h-full" />}
          />
        </div>
        <div
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </CardContent>
    </Card>
  );
}
