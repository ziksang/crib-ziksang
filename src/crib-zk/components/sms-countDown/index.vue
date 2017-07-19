<template>
    <z-button :styles="btnStyle">{{content}}</z-button>
</template>

<script>
  import ZButton from '../z-button/index.vue'
  export default {
      props : {
          initText : {
              type : String,
              default : '获取验证码'
          },
          firstCkText : {
            type : String,
            default : ''
          },
          secondCKText : {
            type : String,
            default : '重新获取'
          },
          start : {
              type : Boolean,
              default : false
          },
          smsStyles : Object
      },
      components : {
        ZButton
      },
      data () {
        return {
            myTime : null,
            flag : false
        }
      },
      computed : {
         btnStyle () {
             let styles = {
               fontSize:'13px',
               height:'100%',
               padding:'0',
               borderRadius:'0'
             }
             return Object.assign(styles,this.smsStyles)
         },
         content () {
             if(typeof(this.myTime) === "number" && this.flag === true){
                 return `${this.secondCKText}${this.myTime}s`
             }else if(typeof(this.myTime) === "number"){
               return `${this.firstCkText}${this.myTime}s`
             }else{
                 return this.initText
             }
         }
      },
      methods : {
        countDown () {
            this.myTime = 60;
            let time = setInterval(()=>{
                this.myTime --;
                if(this.myTime === 0){
                  this.$emit('update:start', false);
                  this.myTime = this.initText;
                  this.flag = true;
                  clearInterval(time)
                }
            },100)
        }
      },
      watch : {
        start (value) {
          if(value === true){
            this.countDown()
          }
        }
      }
  }
</script>
