/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				light: {
					...require("daisyui/src/colors/themes")["[data-theme=light]"],
					'base-100': "#f8fafc",
					'base-content': "#52525b"
				},
			},
			{
				dark: {
					...require("daisyui/src/colors/themes")["[data-theme=dark]"],
					'base-100': "#18181b",
					'base-content': "#ffffff"
				},
			},
		],
	},
}
