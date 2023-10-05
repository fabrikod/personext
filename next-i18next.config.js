module.exports = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr'],
  },
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/lang')
      : '/lang',

  reloadOnPrerender: process.env.NODE_ENV === 'development',
}