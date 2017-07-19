<template>
  <button class="crib-btn" :class="classes" :disabled="disabled" :type="actionType" :style="[button]">
    <i class="crib-btn_border" :style="[border]"></i>
    <i class="crib-loading" v-if="showLoading"></i><slot>text</slot>
  </button>
</template>

<script>
  export default {
    props: {
      type: {
        default: 'default'
      },
      disabled: Boolean,
      mini: Boolean,
      plain: Boolean,
      text: String,
      actionType: String,
      showLoading: Boolean,
      styles : {
          type : Object,
          default () {
              return {}
          }
      }
    },
    computed: {
      classes () {
        return [
          {
            'crib-btn_disabled': this.disabled,
            'crib-btn_mini': this.mini
          },
          `crib-btn_${this.type}`,
          this.plain ? `crib-btn_plain-${this.type}` : '',
          this.showLoading ? `crib-btn_loading` : ''
        ]
      },
      button () {
          let button = Object.assign({},this.styles)
          button.border = ""
          return button
      },
      border () {
         let border = {}
         border.border = this.styles.border
         if(this.plain){
             border.borderWidth=0
         }
         if(this.styles.borderRadius){
           let borderRadiusCount = this.styles.borderRadius.substring(-1,2)
           border.borderRadius = borderRadiusCount*2+'px'
         }

         return border
      }
    }
  }
</script>

<style lang="less">
@import 'z-button.less';
</style>
