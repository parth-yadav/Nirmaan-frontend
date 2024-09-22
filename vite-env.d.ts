interface ImportMetaEnv {
  VITE_TINYMCE_API_KEY: string;
  // Add other environment variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}