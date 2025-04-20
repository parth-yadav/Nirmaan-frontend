import { X, Upload } from "lucide-react";
import { useState, useRef } from "react";

interface StoryPreviewProps {
  title: string;
  content: string;
  coverPhoto: string;
  onClose: () => void;
  onPublish: () => void;
  onImageChange?: (newImage: File) => void; // New prop to handle image changes
}

export default function StoryPreview({
  title,
  content,
  coverPhoto,
  onClose,
  onPublish,
  onImageChange,
}: StoryPreviewProps) {
  const [topics, setTopics] = useState<string[]>([]);
  const [topicInput, setTopicInput] = useState("");
  const [previewImage, setPreviewImage] = useState<string>(coverPhoto);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddTopic = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && topicInput.trim() !== "" && topics.length < 5) {
      setTopics([...topics, topicInput.trim()]);
      setTopicInput("");
    }
  };

  const removeTopic = (index: number) => {
    setTopics(topics.filter((_, i) => i !== index));
  };

  const handleImageClick = () => {
    // Trigger the hidden file input when the image area is clicked
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    // Check if file is an image
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }

    // Create a preview URL
    const imageUrl = URL.createObjectURL(file);
    setPreviewImage(imageUrl);

    // Pass the file to parent component if needed
    if (onImageChange) {
      onImageChange(file);
    }
  };

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl p-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-gray-800">Blog Preview</h2>
          <div className="flex items-center"></div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex mb-8">
          <div className="w-1/2 pr-6 border-r">
            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
            />

            {/* Image upload area */}
            <div
              className="bg-gray-100 rounded-lg p-10 flex items-center justify-center h-48 cursor-pointer relative overflow-hidden"
              onClick={handleImageClick}
            >
              {previewImage ? (
                <>
                  <img
                    src={previewImage}
                    alt="Cover"
                    className="h-full w-full object-cover rounded absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="text-white flex flex-col items-center">
                      <Upload size={24} />
                      <span className="mt-2">Change Image</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center">
                  <Upload size={24} className="text-gray-400 mb-2" />
                  <p className="text-gray-500 text-center">
                    Click to upload an image for your story
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2">{title || "Hello"}</h3>
              <p className="text-gray-600 mb-4">
                {content.replace(/<[^>]*>/g, "").slice(0, 50) ||
                  "awdwdqwdqwdqwdawqw"}
              </p>

              <div className="text-gray-500 text-sm">
                <p className="font-medium mb-1">Note:</p>
                <p>
                  Changes here will affect how your story appears in public
                  places like Medium's homepage and in subscribers' inboxes —
                  not the contents of the story itself.
                </p>
              </div>
            </div>
          </div>

          <div className="w-1/2 pl-6">
            <div className="mb-6">
              <p className="mb-2 text-gray-700">
                Add or change topics (up to 5) so readers know what your story
                is about
              </p>

              <div className="border rounded-md p-2 mb-2">
                <div className="flex flex-wrap gap-2 mb-2">
                  {topics.map((topic, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 rounded-full px-3 py-1 flex items-center text-sm"
                    >
                      {topic}
                      <button
                        onClick={() => removeTopic(index)}
                        className="ml-2 text-gray-500 hover:text-gray-700"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="Add a topic..."
                  className="w-full outline-none"
                  value={topicInput}
                  onChange={(e) => setTopicInput(e.target.value)}
                  onKeyDown={handleAddTopic}
                  disabled={topics.length >= 5}
                />
              </div>
            </div>

            <div className="mb-8">
              <a href="#" className="text-green-700 hover:underline">
                Learn more
              </a>
              <span className="text-gray-700">
                {" "}
                about what happens to your post when you publish.
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={onPublish}
                className="bg-black hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full"
              >
                Publish now
              </button>
              <button className="text-gray-700 border hover:border-2 py-2 px-6 rounded-lg hover:text-gray-900">
                Schedule for later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
