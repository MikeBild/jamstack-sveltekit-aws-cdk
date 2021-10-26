import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import awscdkAdapter from 'sveltekit-adapter-aws';

/** @type {import('@sveltejs/kit').Config} */
export default {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  preprocess: [preprocess(), mdsvex(mdsvexConfig)],

  kit: {
    adapter: awscdkAdapter.default,
    target: '#svelte'
  }
};
