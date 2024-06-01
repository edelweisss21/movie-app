/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_MIGHTYMELD: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
