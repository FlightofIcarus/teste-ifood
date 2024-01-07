/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'mobile': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1380px',
      // => @media (min-width: 1380px) { ... }
    },
    extend: {
      colors: {
        'redbg': '#f7f7f7'},

      backgroundImage: {
        'ifood': "url('https://static.ifood-static.com.br/image/upload/t_banner/webapp/landing/groceries-background-mobile.png')"
      }
    },
  },
  plugins: [],
}

