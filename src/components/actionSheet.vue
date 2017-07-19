<template>
    <div>
        <z-button @click.native='show = true'></z-button>
        <z-button @click.native='show2 = true'>不带取消actionSheet</z-button>
        <z-button @click.native='show3 = true'>不能通过点击mask关闭</z-button>
        <z-button @click.native='show4 = true'>自定义样式actionSheet</z-button>
        <action-sheet :show.sync='show' :model='model'></action-sheet>
        <action-sheet :show.sync='show2' :showCancel='false' :model='model2'></action-sheet>
        <action-sheet :show.sync='show3' :isClickMask='false' :model='model3'></action-sheet>
        <action-sheet :show.sync='show4' :model='model4'></action-sheet>
        
    </div>
</template>

<script>
import { ActionSheet } from 'crib-zk/libs/actionSheet'
import { ZButton } from 'crib-zk/libs/z-button';
export default {
    components: {
        ZButton,
        ActionSheet
    },
    data() {
        return {
             dd : '#791414',    
            kk: 'ziksang',
            model: [
                { name: '拨打110', method(name, index) { location.href = 'tel:110' } },
                { name: '拨打120', method(name, index) { location.href = 'tel:110' } }
            ],
            model2: [
                { name: '拨打110', method(name, index) { location.href = 'tel:110' } },
                { name: '拨打120', method(name, index) { location.href = 'tel:120' } }
            ],
            model3: [
                { name: '拨打110', method(name, index) { location.href = 'tel:110' } },
                { name: '拨打120', method(name, index) { location.href = 'tel:120' } }
            ],
            model4: [
                { name: '拨打110', style: { color: 'green' }, method(name, index) { location.href = 'tel:110' } },
                 {name: '拨打120', style: { color: 'red' }, method(name, index) { location.href = 'tel:120' } }
            ],
            show: false,
            show2: false,
            show3: false,
            show4: false
        }
    }
}
</script>



