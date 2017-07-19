<template>
    <div class="crib-confirm">
        <x-dialog :value='confirmShow' :isClose='isClose'>
            <div class="crib-confirm_hd" :style='[titleStyle]'>
                <strong class="crib-confirm_title" >{{title}}</strong>
            </div>
            <div class="crib-confirm_bd">
                <slot>
                    <div v-html="content"></div>
                </slot>
            </div>
            <div class="crib-confirm_ft">
                <a href="javascript:;" class="crib-confirm_btn crib-confirm_btn_default" :style='[cancelStyle]' @click="_onCancel">{{cancelText}}</a>
                <a href="javascript:;" class="crib-confirm_btn crib-confirm_btn_primary" :style='[confirmStyle]' @click="_onConfirm">{{confirmText}}</a>
            </div>
        </x-dialog>
    </div>
</template>
<script>
import XDialog from '../z-dialog/index.vue'
export default {
    components: {
        XDialog
    },
    props: {
        value: {
            type: Boolean,
            deafult: false
        },
        isClose: {
            type: Boolean,
            default: false
        },
        title: {
            type : String,
            default : '提示'
        },
        titleStyle: Object,
        content: {
            default : '请填写你的内容'
        },
        confirmText: {
            type : String,
            default : '确定'
        },
        cancelText: {
            type : String,
            default : '取消'
        },
        cancelStyle : Object,
        confirmStyle : Object
    },
    data() {
        return {
            confirmShow: this.value
        }
    },
    watch: {
        value(val) {
            this.confirmShow = val
        }
    },
    methods: {
       
        _onCancel() {
            this.confirmShow = false
            this.$emit('update:value', false)
            this.$emit('on-cancel')
        },
         _onConfirm() {
            this.confirmShow = false
            this.$emit('update:value', false)
            this.$emit('on-confirm')
        }
    }
}
</script>

<style lang='less'>
@import '../../styles/crib_ui/crib-confirm/crib_confirm.less';
</style>

