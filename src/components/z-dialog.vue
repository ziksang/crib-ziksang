<template>
    <div>
        <div class="btn">
            <z-button @click.native='defaultDialog'>显示遮罩</z-button>
        </div>
        <z-dialog :value.sync='dialogShow'>11111</z-dialog>
    </div>
</template>
<script>
import { ZButton } from 'crib-zk/libs/z-button';
import { ZDialog } from 'crib-zk/libs/z-dialog';
export default {
    components: {
        ZDialog,
        ZButton
    },
    data() {
        return {
            dialogShow: false
        }
    },
    methods: {
        defaultDialog() {
            this.dialogShow = true
        }
    }
}
</script>
