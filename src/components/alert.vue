<template>
    <div>
        <h1>alert</h1>
        <p>查看alert使用方法</p>
        <p @click='methods= true'>查看alert文档</p>
        <div class="btn">
            <z-button @click.native='defaultAlert'>默认alert插件模式</z-button>
        </div>
        <div class="btn">
            <z-button type='primary' @click.native='definedConfirm'>自定义definedAlert插件模式</z-button>
        </div>
        <div class="btn">
            <z-button type='warn' @click.native='definedSlotConfirm'>自定义SlotAlert内容插槽模式</z-button>
        </div>
        <alert :value.sync='alertValue'>
            <input placeholder="请输入您的文字"></input>
        </alert>
        <methods :methodsProps="methodsProps" :methodsEvents='methodsEvents' :methodsSolt="methodsSolt" v-show="methods" @click.native='methods=false'></methods>
    </div>
</template>

<script>
import { Alert } from 'crib-zk/libs/alert'
import { ZButton } from 'crib-zk/libs/z-button';
import Methods from '@/pages/methods/methods.vue'
export default {
    components: {
        Methods,
        ZButton,
        Alert
    },
    data() {
        return {
            alertValue: false,
            methods: false,
            methodsProps: [
                { name: 'title', type: 'String', default: "提示", description: "头部提示文案" },
                { name: 'content', type: 'string', default: "请填写你的内容", description: "告知的内容,支持v-html格式" },
                { name: 'buttonText', type: 'string', default: "知道了", description: "确认按钮文案" },
                { name: 'titleStyle', type: 'Object', default: "", description: "头部样式" },
                { name: 'buttonStyle', type: 'Object', default: "", description: "确认按钮样式" }
            ],
            methodsSolt: [
                { name: '', type: '', default: "", description: "只能在非插件模式下引入,插入自定义标签" }
            ],
            methodsEvents: [
                { name: 'onShow', type: 'Function', default: "", description: "在弹框显示的时候执行事件" },
                { name: 'onHide', type: 'Function', default: "", description: "在弹框消失的时候执行事件" },
                { name: 'onSubmit', type: 'Function', default: "", description: "点击确认按钮执行事件" }
            ]
        }
    },
    methods: {
        defaultAlert() {
            this.$crib.alert.show()
        },
        definedConfirm() {
            this.$crib.alert.show({
                title: "自定义title文案",
                titleStyle: {
                    background: 'black',
                    color: '#fff'
                },
                content: '<span style="color:green">自定义内容，可以支持v-html格式<span>',
                buttonText: '自定义按钮文案',
                buttonStyle: {
                    color: "blue"
                },
                onSubmit() {
                    alert('您操作了确定按钮')
                },
                onHide() {
                    alert('alert框消失了')
                },
                onShow() {
                    alert('alert显示了')
                }
            })
        },
        definedSlotConfirm() {
            this.alertValue = true
        }
    }
}
</script>

<style lang='less'>
input {
    border: 1px solid #989898;
    width: 100%;
    padding: 6px;
    border-radius: 5px;
    box-sizing: border-box;
}

.btn {
    margin-top: 40px;
}
</style>
