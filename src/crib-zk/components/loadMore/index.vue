<template>
    <div class="crib-spinner">
        <div class="crib-spinner_box">
            <div class="crib-spinner_icon">
                <spinner :color='spinnerColor' :size='spinnerSize'></spinner>
            </div>
            <span class="crib-spinner_content" v-if="showTip" :style="[spinnerTipstyles]">{{tipText}}</span>
        </div>
    </div>
</template>

<script>
import Spinner from '../spinner/spinner.vue'
export default {
    components: {
        Spinner
    },
    props: {
        spinnerColor: String,
        spinnerSize: Number,
        tipText: {
            type: String,
            default: "加载更多..."
        },
        showTip: {
            type: Boolean,
            default: true
        },
        spinnerTipstyles: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style lang="less">
.crib-spinner_box {
    text-align: center;
}

.crib-spinner_icon {
    display: inline-block;
    vertical-align: middle;
}

.crib-spinner_content {
    font-size: 14px;
    margin-left: 10px;
    vertical-align: middle;
}
</style>

