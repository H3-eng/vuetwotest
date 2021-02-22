// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'southgisui/lib/sgui-theme/index.css'// 引入默认样式
import {
  SgButton,
  SgButtonGroup,
  SgIcon,
  SgRow,
  SgCol,
  SgContainer,
  SgMain,
  SgAside,
  SgHeader,
  SgCollapse,
  SgCollapseItem,
  SgSignet,
  SgBadge,
  SgPageStatus,
  // form
  SgInput,
  SgCheckbox,
  SgCheckboxGroup,
  SgRadio,
  SgRadioGroup,
  SgRadioButton,
  SgSelect,
  SgOption,
  SgOptionGroup,
  SgCascader,
  SgUpload,
  SgForm,
  SgFormItem,
  SgDropdown,
  SgDropdownItem,
  SgDatePicker,
  SgInputNumber,
  SgSlider,
  SgList,
  SgListItem,
  SgTransfer,
  SgColorPicker,
  SgSwitch,
  SgTimePicker,
  SgComboTree,
  // data
  SgTree,
  SgTable,
  SgPage,
  SgCalendar,
  SgRate,
  // nav
  SgTab,
  SgTabPane,
  SgStep,
  SgBreadcrumb,
  SgBreadcrumbItem,
  SgTimeline,
  SgTimelineItem,
  SgMenu,
  SgSubmenu,
  SgMenuItem,
  SgBacktop,
  SgAffix,
  // server
  SgLoading,
  SgSpin,
  SgMsg,
  SgProgress,
  SgNotice,
  SgTooltip,
  SgModal,
  SgPreview,
  SgCarousel,
  SgCarouselItem,
  SgCircle,
  SgScroll,
  SgFooter,
  SgImage,
  SgAvatar,
  SgDrawer,
  SgInfiniteScroll,
  SgTag
} from 'southgisui'

Vue.use(SgButton)
Vue.use(SgButtonGroup)
Vue.use(SgIcon)
Vue.use(SgCollapse)
Vue.use(SgCollapseItem)
Vue.use(SgSignet)
Vue.use(SgBadge)
Vue.use(SgInput)
Vue.use(SgCheckbox)
Vue.use(SgCheckboxGroup)
Vue.use(SgRadio)
Vue.use(SgRadioGroup)
Vue.use(SgRadioButton)
Vue.use(SgSelect)
Vue.use(SgOption)
Vue.use(SgOptionGroup)
Vue.use(SgCascader)
Vue.use(SgForm)
Vue.use(SgFormItem)
Vue.use(SgDropdown)
Vue.use(SgDropdownItem)
Vue.use(SgDatePicker)
Vue.use(SgInputNumber)
Vue.use(SgSlider)
Vue.use(SgTree)
Vue.use(SgTable)
Vue.use(SgPage)
Vue.use(SgTab)
Vue.use(SgTabPane)
Vue.use(SgStep)
Vue.use(SgBreadcrumb)
Vue.use(SgBreadcrumbItem)
Vue.use(SgLoading)
Vue.use(SgSpin)
Vue.use(SgMsg)
Vue.use(SgProgress)
Vue.use(SgNotice)
Vue.use(SgTooltip)
Vue.use(SgModal)
Vue.use(SgPreview)
Vue.use(SgContainer)
Vue.use(SgNotice)
Vue.use(SgMain)
Vue.use(SgAside)
Vue.use(SgHeader)
Vue.use(SgRow)
Vue.use(SgCol)
Vue.use(SgSwitch)
Vue.use(SgList)
Vue.use(SgListItem)
Vue.use(SgTransfer)
Vue.use(SgColorPicker)
Vue.use(SgRate)
Vue.use(SgTimePicker)
Vue.use(SgPageStatus)
Vue.use(SgUpload)
Vue.use(SgCalendar)
Vue.use(SgTimeline)
Vue.use(SgTimelineItem)
Vue.use(SgMenu)
Vue.use(SgSubmenu)
Vue.use(SgMenuItem)
Vue.use(SgBacktop)
Vue.use(SgAffix)
Vue.use(SgCarousel)
Vue.use(SgCarouselItem)
Vue.use(SgCircle)
Vue.use(SgScroll)
Vue.use(SgFooter)
Vue.use(SgImage)
Vue.use(SgAvatar)
Vue.use(SgDrawer)
Vue.use(SgInfiniteScroll)
Vue.use(SgComboTree)
Vue.use(SgTag)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
