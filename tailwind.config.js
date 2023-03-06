/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({

	content: [
		"./src/**/*.{js,jsx,ts,tsx}",

	],
	theme: {

		borderRadius: {
			'none': '0',


			'full': '9999px',

			'4xl': '50px',
			'10xl': '150px'
		},
		letterSpacing: {
			tightest: '-.075em',
		},
		colors: {

			'darkpink': '#C44271',
			'ljusrosa': '#F06FA1',
			'lightgreen': '#18FFBD',
			'mediumgreen': '#10CB97',
			'darkgreen': '#429F76',

			'bajen': '#03834D',
			'vitt': '#efefef',
			'svart': '#333333',
			'space': '#253237'

		},
		fontSize: {
			'xs': '.75rem',
			'sm': '.875rem',
			'base': '1rem',
			'lg': '1.125rem',
			'xl': '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem',
			'8xl': '6rem',
			'9xl': '7rem',
			'10xl': '8rem',
			'rubrik': '8rem',
		},
		extend: {
			fontFamily: {
				'myfont': ['Montserrat', 'sans-serif'],
				'myfont2': ['Poppins', 'sans-serif'],
				'myfont3': ['Ubuntu', 'sans-serif'],
				'myfont4': ['Righteous', 'sans-serif'],

			},

			fontSize: {
				'about': ['24px', {
					letterSpacing: '-.0em', // custom letter spacing

					lineHeight: '0.8'   // custom line height
				}],
				'side': ['9rem', {
					letterSpacing: '-0.11em', // custom letter spacing

					lineHeight: '0.8'   // custom line height
				}],
				'header': ['11.5rem', {
					letterSpacing: '-0.10em', // custom letter spacing

					lineHeight: '0.8'   // custom line height
				}],      // custom font size
				'liten': ['3em', {
					letterSpacing: '-0.10em', // custom letter spacing

					lineHeight: '0.8'   // custom line height
				}],      // custom font size
				'rubrik': ['12.5rem', {
					letterSpacing: '-0.10em', // custom letter spacing

					lineHeight: '0.8'   // custom line height
				}],      // custom font size
				'10xl': ['8.5rem', {
					lineHeight: '0.8'   // custom line height
				}],      // custom font size
				'11xl': ['14rem', {
					lineHeight: '0.2',
					// custom line height
				}],      // custom font size
				'7xl': ['5rem', {
					lineHeight: '1.2'   // custom line height
				}],
				'sm': ['1rem', {
					letterSpacing: '0.05em' // custom letter spacing
				}],
				'md': ['1.5rem', {
					letterSpacing: '-0.02em', // custom letter spacing
					lineHeight: '1.5'        // custom line height
				}],
				'lg': ['2rem', {
					lineHeight: '1.6'        // custom line height
				}],
				'xl': ['2.5rem', {
					lineHeight: '1.8'        // custom line height
				}],
			},
			backgroundImage: theme => ({
				'bg': "url('/bg.jpg')",
				'bgme': "url('img/bgme.png')",
				'aroowdn': "url('img/arrowDown.svg')",


				'wave2': "url('img/waveright.svg')",
				'waver': "url('img/waveright2.svg')",
				'wave3': "url('img/waveleft.svg')",
				'wave4': "url('img/wavewave.svg')",
				'waveupp': "url('img/waveupp2.svg')",
				'wavener': "url('img/wavener.svg')",
				// 'waveutb': "url('img/waveutb.svg')",
				'me': "url('img/me.jpg')",
				'email': "url('img/mail.svg')",
				'email-open': "url('img/mail-open.svg')",
				'github': "url('img/mail-open.svg')",
				'document': "url('img/mail-open.svg')",
			}),

			dropShadow: {
				'3xl': '5px, 25px 25px rgba(0, 0, 100, 1)',
				'12xl': '0px, 10px 15px rgba(0, 0, 0, 0.41)',
				'4xl': [
					'0 35px 35px rgba(0, 0, 0, 0.25)',
					'0 45px 65px rgba(0, 0, 0, 0.15)'
				]
			}
		},
	},
	variants: {
		fill: ['hover', 'focus'], // this line does the trick
	},
	plugins: [],
});

