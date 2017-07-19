<template>
    <div>
        <div class="accordion-title" @click='toggle'>
             <span>{{title}}</span>
             <i :class="show ? 'accordion-rotated' : ''"></i>
        </div>
        <div class="accordion-content" :style="{height:height}">
            <div ref='content'>
                <slot></slot>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  data () {
      return {
          height:0,
          show : this.open
      }
  },
  props : {
      title : String,
      open : {
          type : Boolean,
          default : false
      }
  },
  watch : {
      open (value) {
         this.show = value
      }
  },
  methods : {
      toggle () {
        this.$parent.open(this._uid)
        console.log(this._uid)
        this.setHeight();
      },
      setHeight () {
          this.height = (this.show ? this.$refs.content.offsetHeight: 0) + 'px';
      }
  },
  mounted () {
      this.setHeight();
  }
}
</script>

