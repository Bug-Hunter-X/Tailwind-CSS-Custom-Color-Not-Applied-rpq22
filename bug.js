The following Tailwind CSS configuration causes unexpected behavior:```javascript
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#007bff',
      },
    },
  },
  plugins: [],
};
```When using the `custom-blue` color class in a component, Tailwind CSS does not apply the specified color. This is because the content array in the config does not include all the necessary paths to the files using the color class. 