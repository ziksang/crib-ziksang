import AlertComponent from '../../components/alert'
import { mergeOptions } from '../../libs/prop_assign.js'

let $vm, $watcher, $alert

const plugin = {
    install(Vue) {
        if (!$vm) {
            const Alert = Vue.extend(AlertComponent)
            $vm = new Alert({
                el: document.createElement('div')
            })
        }
        const alert = {
            show(options = {}) {
                if (!$alert) {
                    $alert = document.body.appendChild($vm.$el)
                }
                if (typeof options === 'object') {
                    mergeOptions($vm, options)
                }
                if (typeof options === 'object' && options.onShow) {
                    options.onShow && options.onShow()
                }
                //进行一次watche监听判断，防止重复监听
                $watcher && $watcher()
                $watcher = $vm.$watch('alertShow', (val) => {
                    if (!val && options && options.onHide) {
                        options.onHide()
                    }
                })

                $vm.$off('on-submit')
                $vm.$on('on-submit', () => {
                    options && options.onSubmit && options.onSubmit()
                })
                $vm.alertShow = true
            },
            hide() {
                $vm.alertShow = false
            }
        }

        if (!Vue.$crib) {
            Vue.$crib = {
                alert
            }
        } else {
            Vue.$crib.alert = alert
        }

        Vue.mixin({
            created: function () {
                this.$crib = Vue.$crib
            }
        })
    }
}

export default plugin
export const install = plugin.install