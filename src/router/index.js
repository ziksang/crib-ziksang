import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home.vue'
import Demo from '@/pages/demo/demo.vue'
import Confirm from '@/components/confirm.vue'
import Alert from '@/components/alert.vue'
import ZDialog from '@/components/z-dialog.vue'
import Search from '@/components/search.vue'
import IndexList from '@/components/index-list.vue'
import SmsCountDown from '@/components/sms-countDown.vue'
import ActionSheet from '@/components/actionSheet.vue'
import ZSwitch from '@/components/z-switch.vue'
import Accordion from '@/components/accordion.vue'
import InfiniteScroll from '@/components/infinite-scroll.vue'
import BackTop from '@/components/backTop.vue'
import Calendar from '@/components/calendar.vue'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: Calendar
    },
    {
        path: '/demo',
        name: 'Demo',
        component: Demo
    },
     {
        path: '/backTop',
        name: 'BackTop',
        component: BackTop
    },
    {
        path: '/infinite-scroll',
        name: 'InfiniteScroll',
        component: InfiniteScroll
    },
    {
        path: '/confirm',
        name: 'Confirm',
        component: Confirm
    },
    {
        path: '/alert',
        name: 'Alert',
        component: Alert
    },
    {
        path: '/z-dialog',
        name: 'ZDialog',
        component: ZDialog
    },
    {
        path: '/search',
        name: 'Search',
        component: Search
    },
    {
        path: '/index-list',
        name: 'IndexList',
        component: IndexList
    },
    {
        path: '/sms-countDown',
        name: 'SmsCountDown',
        component: SmsCountDown
    },
    {
        path: '/actionSheet',
        name: 'ActionSheet',
        component: ActionSheet
    },
    {
        path: '/z-switch',
        name: 'ZSwitch',
        component: ZSwitch
    },
     {
        path: '/accordion',
        name: 'Accordion',
        component: Accordion
    }
    ]
})