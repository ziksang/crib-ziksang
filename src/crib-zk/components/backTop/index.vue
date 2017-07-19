<template>
    <div class='backTop' v-show='show' @click='backTop'>
        <div class="back">+</div>
    </div>
</template>

<script>
import { getScrollview } from '../../libs/getScrollview.js';
export default {
    mounted() {
        this.$nextTick(() => {
            this.init()
        })
    },
    data() {
        return {
            show: false
        }
    },
    methods: {
        throttle(func, wait) {
            var context, args;
            var previous = 0;

            return function () {
                var now = +new Date();
                context = this;
                args = arguments;
                if (now - previous > wait) {
                    func.apply(context, args);
                    previous = now;
                }
            }
        },
        backTop() {

            this.scrollview == window ? document.body.scrollTop = 0 : this.scrollview.scrollTop = 0
        },
        init() {
            //获取滚动模型
            this.scrollview = getScrollview(this.$el);
            this.scrollview.addEventListener('scroll', this.throttle(this.backHandler,  100), false)
        },
        backHandler() {
            let offsetTop = this.scrollview == window ? document.body.scrollTop : this.scrollview.scrollTop
            let offsetHeight = this.scrollview == window ? document.body.offsetHeight : this.scrollview.offsetHeight
            console.log(offsetTop)
            this.show = offsetTop >= offsetHeight / 2;
        }
    }
}
</script>

<style lang='less'>
.back {
    width: 50px;
    height: 50px;
    background: red;
    color: black;
}

.backTop {
    position: fixed;
    bottom: 10px;
    right: 10px;
}
</style>

