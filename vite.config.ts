import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/forgesteel/',
	build: {
		chunkSizeWarningLimit: 8000
	},
	plugins: [ react() ]
});
