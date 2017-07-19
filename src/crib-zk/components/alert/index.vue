<template>
    <div class="vux-alert">
        <x-dialog :value='alertShow' :isClose='false'>
            <div class="crib-confirm_hd" :style='[titleStyle]'>
                <strong class="crib-confirm_title">{{title}}</strong>
            </div>
            <div class="crib-confirm_bd">
                <slot>
                    <div v-html="content"></div>
                </slot>
            </div>
            <div class="crib-confirm_ft">
                <a href="javascript:;" class="crib-confirm_btn crib-confirm_btn_primary" @click="_onSubmit" :style='[buttonStyle]'>{{buttonText}}</a>
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
        title: {
            type: String,
            default: '提示'
        },
        titleStyle : Object,
        content: {
            type: String,
            default: 'alert内容'
        },
        buttonText : {
            type : String,
            default : '知道了'
        },
        buttonStyle : Object
    },
    data() {
        return {
            alertShow: this.value
        }
    },
    watch: {
        value(val) {
            this.alertShow = val
        }
    },
    methods: {
        _onSubmit() {
            this.alertShow = false
            this.$emit('update:value', false)
            this.$emit('on-submit')
        }
    }
}
</script>

<style lang='less'>
@import '../../styles/crib_ui/crib-confirm/crib_confirm.less';
</style>


