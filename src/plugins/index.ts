/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import i18n from './i18n'
import router from '../router'
import {loadRuntimeConfiguration, runtimeConfiguration} from "@/plugins/runtimeConfiguration";

// Types
import type { App } from 'vue'

const runtimeConfigurationOptions = await loadRuntimeConfiguration()

export function registerPlugins (app: App) {
  loadFonts()
  app
    .use(i18n)
    .use(runtimeConfiguration, runtimeConfigurationOptions)
    .use(vuetify)
    .use(router)
}
