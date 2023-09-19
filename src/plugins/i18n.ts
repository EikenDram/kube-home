// localization

import { createI18n } from 'vue-i18n'

import en from '../locales/en.json'
import ja from '../locales/ja.json'
import ru from '../locales/ru.json'
import { RuntimeConfigurationOptions } from './runtimeConfiguration'

// Type-define 'en-US' as the master schema for the resource
type MessageSchema = typeof en

export default function i18n(runtimeConfigurationOptions: RuntimeConfigurationOptions) {
  return createI18n<[MessageSchema], 'en' | 'ja' | 'ru'>({
    legacy: false,
    globalInjection: true,
    locale: runtimeConfigurationOptions.variables.locale,
    messages: {
      'en': en,
      'ja': ja,
      'ru': ru
    }
  })
}
