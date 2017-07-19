<template>
    <div class="sms-countDown">
        <h1>sms-countDown</h1>
        <!--<p>查看search使用方法</p>-->
        <p @click='methods= true'>查看sms-countDown文档</p>
        <div class="sms-countDown-item">
            <input placeholder="默认短信倒计时"/>
            <div class="sms-countDown-item_box">
                <sms-count-down :start.sync='start1' @click.native='start1 = true'></sms-count-down>
            </div>
        </div>
         <div class="sms-countDown-item">
            <input  placeholder="自定义短信文案初始化"/>
            <div class="sms-countDown-item_box">
                <sms-count-down :start.sync='start2' initText='GET短信码' firstCkText='firt' secondCKText='second' @click.native='start2 = true'></sms-count-down>
            </div>
        </div>
         <div class="sms-countDown-item">
            <input/>
            <div class="sms-countDown-item_box">
                <sms-count-down :start.sync='start3' :smsStyles='smsStyles' @click.native='start3 = true'></sms-count-down>
            </div>
        </div>
        <methods :methodsProps="methodsProps" :methodsEvents='methodsEvents' :methodsSolt="methodsSolt" v-show="methods" @click.native='methods=false'></methods>
    </div>
</template>

<script>
import { SmsCountDown } from 'crib-zk/libs/sms-countDown';
import Methods from '@/pages/methods/methods.vue'
export default {
    data () {
        return {
            methods : false,
            start1 : false,
            start2 : false,
            start3 : false,
            smsStyles : {
                borderRadius : '10px',
                color:'red',
                background:'#fff'
            },
            methodsProps: [
                { name: 'initText', type: 'String', default: "获取验证码", description: "初始化文案" },
                { name: 'firstCkText', type: 'String', default: "", description: "第一次点击文案" },
                { name: 'secondCKText', type: 'string', default: "重新获取", description: "第二次点击文案" },
                { name: 'start(双向.sync)', type: 'Boolean', default: "false", description: "是否开始倒计时" },
                { name: 'smsStyles', type: 'Object', default: "", description: "倒计时样式设置" },
            ],
            methodsSolt: [],
            methodsEvents: []
        }
    },
    methods : {
      
    },
    components: {
        SmsCountDown,
        Methods
    }
}
</script>

<style lang='less'>
.sms-countDown{
    
    padding:20px;
    .sms-countDown-item{
        height:30px;
        font-size: 0;
        margin-top:40px;
        >input{
            
            border:1px solid #eeeeee;
            border-right:none;
            outline: none;
            height:100%;
            width:70%;
            vertical-align: middle;
            display: inline-block;
        }
        .sms-countDown-item_box{
            height:100%;
            width:30%;
            display: inline-block;
            vertical-align: middle;
        }
    }
}
</style>


