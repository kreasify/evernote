module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      },
      fontFamily: {
				heading: ['var(--font-heading)'],
				body: ['var(--font-body)'],
			},
    },
  },
  plugins: [],
}