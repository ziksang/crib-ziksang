<template>
    <div class="crib-x-dialog" @touchmove.prevent @click='close'>
        <transition :name='maskTransition'>
            <div class="crib-mask" v-show="currentValue"></div>
        </transition>
        <transition :name='dialogTransition'>
            <div class="crib-dialog" v-show="currentValue" :style="[dialogStyle]">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        isClose : {
           type : Boolean,
           default : true
        },
        value: {
            type: Boolean,
            default: false
        },
        maskTransition: {
            type: String,
            default: 'crib-mask'
        },
        dialogTransition: {
            type: String,
            default: 'crib-dialog'
        },
        dialogStyle: Object,
    },
    data() {
        return {
            currentValue: this.value
        }
    },
    methods : {
        close () {
            if(this.isClose){
                this.currentValue = false
            }
        }
    },
    watch: {
        value(val) {
            this.currentValue = val
        },
        currentValue(val) {
            if(!val) {
                this.$emit('update:value', false)
            }
            // this.$emit(val ? 'on-show' : 'on-hide')
        }
    }
}
</script>

<style lang='less'>
@import './z-dialog.less';
</style>


