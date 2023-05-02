/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode: 'class',
      extend: {
        // colors: {
        //   primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"}
        // }
        colors: {
          primary: {
            "50":"#eff6ff",
            "100":"#dbeafe",
            "200":"#bfdbfe",
            "300":"#93c5fd",
            "400":"#60a5fa",
            "500":"#3b82f6",
            "600":"#2563eb",
            "700":"#1d4ed8",
            "800":"#1e40af",
            "900":"#1e3a8a"
          },
          secondary: {
            "50":"#dfe9f5",
            "100":"#bcd8f2",
            "200":"#8cb9e8",
            "300":"#5e8dc3",
            "400":"#3a6ea9",
            "500":"#0f4c75",
            "600":"#0e4463",
            "700":"#0c3651",
            "800":"#0a2c42",
            "900":"#082535"
          },
          tertiary: {
            "50":"#d9e9f9",
            "100":"#b7d4f0",
            "200":"#92b4e2",
            "300":"#5e8ac6",
            "400":"#3f699b",
            "500":"#1b262c",
            "600":"#172225",
            "700":"#121b1f",
            "800":"#0d1418",
            "900":"#080c0f"
          }
        }
               
      },
      fontFamily: {
        'body': [
      'Lato',
      'Montserrat',
      'Poppins',
      'Inter', 
      'ui-sans-serif', 
      'system-ui', 
      '-apple-system', 
      'system-ui', 
      'Segoe UI', 
      'Roboto', 
      'Helvetica Neue', 
      'Arial', 
      'Noto Sans', 
      'sans-serif', 
      'Apple Color Emoji', 
      'Segoe UI Emoji', 
      'Segoe UI Symbol', 
      'Noto Color Emoji'
    ],
        'sans': [
      'Lato',
      'Montserrat',
      'Poppins',
      'Inter', 
      'ui-sans-serif', 
      'system-ui', 
      '-apple-system', 
      'system-ui', 
      'Segoe UI', 
      'Roboto', 
      'Helvetica Neue', 
      'Arial', 
      'Noto Sans', 
      'sans-serif', 
      'Apple Color Emoji', 
      'Segoe UI Emoji', 
      'Segoe UI Symbol', 
      'Noto Color Emoji'
    ]
      }
  },
  plugins: [],
}
