<template>
    <div>
        <div @click='show2 = !show2'>点击下拉</div>
        
        <slot></slot>
    </div>
</template>

<script>
export default {
    created() {
        console.log(this.$children)
    },
    props: {
        show: {
            default : false
        }
    },
    data () {
        return {
            show2 : this.show
        }
    },
   watch : {
        show (val) {
           this.show2 = val
        }, 
        show2 (val) {
            this.$emit('update:show',val)
            this.$children[0].show = val
        }
    }
}
</script>

