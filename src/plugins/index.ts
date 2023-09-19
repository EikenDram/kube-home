/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { loadFonts } from "./webfontloader";
import vuetify from "./vuetify";
import i18n from "./i18n";
import router from "../router";

// Types
import type { App } from "vue";
import { RuntimeConfigurationOptions } from "./runtimeConfiguration";

export function registerPlugins(app: App, runtimeConfigurationOptions: RuntimeConfigurationOptions) {
  loadFonts();

  app
    .use(i18n(runtimeConfigurationOptions))
    .use(vuetify)
    .use(router);
}
