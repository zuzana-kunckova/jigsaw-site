module.exports = {
  theme: {
    borderColor: theme => ({
      default: theme('colors.grey-light'),
      ...theme('colors'),
    }),
    colors: {
      'transparent': 'transparent',

      'brown-lightest': '#F7F6F5',

      'black': '#222b2f',
      'grey-darkest': '#364349',
      'grey-darker': '#596a73',
      'grey-dark': '#70818a',
      'grey': '#f2f5f8',
      'grey-light': '#dae4e9',
      'grey-lighter': '#f3f7f9',
      'grey-lightest': '#fafcfc',
      'white': '#ffffff',

      'red-darkest': '#420806',
      'red-darker': '#6a1b19',
      'red-dark': '#cc1f1a',
      'red': '#e3342f',
      'red-light': '#ef5753',
      'red-lighter': '#f9acaa',
      'red-lightest': '#fcebea',

      'orange-darkest': '#542605',
      'orange-darker': '#7f4012',
      'orange-dark': '#de751f',
      'orange': '#f6993f',
      'orange-light': '#faad63',
      'orange-lighter': '#fcd9b6',
      'orange-lightest': '#fff5eb',

      'yellow-darkest': '#453411',
      'yellow-darker': '#684f1d',
      'yellow-dark': '#f2d024',
      'yellow': '#ffed4a',
      'yellow-light': '#fff382',
      'yellow-lighter': '#fff9c2',
      'yellow-lightest': '#fcfbeb',

      'green-darkest': '#032d19',
      'green-darker': '#0b4228',
      'green-dark': '#1f9d55',
      'green': '#38c172',
      'green-light': '#51d88a',
      'green-lighter': '#a2f5bf',
      'green-lightest': '#e3fcec',

      'teal-darkest': '#0d3331',
      'teal-darker': '#174e4b',
      'teal-dark': '#38a89d',
      'teal': '#0F2F53',
      'teal-light': '#AEF2FD',
      'teal-lighter': '#a0f0ed',
      'teal-lightest': '#e8fffe',

      'blue-darkest': '#0A2440',
      'blue-darker': '#0F2F53',
      'blue-dark': '#45658a',
      'blue': '#3C6492',
      'blue-light': '#6c88a9',
      'blue-lighter': '#2D81DF',
      'blue-lightest': '#eff8ff',

      'indigo-darkest': '#191e38',
      'indigo-darker': '#3E6389',
      'indigo-dark': '#143154',
      'indigo': '#6574cd',
      'indigo-light': '#7886d7',
      'indigo-lighter': '#e1e6ea',
      'indigo-lightest': '#c4d0dc',

      'purple-darkest': '#2D0F34',
      'purple-darker': '#562b61',
      'purple-dark': '#773580',
      'purple': '#96539f',
      'purple-light': '#a779e9',
      'purple-lighter': '#cbabf8',
      'purple-lightest': '#f3ebff',

      'pink-darkest': '#45051e',
      'pink-darker': '#72173a',
      'pink-dark': '#eb5286',
      'pink': '#ee6e99',
      'pink-light': '#fa7ea8',
      'pink-lighter': '#FFD8D8',
      'pink-lightest': '#ffebef',
    },
    maxWidth: {
      '25':'25px',
      'xs': '20rem',
      'sm': '30rem',
      'md': '35rem',
      'lg': '45rem',
      'xl': '55rem',
      '2xl': '65rem',
      '3xl': '75rem',
      '4xl': '90rem',
      '5xl': '100rem',
      'full': '100%',
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },
    extend: {
      borderWidth: {
        '5': '5px',
      },
      fontFamily: {
        'sans': [
          'proxima-nova',
          'system-ui',
          'BlinkMacSystemFont',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      height: {
        '70': '20rem',
        '76': '25rem',
      },
      leading: {
        '0': .5,
      },
    }
  },
  variants: {
    // ...
  },
  plugins: [
    // ...
  ],
}