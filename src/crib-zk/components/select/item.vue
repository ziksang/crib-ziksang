<template>
    <div v-show='show'>
        <slot></slot>
    </div>
</template>

<script>
export default {
   data () {
       return {
           show : false
       }
   }
}
</script>

