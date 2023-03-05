/**
 * Framework documentation: https://vuetifyjs.com`
 */

import { ru } from 'vuetify/locale'
// import colors from 'vuetify/lib/util/color'
import colors from 'vuetify/lib/util/colors'
// import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: colors.teal.base,
          secondary: colors.teal.lighten2,
          accent: colors.indigo.base
          // accent: '#EB5757',
          // error: '#F2994A',
          // info: '#F2C94C',
          // success: '#219653',
          // warning: '#000000'
        }
      }
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  locale: {
    locale: 'ru',
    messages: { ru }
  }
})

export default vuetify
