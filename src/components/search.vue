<template>
    <div class="search">
        <search :inputValue.sync='value' :placeholder='placeholder1' :fixed='true' :autoFocus='true'></search>
    
        <search class="search-demo" :inputValue.sync='value2' :placeholder='placeholder2' :isClear='false'></search>
    
        <search class="search-demo" @on-submit='submit' :inputValue.sync='value3' :placeholder='placeholder3' text='取消' :submitStyle='style'></search>
        <h1>search</h1>
        <!--<p>查看search使用方法</p>-->
        <p @click='methods= true'>查看search文档</p>
        <methods :methodsProps="methodsProps" :methodsEvents='methodsEvents' :methodsSolt="methodsSolt" v-show="methods" @click.native='methods=false'></methods>
    </div>
</template>
<script>
import { Search } from 'crib-zk/libs/search'
import Methods from '@/pages/methods/methods.vue'
export default {
    components: {
        Search,
        Methods
    },
    methods : {
       submit () {
           alert("你点击了取消")
       }
    },
    data() {
        return {
            methods: false,
            value: '自动获取焦点并fixed顶部',
            value2: '',
            value3: '',
            placeholder1: "",
            placeholder2: '不显示清除图标按钮',
            placeholder3: '自定义search-submit样式',
            style: {
                color: 'green'
            },
            methodsProps: [
                { name: 'isClear', type: 'Boolean', default: "true", description: "是否显示清除icon" },
                { name: 'fixed', type: 'Boolean', default: "false", description: "是否fixed在顶部" },
                { name: 'inputValue(双向.sync)', type: 'string', default: "", description: "input输入框的文案" },
                { name: 'submitStyle', type: 'Object', default: "", description: "右边按钮文案的样式" },
                { name: 'text', type: 'String', default: "搜索", description: "右边按钮文案" },
                { name: 'autoFocus', type: 'Boolean', default: "false", description: "是否自动获取焦点" },
                { name: 'placeholder', type: 'String', default: "", description: "placeholder文案" }
            ],
            methodsSolt: [],
            methodsEvents: [
                { name: 'on-submit', type: 'Function', default: "", description: "点击清除按钮执行的事件" }
            ]
        }
    }
}
</script>

<style lang='less'>
.search {
    padding-top: 44px;
}

.search-demo {
    margin-top: 100px;
}
</style>


