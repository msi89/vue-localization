import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '../locale/en'
import fr from '../locale/fr'
import ru from '../locale/ru'
import cn from '../locale/cn'
import ja from '../locale/ja'

Vue.use(VueI18n)

export const i18n = new VueI18n({
 locale: 'en',
 fallbackLocale: 'en',
 messages: {
     en: en.messages,
     fr: fr.messages,
     ru: ru.messages,
     cn: cn.messages,
     ja: ja.messages,
 }
})