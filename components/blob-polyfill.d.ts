declare module 'blob-polyfill' {
  export const Blob: typeof globalThis.Blob;
  export const URL: typeof globalThis.URL;
}
