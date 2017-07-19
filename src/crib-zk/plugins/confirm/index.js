import ConfirmComponent from '../../components/confirm'
import { mergeOptions } from '../../libs/prop_assign.js'
let $vm, $watcher, $confirm

const plugin = {
    install(Vue) {
        //把confirm组件继承在Vue上
        const Confirm = Vue.extend(ConfirmComponent)
            //如果没有confirm实列的话创建实列，如果有confirm实列的话则不要创建，再添加到body中

        $vm = new Confirm({
            el: document.createElement('div'),
            propsData: {
                title: ''
            }
        })
        const confirm = {
            //显示方法
            show(options = {}) {
                if (!$confirm) {
                    $confirm = document.body.appendChild($vm.$el)
                }

                //如果类类型是object则合并到confirm实列上
                if (typeof options === 'object') {
                    mergeOptions($vm, options);
                }
                //如果是object类形，有onshow方法，就调用此方法
                if (typeof options === 'object' && options.onShow) {
                    options.onShow && options.onShow()
                }
                //进行一次watche监听判断，防止重复监听
                $watcher && $watcher()
                $watcher = $vm.$watch('confirmShow', (val) => {
                    if (!val && options && options.onHide) {
                        options.onHide()
                    }
                })

                $vm.$off('on-cancel')
                $vm.$off('on-confirm')
                $vm.$on('on-cancel', () => {
                    options && options.onCancel && options.onCancel()
                })
                $vm.$on('on-confirm', () => {
                    options && options.onConfirm && options.onConfirm()
                })
                $vm.confirmShow = true
            },
            hide() {
                $vm.confirmShow = false
            }
        }


        if (!Vue.$crib) {
            Vue.$crib = {
                confirm
            }
        } else {
            Vue.$crib.confirm = confirm
        }

        Vue.mixin({
            created: function() {
                this.$crib = Vue.$crib
            }
        })
    }
}



export default plugin
export const install = plugin.install