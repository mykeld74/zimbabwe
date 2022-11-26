import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import path from 'path';

const config: UserConfig = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$css: path.resolve('./src/css'),
			$components: path.resolve('./src/components'),
			$data: path.resolve('./src/data'),
			$img: path.resolve('./src/images')
		}
	}
};

export default config;
