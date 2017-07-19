<template>
    <li class="crib-indexsection">
        <p class="crib-indexsection-index" :style='indexStyle'>{{ index }}</p>
        <ul>
            <slot></slot>
        </ul>
    </li>
</template>

<script>
export default {
    name: 'mt-index-section',
    props: {
        indexStyle: Object,
        index: {
            type: String,
            required: true
        }
    },
    mounted() {
        this.$parent.sections.push(this);
    },
    beforeDestroy() {
        let index = this.$parent.sections.indexOf(this);
        if (index > -1) {
            this.$parent.sections.splice(index, 1);
        }
    }
};
</script>

<style lang='less'>
.crib-indexsection {
    list-style: none;
    padding: 0;
    margin: 0;
    .crib-indexsection-index {
        text-align: left;
        margin: 0;
        padding: 10px;
        background-color: #fafafa;
        >ul {
            padding: 0;
        }
    }
}
</style>

