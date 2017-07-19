<template>
    <div>
        <div class="cirb-actionsheet">
            <transition name="crib-actionsheet-mask">
                <div class="crib-mask crib-mask_transparent" @click="onClickingMask" v-show="show"></div>
            </transition>
            <div class="weui-actionsheet" :class="{'weui-actionsheet_toggle': show}">
                <div class="weui-actionsheet__menu">
                    <div class="weui-actionsheet__cell" v-for='(item,index) in model' :style='[item.style]' @click='ff(item.name,index,item.method)' v-html='item.name'>
                    </div>
                </div>
                <div class="weui-actionsheet__action"  v-if="showCancel" @click="$emit('update:show', false)">
                    <div class="weui-actionsheet__cell">{{cancelText}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        model : Array,
        show: {
            type: Boolean,
            default: false
        },
        //是否自动关闭mask遮罩
        isClickMask: {
            type: Boolean,
            default: true
        },
        showCancel : {
            type : Boolean,
            default : true
        },
        cancelText : {
            type : String,
            default : '取消'
        }
    },
    methods: {
        onClickingMask() {
            this.isClickMask && this.$emit('update:show', false)
        },
        ff (item,index,method) {
             this.$emit('update:show', false)
             method.call(this.$parent,item,index)
        }
    }
}
</script>

<style lang='less'>
@import '../../styles/crib_ui/crib-tips/crib_mask.less';
@import '../../styles/crib_ui/mixin/setBorderLine.less';
.weui-actionsheet__menu{
    background-color: #FFFFFF;
}

.weui-actionsheet__action {
    margin-top: 6px;
    background-color: #FFFFFF;
}

.weui-actionsheet__cell {
    position: relative;
    padding: 10px 0;
    text-align: center;
    font-size: 18px;
    &:before {
        .setTopLine(#efeff4);
    }
    &:active{
        background-color: #efeff4;
    }
    &:first-child{
        &:before{
            display: none;
        }
    }
}

.weui-actionsheet {
    position: fixed;
    left: 0;
    bottom: 0;
    transform: translate(0, 100%);
    backface-visibility: hidden;
    z-index: 5000;
    width: 100%;
    background-color: #efeff4;
    transition: transform .3s;
}
.weui-actionsheet_toggle{
    transform: translate(0, 0);
}
.vux-actionsheet-mask-enter,
.vux-actionsheet-mask-leave-active {
    opacity: 0;
}

.vux-actionsheet-mask-leave-active,
.vux-actionsheet-mask-enter-active {
    transition: opacity 300ms;
}
</style>

