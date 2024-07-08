/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: { 

        // Add new colors 
        colors: { 
            'custom gradient' : '',
            'custom-text':'#EAEAEA',
            'custom-purple':'#252A34',
            'custom-grey': '#EDF1D6', 
            'custom-green': '#609966', 
            'custom-blue': '#344D67', 
        }, 
    }, 
},
  plugins: [],
}

