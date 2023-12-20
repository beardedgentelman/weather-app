import { createApp } from 'vue';
import { createI18n, useI18n } from 'vue-i18n';
import { vue3Debounce } from 'vue-debounce';
import { languages, defaultLocale } from '@/i18n';
import App from './App.vue';

const messages = Object.assign(languages);
const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages,
});

const app = createApp(App, {
  setup() {
    const { t } = useI18n();
    return { t };
  },
});

app
  .directive('debounce', vue3Debounce({ lock: true }))
  .use(i18n)
  .mount('#app');
