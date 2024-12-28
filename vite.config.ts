import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],

	server: {
		proxy: {
			'/api': {
				target: 'http://127.0.0.1:8000/',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
	},
});
