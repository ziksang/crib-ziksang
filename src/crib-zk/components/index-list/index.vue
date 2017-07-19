<template>
    <div class="crib-indexlist">
        <div class="crib-indexlist-content" ref="content" :style="{ 'height': currentHeight + 'px', 'margin-right': navWidth + 'px'}">
            <slot></slot>
        </div>
        <div class="crib-indexlist-nav" @touchstart="handleTouchStart" ref="nav" :style='navStyle'>
            <ul class="crib-indexlist-navlist">
                <li class="crib-indexlist-navitem" v-for="(nav,index) in navs" >{{nav}}</li>
            </ul>
        </div>
        <div class="crib-indexlist-indicator" v-if="showIndicator" :style='indicatorStyle' v-show="moving">{{ currentIndicator }}</div>
    </div>
</template>


<script>
export default {
    name: 'index-list',
    mounted() {
        //     //如果当前没有设置高度的话,当前的高就是文档的高度-内容距离文档顶部的高度
        if (!this.currentHeight) {
            this.currentHeight = document.documentElement.clientHeight - this.$refs.content.getBoundingClientRect().top;
        }
        this.init();
    },
    props: {
        isNavWidth: {
            type: Boolean,
            deafult: false
        },
        navStyle: Object,
        indicatorStyle: Object,
        navs: Array,
        //index-list的高度定义
        height: Number,
        //是否显示中间字母提示
        showIndicator: {
            type: Boolean,
            default: true
        }
    },
    watch: {
        navs() {
            this.init();
        }
    },
    data() {
        return {
            //当前文本高度
            currentHeight: this.height,
            //当前右边的List高度，用来文本或偏移量
            navWidth: 0,
            //sectionso
            sections: [],
            //显示当前滑动显示
            currentIndicator: '',
            moving: false,
            firstSection: null,
        }
    },
    methods: {
        init() {
            //拿到右边滑动列的宽度
            this.$nextTick(() => {
                if (this.isNavWidth) {
                    this.navWidth = this.$refs.nav.clientWidth;
                }
                //拿到左边内容的每个li标签
                let listItems = this.$refs.content.getElementsByTagName('li');
                if (listItems.length > 0) {
                    this.firstSection = listItems[0]
                }
            });

        },
        handleTouchStart(e) {
            if (e.target.tagName !== 'LI') {
                return
            }
            this.navOffsetX = e.changedTouches[0].clientX;
            this.scrollList(e.changedTouches[0].clientY);
            if (this.indicatorTime) {
                clearTimeout(this.indicatorTime);
            }
            this.moving = true;
            window.addEventListener('touchmove', this.handleTouchMove);
            window.addEventListener('touchend', this.handleTouchEnd);
        },
        handleTouchMove(e) {
            e.preventDefault();
            this.scrollList(e.changedTouches[0].clientY);
        },
        handleTouchEnd() {
            this.indicatorTime = setTimeout(() => {
                this.moving = false;
                this.currentIndicator = '';
            }, 500);
            window.removeEventListener('touchmove', this.handleTouchMove);
            window.removeEventListener('touchend', this.handleTouchEnd);
        },
        scrollList(y) {
            //根据手指点坐标拿到当前元素的偏移量
            let currentItem = document.elementFromPoint(this.navOffsetX, y)
            //如果此时坐标上没有元素，或者这个元素没有包函'crib-indexlist-navitem'这个class，则退出
            if (!currentItem || !currentItem.classList.contains('crib-indexlist-navitem')) {
                return
            }
            //把当前的中间显示的选项是当前点到的内容
            this.currentIndicator = currentItem.innerText;
            let index = this.navs.indexOf(this.currentIndicator);
            let targetDOM = Array.from(this.sections)[index].$el;
            this.$refs.content.scrollTop = targetDOM.getBoundingClientRect().top - this.firstSection.getBoundingClientRect().top;
        }
    }
}
</script>



<style lang='less'>
.crib-indexlist {
    width: 100%;
    position: relative;
    overflow: hidden;
    .crib-indexlist-content {
        margin: 0;
        padding: 0;
        overflow: auto;
    }
    .crib-indexlist-nav {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        margin: 0;
        text-align: center;
        max-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .crib-indexlist-navlist {
            padding: 0;
            margin: 0;
            list-style: none;
            max-height: 100%;
            display: flex;
            flex-direction: column;
            .crib-indexlist-navitem {
                padding: 2px 6px;
                font-size: 12px;
                user-select: none;
                -webkit-touch-callout: none;
            }
        }
    }
    .crib-indexlist-indicator {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        padding: 10px 16px;
        background-color: rgba(0, 0, 0, .7);
        border-radius: 5px;
        color: #fff;
        font-size: 22px;
    }
}
</style>
