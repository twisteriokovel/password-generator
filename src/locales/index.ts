import { createI18n } from 'vue-i18n'
import en from './en.json'
import ua from './ua.json'

const messages = {
  en,
  ua
}

const DEFAULT_LOCALE = 'ua'

const i18n = createI18n({
  locale: DEFAULT_LOCALE,
  messages,
  globalInjection: true,
  fallbackLocale: DEFAULT_LOCALE
})

export default i18n
