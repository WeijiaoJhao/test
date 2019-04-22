import Vue from "vue";
import VueI18n from "vue-i18n";
import store from "./store";

Vue.use(VueI18n);

//此 method 即為自動抓取 locales 資料夾內的各多語 json 檔案
function loadLocaleMessages() {
  const locales = require.context(
    "./locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages = {};
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

//此段為 i18n 基本設定方式
export default new VueI18n({
  locale: store.getters.i18n,
  fallbackLocale: "en",
  messages: loadLocaleMessages()
});
