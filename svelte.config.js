// svelte.config.js
import adapter from '@sveltejs/adapter-vercel';
import { mdsvex } from 'mdsvex';
import { sveltePreprocess } from 'svelte-preprocess';

const mdsvexConfig = {
	extensions: ['.md', '.svx'],
	remarkPlugins: [],
	rehypePlugins: []
};

const config = {
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [sveltePreprocess(), mdsvex(mdsvexConfig)],
	kit: {
		adapter: adapter()
		// hydrate & router settings remain default
	}
};

export default config;
