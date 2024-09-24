const TinyMCEConfig = {
  inline: true,
  menubar: true,
  plugins: [
    "advlist",
    "autolink",
    "lists",
    "link",
    "image",
    "charmap",
    "preview",
    "anchor",
    "searchreplace",
    "visualblocks",
    "code",
    "fullscreen",
    "insertdatetime",
    "media",
    "table",
    "code",
    "help",
    "wordcount",
  ],
  toolbar:
    "undo redo | formatselect | bold italic backcolor | " +
    "alignleft aligncenter alignright alignjustify | " +
    "bullist numlist outdent indent | removeformat | help",
  content_style: `
    .tox.tox-tinymce-inline .tox-editor-header {
      background-color: #ffffff;
      border: 1px solid #cccccc;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      overflow: hidden;
      padding: 4px;
      position: absolute;
      width: 100%;
      z-index: 100;
    }
  `,
};

export default TinyMCEConfig;
