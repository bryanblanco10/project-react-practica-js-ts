/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_YOTUBE_DATA_API_KEY: string
  readonly VITE_YOUTUBE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
