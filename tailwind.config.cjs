module.exports = {
  content: ["./src/**/*.{svelte,html}"],
  theme: {
	fontFamily: {
		open: ["Open Sans", "sans-serif"],
		fira: ["Fira Sans", "sans-serif"]
	},
	colors: {
		green: {
			300: "#d4e9e2",
			600: "#008248",
			900: "#1e3932",
		},
		white: {
			light: "#f1f8f6",
			cream: "#f3f1e7",
			full: "#fff",
		},
		black: {
			600: "rgba(0,0,0,.87)",
			full: "#000000"
		}
	},
	extend: {
		backgroundImage: {
			"header-desktop": "url(https://www.starbucks.com/weblx/images/rewards/hero/xl-hero-desktop_2021.png)",
			"header-mobile": "url(https://www.starbucks.com/weblx/images/rewards/hero/hero-mobile_2021.jpg)",
		},
	},
  },
  plugins: [],
}
