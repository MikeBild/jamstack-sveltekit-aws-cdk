import preprocess from 'svelte-preprocess';
import awscdkAdapter from 'sveltekit-adapter-aws';

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: preprocess(),
	kit: {
		adapter: awscdkAdapter.default,
		target: '#svelte'
	}
};
