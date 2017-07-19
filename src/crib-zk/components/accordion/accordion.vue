<template>
    <div class="accordion">
        <slot></slot>
    </div>
</template>

<script>
   export default{
       props : {
           repeat : {
               type : Boolean,
               default : false
           }
       },
       methods : {
           open(uid) {
               this.$children.forEach (item => {
                   console.log(item._uid)
                   if(item._uid == uid){
                       item.show = !item.show
                   }else{
                       if(!this.repeat){
                           item.show = false
                           item.height = 0;
                       }
                   }
               })
           }
       }
   }
</script>

<style lang='less'>
@import '../../styles/crib_ui/mixin/setBorderLine.less';
.accordion {
  background-color: #fff;
}
.accordion-title {
  display: flex;
  align-items: center;
  position: relative;
  user-select: none;
  padding: 10px 20px;
  overflow: hidden;
  &:after {
    .setBottomLine();
  }
  > span {
    display: block;
    flex: 1;
    font-size: 14px;
    color: #444;
    text-align: left;
  }
  > i {
    overflow: hidden;
    &:after {
      content: '';
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 7px solid #A0A0A0;
      display: block;
      transition: transform .25s cubic-bezier(0.4, 0.6, 0.2, 1);
      transform: rotate(0deg);
    }
    &.accordion-rotated:after {
      transform: rotate(-180deg);
    }
  }
}

.accordion-content {
  position: relative;
  overflow: hidden;
  transition: height .25s cubic-bezier(0.4, 0.6, 0.2, 1);
  &:after {
    .setBottomLine();
  }
}

</style>

