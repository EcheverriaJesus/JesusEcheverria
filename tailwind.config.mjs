/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'roboto': ["Roboto", "sans-serif"],
				'cantora': ["Cantora One", "sans-serif"],
				'metal': ["Metal Mania", "sans-serif"],
				'signika': ["Signika Negative", "sans-serif"],
				
			},
			animation: {
				'expand-vertically': 'expand-vertically 0.4s ease-out',
				'infinite-scroll': 'infinite-scroll 50s linear infinite',
			},
			keyframes: {
				'expand-vertically': {
					'0%': {
						transform: 'scaleY(0)',
					},
					'100%': {
						transform: 'scaleY(1)',
					},
				},
				'infinite-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				  },
				  'infinite-scroll2': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(100%)' },
				  },
			},
		},
	},
	plugins: [

	],
}
