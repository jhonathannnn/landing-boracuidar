module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C1001F',      // Vermelho vibrante (BORA CUIDAR)
        black: '#000000',        // Preto intenso
        white: '#FFFFFF',        // Branco puro
        grayLight: '#F5F5F5',    // Cinza claro
        wood: '#F6CBA1',         // Amadeirado claro (degraus)
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 