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
  Option,
  Loading,
  Card,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Link,
  Table,
  TableColumn,
  Input,
  Dialog,
  Pagination
} from 'element-ui'

locale.use(lang)

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Loading)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Link)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Input)
Vue.use(Dialog)
Vue.use(Pagination)
