<template>
    <div>
        <slot name='list'></slot>
        <div class="list-donetip" v-show='!isLoading&& isDone'>
            <slot name='doneTip'>没有更多数据了</slot>
        </div>
    
        <div class="list-loading" v-show='isLoading'>
            <slot name='loadingTip'>加载中...</slot>
        </div>
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
            isLoading: false, //是否正在加载
            isDone: false,  //是否加载完毕
        }
    },
    props: {
        //一旦触发到底部执行的事件函数
        onInfinite: {
            type: Function,
            require: true
        },
        //滚动到底部的距离
        distance: {
            default: 100,
            validator(val) {
                return /^\d*$/.test(val);
            }
        }
    },
    methods: {
        //对滚动进行防抖
        debounce  (func, wait) {
            var timeout;
            return function () {
                var context = this;
                var args = arguments;

                clearTimeout(timeout)
                timeout = setTimeout(function () {
                    func.apply(context, args)
                }, wait);
            }
        },
        scrollHandler() {
            if (this.isLoading || this.isDone) return;
            let baseHeight = this.scrollview == window ? document.body.offsetHeight : this.scrollview.offsetHeight
            let moreHeight = this.scrollview == window ? document.body.scrollHeight : this.scrollview.scrollHeight;
            let scrollTop = this.scrollview == window ? document.body.scrollTop : this.scrollview.scrollTop
            if (baseHeight + scrollTop + this.distance > moreHeight) {
                this.isLoading = true;

                this.onInfinite()
            }

            if (!this.scrollview) {
                console.warn('Can\'t find the scrollview!');
                return;
            }
        },
        init() {
            //获取滚动模型
            this.scrollview = getScrollview(this.$el);
            this.scrollview.addEventListener('scroll', this.debounce(this.scrollHandler,100), false);
            this.$on('Load', () => {
                this.isLoading = false;
            });
            this.$on('loadDone', () => {
                    this.isLoading = false;
                    this.isDone = true;
            });
        }
    },
     destroyed() {
            this.scrollview.removeEventListener('scroll', this.debounce(this.scrollHandler,100));
        }

}
</script>

