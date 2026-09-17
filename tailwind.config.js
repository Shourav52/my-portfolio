/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg0: '#080b12',
        bg1: '#0a0e16',
        bg2: '#0f1826',
        bg3: '#131f30',
        line: '#1f2c3d',
        lineStrong: '#2c3d54',
        ink0: '#eaf0f6',
        ink1: '#b7c3d1',
        ink2: '#7c8ba0',
        cyan: '#5eb3e6',
        cyanDim: '#3a6a86',
        amber: '#d9a15b',
        amberDim: '#8a6a44',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        wrap: '1120px',
      },
    },
  },
  plugins: [],
}
