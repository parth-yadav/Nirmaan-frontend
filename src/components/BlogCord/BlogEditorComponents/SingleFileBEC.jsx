// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { hideEditor } from "../../../store/blogEditorSlice";

// function BlogHeader({ isPublished = false }) {
//   const dispatch = useDispatch();

//   const handleCrossClick = () => {
//     dispatch(hideEditor());
//   };

//   return (
//     <div className="flex flex-wrap gap-5 justify-between w-full font-medium leading-none text-green-800 whitespace-nowrap max-md:max-w-full">
//       {isPublished && (
//         <div className="flex gap-1.5 justify-center items-center px-2 py-1.5 bg-green-200 rounded-md">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/64db57426044057a7d6922522ad27ca6bf8269a91714fe31bf7f38da2c1c7b20?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
//             className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
//             alt=""
//           />
//           <div className="self-stretch my-auto">Published</div>
//         </div>
//       )}
//       <button onClick={handleCrossClick}>
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/75971904da857823c437cb2eb2c6ef1b8ab27ab6db876fa727bf66c43e016bc6?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
//           className="object-contain shrink-0 w-6 aspect-square"
//           alt="Settings icon"
//         />
//       </button>
//     </div>
//   );
// }

// const BlogTitle = ({ title, onChange }) => (
//   <div className="flex flex-col mt-8 w-full max-md:max-w-full">
//     <label htmlFor="blogTitle" className="font-medium text-slate-900">
//       Title
//     </label>
//     <div className="flex gap-2 items-start mt-1.5 w-full text-slate-400 max-md:max-w-full">
//       <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
//         <input
//           id="blogTitle"
//           type="text"
//           className="self-stretch py-2 pr-14 pl-3 w-full bg-white rounded-md border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
//           value={title}
//           onChange={onChange}
//           placeholder="Blog Title"
//         />
//       </div>
//     </div>
//   </div>
// );

// const BlogDescription = ({ description, onChange }) => (
//   <div className="flex flex-col mt-5 max-md:max-w-full">
//     <div className="flex flex-col w-full max-md:max-w-full">
//       <div className="flex flex-col items-start w-full rounded-md max-md:max-w-full">
//         <label
//           htmlFor="blogDescription"
//           className="font-medium leading-none text-black"
//         >
//           Description
//         </label>
//         <textarea
//           id="blogDescription"
//           className="gap-2.5 self-stretch px-3 pt-2 pb-14 mt-1.5 bg-white rounded-md border border-solid border-slate-300 min-h-[80px] text-slate-400 max-md:max-w-full"
//           placeholder="Blog description goes here"
//           value={description}
//           onChange={onChange}
//         ></textarea>
//         <div className="mt-1.5 text-slate-500">
//           The title and description will be used for SEO purposes.
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const TagInput = ({ tags, onAddTag, onRemoveTag }) => {
//   const [inputValue, setInputValue] = useState("");

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && inputValue.trim()) {
//       onAddTag(inputValue.trim());
//       setInputValue("");
//     }
//   };

//   return (
//     <div className="flex flex-col self-stretch w-full min-h-[183px] max-md:max-w-full">
//       <label
//         htmlFor="tagSearch"
//         className="font-medium leading-none text-slate-900"
//       >
//         Tags
//       </label>
//       <div className="flex gap-2 items-start mt-1.5 w-full text-base text-slate-400 max-md:max-w-full">
//         <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
//           <input
//             id="tagSearch"
//             type="text"
//             className="self-stretch py-2 pr-14 pl-3 w-full bg-white rounded-md border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
//             placeholder="Search for tags here"
//             value={inputValue}
//             onChange={handleInputChange}
//             onKeyDown={handleKeyDown}
//           />
//         </div>
//       </div>
//       <div className="mt-1.5 leading-none text-slate-500">
//         Tags helps in SEO and works as keywords
//       </div>
//       <div className="flex flex-wrap gap-2 mt-2">
//         {tags.map((tag, index) => (
//           <Tag key={index} text={tag} onRemove={() => onRemoveTag(tag)} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const Tag = ({ text, onRemove }) => (
//   <div className="flex z-10 gap-1.5 justify-center items-center px-2 my-1 py-1.5 leading-none text-blue-800 bg-blue-200 rounded-md">
//     <img
//       loading="lazy"
//       src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c1719c9429145814a47468ba4b4d639b81c13c719be84ad134e3fc1c64d9fe3?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
//       className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
//       alt=""
//     />
//     <div className="self-stretch my-auto">{text}</div>
//     <button onClick={onRemove} className="ml-1 text-xs">
//       &times;
//     </button>
//   </div>
// );

// const ActionButton = ({ text, icon, bgColor, textColor, onClick }) => (
//   <button
//     className={`flex gap-2 justify-center items-center px-4 py-2 text-${textColor} rounded-md ${bgColor}`}
//     onClick={onClick}
//   >
//     <img
//       loading="lazy"
//       src={icon}
//       className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
//       alt=""
//     />
//     <span className="self-stretch my-auto">{text}</span>
//   </button>
// );

// const StatisticItem = ({ icon, text }) => (
//   <div className="flex gap-1.5 mt-2.5">
//     <img
//       loading="lazy"
//       src={icon}
//       className="object-contain shrink-0 aspect-square w-[18px]"
//       alt=""
//     />
//     <div className="my-auto">{text}</div>
//   </div>
// );

// function BlogEditor({ blog }) {
//   const dispatch = useDispatch();
//   const isVisible = useSelector((state) => state.blogEditor.isVisible);
//  [editedBlog, setEditedBlog] = useState(blog || {});

//   if (!isVisible) {
//     return null;
//   }

//   const handleHideEditor = () => {
//     dispatch(hideEditor());
//   };

//   const handleTitleChange = (e) => {
//     setEditedBlog({ ...editedBlog, title: e.target.value });
//   };

//   const handleDescriptionChange = (e) => {
//     setEditedBlog({ ...editedBlog, description: e.target.value });
//   };

//   const handleAddTag = (tag) => {
//     setEditedBlog({ ...editedBlog, tags: [...editedBlog.tags, tag] });
//   };

//   const handleRemoveTag = (tagToRemove) => {
//     setEditedBlog({
//       ...editedBlog,
//       tags: editedBlog.tags.filter((tag) => tag !== tagToRemove),
//     });
//   };

//   const handleSaveChanges = () => {
//     // Implement save logic here
//     console.log("Saving changes:", editedBlog);
//     // After saving, you might want to update the global state or send data to an API
//     handleHideEditor();
//   };

//   return (
//     <div className="fixed inset-y-0 right-0 w-full max-w-xl overflow-auto z-50">
//       <div className="p-4 h-full rounded-l-lg">
//         <main className="flex flex-col rounded-none max-w-[600px]">
//           <section className="flex flex-col pt-8 pb-40 w-full bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)] max-md:pb-24 max-md:max-w-full">
//             <div className="flex z-10 flex-col px-8 w-full text-sm leading-none max-md:px-5 max-md:max-w-full">
//               <div className="flex flex-col w-full max-md:max-w-full">
//                 <BlogHeader isPublished={editedBlog?.isPublished} />
//                 <BlogTitle
//                   title={editedBlog.title}
//                   onChange={handleTitleChange}
//                 />
//                 <BlogDescription
//                   description={editedBlog.description}
//                   onChange={handleDescriptionChange}
//                 />
//               </div>
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/23a979084e1caf06971cdc3871ead192bf09178630689dfe54c437b4b7f280db?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
//                 className="object-contain self-end mt-14 w-6 aspect-square max-md:mt-10 max-md:mr-2"
//                 alt="Decorative element"
//               />
//             </div>
//             <div className="flex flex-col items-start px-8 pb-14 mt-0 w-full text-sm font-medium max-md:px-5 max-md:max-w-full">
//               <TagInput
//                 tags={editedBlog.tags}
//                 onAddTag={handleAddTag}
//                 onRemoveTag={handleRemoveTag}
//               />
//             </div>
//             <div className="flex z-10 flex-col items-start -mt-4 mb-0 w-full max-md:mb-2.5 max-md:max-w-full">
//               <button
//                 className="gap-2.5 self-stretch px-4 py-2 ml-8 text-sm font-medium leading-6 text-white rounded-md bg-slate-900 max-md:ml-2.5"
//                 onClick={handleSaveChanges}
//               >
//                 Save changes
//               </button>
//               <hr className="self-stretch mt-9 w-full bg-gray-300 border border-gray-300 border-solid min-h-[1px] max-md:max-w-full" />
//               <div className="flex flex-col mt-8 ml-8 max-w-full w-[310px] max-md:ml-2.5">
//                 <h2 className="self-start text-xl font-semibold tracking-normal leading-snug text-black">
//                   Actions
//                 </h2>
//                 <div className="flex gap-4 mt-5 w-full text-sm font-medium leading-6">
//                   <ActionButton
//                     text="Edit blog content"
//                     icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6d4f01932fdfa9bd93b5b761937dbdb9e08544d001f7e1fd0cfb0b6b6d1fb91f?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
//                     bgColor="bg-slate-900"
//                     textColor="white"
//                     onClick={() => console.log("Edit blog content")}
//                   />
//                   <ActionButton
//                     text={editedBlog.isPublished ? "Unpublish" : "Publish"}
//                     icon="https://cdn.builder.io/api/v1/image/assets/TEMP/cfd700e087a44b3a539342b38719e23bb7e384d457870b519e98f651c93649ef?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
//                     bgColor={
//                       editedBlog.isPublished ? "bg-red-300" : "bg-green-300"
//                     }
//                     textColor="black"
//                     onClick={() =>
//                       setEditedBlog({
//                         ...editedBlog,
//                         isPublished: !editedBlog.isPublished,
//                       })
//                     }
//                   />
//                 </div>
//               </div>
//               <hr className="self-stretch mt-9 w-full bg-gray-300 border border-gray-300 border-solid min-h-[1px] max-md:max-w-full" />
//               <div className="flex flex-col items-start mt-7 ml-8 max-w-full text-sm font-medium leading-none text-black w-[143px] max-md:ml-2.5">
//                 <h2 className="text-xl font-semibold tracking-normal leading-snug">
//                   Statistics
//                 </h2>
//                 <StatisticItem
//                   icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b0e0684022dd40e936f128c744b3409df4fd99c457b3cb8bed70ec9d6f855e14?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
//                   text={`Total Views: ${editedBlog.views}`}
//                 />
//                 <StatisticItem
//                   icon="https://cdn.builder.io/api/v1/image/assets/TEMP/fd44d81c7989cc5f7356c2d07820ee88685c6d3d54775071769c3d0eeefc72c2?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
//                   text={`Saved by: ${editedBlog.saves}`}
//                 />
//                 <StatisticItem
//                   icon="https://cdn.builder.io/api/v1/image/assets/TEMP/8b12b3589f94d8e323827619185302e1a655da69e9da762b1d278a630ce1e9e4?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
//                   text={`Liked by: ${editedBlog.likes}`}
//                 />
//               </div>
//             </div>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default BlogEditor;


import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideEditor } from "../../../store/blogEditorSlice";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

function BlogHeader({ isOpen,isPublished ,onClose }) {
  if (!isOpen) return null;

  const dispatch = useDispatch();

  const handleCrossClick = () => {
    onClose;
  };

  return (
    <div className="flex flex-wrap gap-5 justify-between w-full font-medium leading-none text-green-800 whitespace-nowrap max-md:max-w-full">
   
      {isPublished ? (
        <div className="flex gap-1.5 justify-center items-center px-2 py-1.5 bg-green-200 rounded-md">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/64db57426044057a7d6922522ad27ca6bf8269a91714fe31bf7f38da2c1c7b20?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
            className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
            alt=""
          />
          <div className="self-stretch my-auto">Published</div>
        </div>
      ) : (
        <div className="flex gap-1.5 justify-center items-center px-2 py-1.5 bg-red-500 rounded-md">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/64db57426044057a7d6922522ad27ca6bf8269a91714fe31bf7f38da2c1c7b20?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
            className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
            alt=""
          />
          <div className="self-stretch my-auto text-white">Not Published</div>
        </div>
      )}

      <Button variant="ghost" size="icon" onClick={onClose}>
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
}

const BlogTitle = ({ title, onChange }) => (
  <div className="flex flex-col mt-8 w-full max-md:max-w-full">
    <label htmlFor="blogTitle" className="font-medium text-slate-900">
      Title
    </label>
    <div className="flex gap-2 items-start mt-1.5 w-full text-slate-400 max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
        <input
          id="blogTitle"
          type="text"
          className="self-stretch py-2 pr-14 pl-3 w-full bg-white rounded-md border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
          value={title}
          onChange={onChange}
          placeholder="Blog Title"
        />
      </div>
    </div>
  </div>
);

const BlogDescription = ({ description, onChange }) => (
  <div className="flex flex-col mt-5 max-md:max-w-full">
    <div className="flex flex-col w-full max-md:max-w-full">
      <div className="flex flex-col items-start w-full rounded-md max-md:max-w-full">
        <label
          htmlFor="blogDescription"
          className="font-medium leading-none text-black"
        >
          Description
        </label>
        <textarea
          id="blogDescription"
          className="gap-2.5 self-stretch px-3 pt-2 pb-14 mt-1.5 bg-white rounded-md border border-solid border-slate-300 min-h-[80px] text-slate-400 max-md:max-w-full"
          placeholder="Blog description goes here"
          value={description}
          onChange={onChange}
        ></textarea>
        <div className="mt-1.5 text-slate-500">
          The title and description will be used for SEO purposes.
        </div>
      </div>
    </div>
  </div>
);

const TagInput = ({ tags, onAddTag, onRemoveTag }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      onAddTag(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div className="flex flex-col self-stretch w-full min-h-[183px] max-md:max-w-full">
      <label
        htmlFor="tagSearch"
        className="font-medium leading-none text-slate-900"
      >
        Tags
      </label>
      <div className="flex gap-2 items-start mt-1.5 w-full text-base text-slate-400 max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
          <input
            id="tagSearch"
            type="text"
            className="self-stretch py-2 pr-14 pl-3 w-full bg-white rounded-md border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
            placeholder="Search for tags here"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
      <div className="mt-1.5 leading-none text-slate-500">
        Tags helps in SEO and works as keywords
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, index) => (
          <Tag key={index} text={tag} onRemove={() => onRemoveTag(tag)} />
        ))}
      </div>
    </div>
  );
};

const Tag = ({ text, onRemove }) => (
  <div className="flex z-10 gap-1.5 justify-center items-center px-2 my-1 py-1.5 leading-none text-blue-800 bg-blue-200 rounded-md">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c1719c9429145814a47468ba4b4d639b81c13c719be84ad134e3fc1c64d9fe3?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
      className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
      alt=""
    />
    <div className="self-stretch my-auto">{text}</div>
    <button onClick={onRemove} className="ml-1 text-xs">
      &times;
    </button>
  </div>
);

const ActionButton = ({ text, icon, bgColor, textColor, onClick }) => (
  <button
    className={`flex gap-2 justify-center items-center px-4 py-2 text-${textColor} rounded-md ${bgColor}`}
    onClick={onClick}
  >
    <img
      loading="lazy"
      src={icon}
      className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
      alt=""
    />
    <span className="self-stretch my-auto">{text}</span>
  </button>
);

const StatisticItem = ({ icon, text }) => (
  <div className="flex gap-1.5 mt-2.5">
    <img
      loading="lazy"
      src={icon}
      className="object-contain shrink-0 aspect-square w-[18px]"
      alt=""
    />
    <div className="my-auto">{text}</div>
  </div>
);

function BlogEditor({ isOpen ,blog ,onClose }) {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.blogEditor.isVisible);
  const [editedBlog, setEditedBlog] = useState(blog || {});

  

  const handleHideEditor = () => {
    dispatch(hideEditor());
  };

  const handleTitleChange = (e) => {
    setEditedBlog({ ...editedBlog, title: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setEditedBlog({ ...editedBlog, description: e.target.value });
  };

  const handleAddTag = (tag) => {
    setEditedBlog({ ...editedBlog, tags: [...editedBlog.tags, tag] });
  };

  const handleRemoveTag = (tagToRemove) => {
    setEditedBlog({
      ...editedBlog,
      tags: editedBlog.tags.filter((tag) => tag !== tagToRemove),
    });
  };

  const handleSaveChanges = () => {
    // Implement save logic here
    console.log("Saving changes:", editedBlog);
    // After saving, you might want to update the global state or send data to an API
    handleHideEditor();
  };

  return (
    <div className="fixed inset-y-0 right-0 w-full max-w-xl overflow-auto z-50">
      <div className="p-4 h-full rounded-l-lg">
        <main className="flex flex-col rounded-none max-w-[600px]">
          <section className="flex flex-col pt-8 pb-40 w-full bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)] max-md:pb-24 max-md:max-w-full">
            <div className="flex z-10 flex-col px-8 w-full text-sm leading-none max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col w-full max-md:max-w-full">
                <BlogHeader onClose={ onClose} isOpen={ isOpen} isPublished={editedBlog?.isPublished} />
                <BlogTitle
                  title={editedBlog.title}
                  onChange={handleTitleChange}
                />
                <BlogDescription
                  description={editedBlog.description}
                  onChange={handleDescriptionChange}
                />
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/23a979084e1caf06971cdc3871ead192bf09178630689dfe54c437b4b7f280db?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
                className="object-contain self-end mt-14 w-6 aspect-square max-md:mt-10 max-md:mr-2"
                alt="Decorative element"
              />
            </div>
            <div className="flex flex-col items-start px-8 pb-14 mt-0 w-full text-sm font-medium max-md:px-5 max-md:max-w-full">
              <TagInput
                tags={editedBlog.tags}
                onAddTag={handleAddTag}
                onRemoveTag={handleRemoveTag}
              />
            </div>
            <div className="flex z-10 flex-col items-start -mt-4 mb-0 w-full max-md:mb-2.5 max-md:max-w-full">
              <button
                className="gap-2.5 self-stretch px-4 py-2 ml-8 text-sm font-medium leading-6 text-white rounded-md bg-slate-900 max-md:ml-2.5"
                onClick={handleSaveChanges}
              >
                Save changes
              </button>
              <hr className="self-stretch mt-9 w-full bg-gray-300 border border-gray-300 border-solid min-h-[1px] max-md:max-w-full" />
              <div className="flex flex-col mt-8 ml-8 max-w-full w-[310px] max-md:ml-2.5">
                <h2 className="self-start text-xl font-semibold tracking-normal leading-snug text-black">
                  Actions
                </h2>
                <div className="flex gap-4 mt-5 w-full text-sm font-medium leading-6">
                  <ActionButton
                    text="Edit blog content"
                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6d4f01932fdfa9bd93b5b761937dbdb9e08544d001f7e1fd0cfb0b6b6d1fb91f?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
                    bgColor="bg-slate-900"
                    textColor="white"
                    onClick={() => console.log("Edit blog content")}
                  />
                  <ActionButton
                    text={editedBlog.isPublished ? "Unpublish" : "Publish"}
                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/cfd700e087a44b3a539342b38719e23bb7e384d457870b519e98f651c93649ef?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
                    bgColor={
                      editedBlog.isPublished ? "bg-red-300" : "bg-green-300"
                    }
                    textColor="black"
                    onClick={() =>
                      setEditedBlog({
                        ...editedBlog,
                        isPublished: !editedBlog.isPublished,
                      })
                    }
                  />
                </div>
              </div>
              <hr className="self-stretch mt-9 w-full bg-gray-300 border border-gray-300 border-solid min-h-[1px] max-md:max-w-full" />
              <div className="flex flex-col items-start mt-7 ml-8 max-w-full text-sm font-medium leading-none text-black w-[143px] max-md:ml-2.5">
                <h2 className="text-xl font-semibold tracking-normal leading-snug">
                  Statistics
                </h2>
                <StatisticItem
                  icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b0e0684022dd40e936f128c744b3409df4fd99c457b3cb8bed70ec9d6f855e14?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
                  text={`Total Views:  ${editedBlog.views}`}
                />
                <StatisticItem
                  icon="https://cdn.builder.io/api/v1/image/assets/TEMP/fd44d81c7989cc5f7356c2d07820ee88685c6d3d54775071769c3d0eeefc72c2?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
                  text={`Saved by: ${editedBlog.saves}`}
                />
                <StatisticItem
                  icon="https://cdn.builder.io/api/v1/image/assets/TEMP/8b12b3589f94d8e323827619185302e1a655da69e9da762b1d278a630ce1e9e4?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
                  text={`Liked by: ${editedBlog.likes}`}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default BlogEditor;
