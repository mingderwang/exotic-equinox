/** @type {import('tailwindcss').Config} */
const { blackA, mauve, violet } = require('@radix-ui/colors');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				...blackA,
				...mauve,
				...violet,
			  },
		},
	},
	plugins: [],
}
