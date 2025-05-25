<<<<<<< HEAD
const config = {
  plugins: ["@tailwindcss/postcss"],
=======
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    'tailwindcss/nesting': {},
  },
>>>>>>> 43cde51294e2914b3ceb2211149a7bf6ae9e5de5
};

export default config;
