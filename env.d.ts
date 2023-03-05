/// <reference types="vite/client" />

interface ImportMetaEnv {
  VUE_APP_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
