/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        form: '500px',
      },
      boxShadow: {
        form: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
      },
      backgroundColor: {
        overlay: 'rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
