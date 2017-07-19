<template>
    <div class="infinite-scroll">
        <infinite-scroll :on-infinite='aa' ref='infinite'>
            <div slot='list' ref='list'>
                <h1 v-for='item in list'>{{item}}</h1>
            </div>
        </infinite-scroll>
    </div>
</template>

<script>
import InfiniteScroll from '@/crib-zk/components/infinite-scroll/index.vue'
var list = [
    'abcdefafdsafdsa',
    'abcdefafdsafdsa',
    'abcdefafdsafdsa',
    'abcdefafdsafdsa',
    'abcdefafdsafdsa',
    'abcdefafdsafdsa',
    'abcdefafdsafdsa',
    'abcdefafdsafdsa'
]
export default {
    created() {
        this.list = list
    },
    data() {
        return {
            list: []
        }
    },
    components: {
        InfiniteScroll
    },
    methods: {
        
        aa() {
            setTimeout(() => {
                this.list = [...this.list, ...list]
                this.$refs.infinite.$emit('loadDone')
            }, 2000)

        }
    }
}
</script>

<style  lang='less'>
.infinite-scroll {
    //    overflow-y:scroll; 
    //    background:green;
    //    margin-top:50px;
    //    height:450px;
}

h1 {
    margin-top: 100px;
}
</style>
