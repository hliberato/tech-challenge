import Vue from 'vue'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

import {
  Container,
  Header,
  Main,
  Footer,
  Button,
  Select,
  Option
} from 'element-ui'

locale.use(lang)

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
