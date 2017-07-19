<template>
    <div>
        <h1 v-for='item in list'>{{item}}</h1>
        <backTop></backTop>
    </div>
</template>

<script>
import BackTop from '@/crib-zk/components/backTop'
export default {

    data() {
        return {
            list: [
                '1234567787',
                '1234567787',
                '1234567787',
                '1234567787',
                '1234567787',
                '1234567787',
                '1234567787',
                '1234567787',
                '1234567787',
                '1234567787',
                '1234567787',
                '1234567787',
                '1234567787',
                '1234567787',
                '1234567787',
                '1234567787',
                '1234567787',
                '1234567787',
                '1234567787'
            ]
        }
    },
    components: {
        BackTop
    }
}
</script>

<style lang='less'>
h1 {
    margin-top: 100px;
}
</style>


