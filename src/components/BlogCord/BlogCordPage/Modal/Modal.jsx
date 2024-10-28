import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Modal({ isOpen, onClose, blog }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{blog.title}</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
          <time className="text-sm text-gray-500 mb-4 block">{blog.date}</time>
          <p className="mb-4">{blog.content}</p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span>{blog.likes} likes</span>
            <span>{blog.views} views</span>
            <span>{blog.comments} comments</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
