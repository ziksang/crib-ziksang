<template>
  <div>
    <h1>comfirm</h1>
    <p>查看comfirm使用方法</p>
    <p @click='methods= true'>查看comfirm文档</p>
    <div class="btn">
      <z-button @click.native='defaultConfirm'>默认confirm插件模式</z-button>
    </div>
    <div class="btn">
      <z-button type='primary' @click.native='definedConfirm'>自定义definedConfirm插件模式</z-button>
    </div>
    <div class="btn">
      <z-button type='warn' @click.native='definedSlotConfirm'>自定义SlotConfirm内容插槽模式</z-button>
    </div>
    <confirm :value.sync='confirmValue'>
      <input placeholder="请输入您的文字"></input>
    </confirm>
    <methods :methodsProps="methodsProps" :methodsEvents='methodsEvents' :methodsSolt="methodsSolt" v-show="methods" @click.native='methods=false'></methods>
  </div>
</template>

<script>
import { Confirm } from 'crib-zk/libs/confirm'
import { ZButton } from 'crib-zk/libs/z-button';
import Methods from '@/pages/methods/methods.vue'
export default {
  components: {
    ZButton,
    Confirm,
    Methods
  },
  data() {
    return {
      methods: false,
      confirmValue: false,
      methodsProps: [
        { name: 'title', type: 'String', default: "提示", description: "头部提示文案" },
        { name: 'content', type: 'string', default: "请填写你的内容", description: "告知的内容,支持v-html格式" },
        { name: 'confirmText', type: 'string', default: "确认", description: "确认按钮文案" },
        { name: 'cancel', type: 'string', default: "取消", description: "取消按钮的文案" },
        { name: 'titleStyle', type: 'Object', default: "", description: "头部样式" },
        { name: 'confirmStyle', type: 'Object', default: "", description: "确认按钮样式" },
        { name: 'cancelStyle', type: 'Object', default: "", description: "取消按钮的样式" }
      ],
      methodsSolt: [
        { name: '', type: '', default: "", description: "只能在非插件模式下引入,插入自定义标签" }
      ],
      methodsEvents: [
        { name: 'onShow', type: 'Function', default: "", description: "在弹框显示的时候执行事件" },
        { name: 'onHide', type: 'Function', default: "", description: "在弹框消失的时候执行事件" },
        { name: 'onCancel', type: 'Function', default: "", description: "点击取消按钮执行事件" },
        { name: 'onConfirm', type: 'Function', default: "", description: "点击确定按钮执行事件" }
      ]
    }
  },
  methods: {
    defaultConfirm() {
      this.$crib.confirm.show()
    },
    definedConfirm() {
      this.$crib.confirm.show({
        title: '自定所有部位样式',
        titleStyle: {
          color: '#fff',
          background: 'black'
        },
        content: '<span style="color:green">自定义内容，可以支持v-html格式<span>',
        confirmText: "确认操作",
        cancel: '取消操作',
        confirmStyle: {
          color: "red"
        },
        cancelStyle: {
          color: 'blue'
        },
        onCancel() {
          alert('您操作了取消')
        },
        onConfirm() {
          alert('您操作了确定')
        },
        onShow() {
          alert('confirm显示操作')
        },
        onHide() {
          alert('confirm隐藏操作')
        }
      })
    },
    definedSlotConfirm() {
      this.confirmValue = true
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

