<template>
  <div class="crib-fading-circle" :style="{
       width: spinnerSize,
       height: spinnerSize
    }">
    <div class="crib-circle1 crib-circle-ios"></div>
    <div class="crib-circle2 crib-circle-ios"></div>
    <div class="crib-circle3 crib-circle-ios"></div>
    <div class="crib-circle4 crib-circle-ios"></div>
    <div class="crib-circle5 crib-circle-ios"></div>
    <div class="crib-circle6 crib-circle-ios"></div>
    <div class="crib-circle7 crib-circle-ios"></div>
    <div class="crib-circle8 crib-circle-ios"></div>
    <div class="crib-circle9 crib-circle-ios"></div>
    <div class="crib-circle10 crib-circle-ios"></div>
    <div class="crib-circle11 crib-circle-ios"></div>
    <div class="crib-circle12 crib-circle-ios"></div>
  </div>
</template>
<script>
import common from '../../mixin/spinner.vue';
export default {
  mixins: [common],
  mounted() {
    let style = document.createElement('style')
    document.head.appendChild(style);
    console.log(style)
    let sheet = style.sheet;
    sheet.addRule('.crib-fading-circle .crib-circle-ios:before', `background-color:${this.spinnerColor}`);
  }

}
</script>

<style lang="less">
.crib-fading-circle {
  width: 30px;
  height: 30px;
  position: relative;
}

.crib-fading-circle .crib-circle-ios {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.crib-fading-circle .crib-circle-ios:before {
  content: '';
  display: block;
  margin: 0 auto;
  width: 5%;
  height: 25%;
  background-color: #333;
  -webkit-animation: crib-circleFadeDelay-ios 1.2s infinite ease-in-out both;
  animation: crib-circleFadeDelay-ios 1.2s infinite ease-in-out both;
}

.crib-fading-circle .crib-circle2 {
  -webkit-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  transform: rotate(30deg);
}

.crib-fading-circle .crib-circle3 {
  -webkit-transform: rotate(60deg);
  -ms-transform: rotate(60deg);
  transform: rotate(60deg);
}

.crib-fading-circle .crib-circle4 {
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}

.crib-fading-circle .crib-circle5 {
  -webkit-transform: rotate(120deg);
  -ms-transform: rotate(120deg);
  transform: rotate(120deg);
}

.crib-fading-circle .crib-circle6 {
  -webkit-transform: rotate(150deg);
  -ms-transform: rotate(150deg);
  transform: rotate(150deg);
}

.crib-fading-circle .crib-circle7 {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}

.crib-fading-circle .crib-circle8 {
  -webkit-transform: rotate(210deg);
  -ms-transform: rotate(210deg);
  transform: rotate(210deg);
}

.crib-fading-circle .crib-circle9 {
  -webkit-transform: rotate(240deg);
  -ms-transform: rotate(240deg);
  transform: rotate(240deg);
}

.crib-fading-circle .crib-circle10 {
  -webkit-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  transform: rotate(270deg);
}

.crib-fading-circle .crib-circle11 {
  -webkit-transform: rotate(300deg);
  -ms-transform: rotate(300deg);
  transform: rotate(300deg);
}

.crib-fading-circle .crib-circle12 {
  -webkit-transform: rotate(330deg);
  -ms-transform: rotate(330deg);
  transform: rotate(330deg);
}

.crib-fading-circle .crib-circle2:before {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.crib-fading-circle .crib-circle3:before {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

.crib-fading-circle .crib-circle4:before {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.crib-fading-circle .crib-circle5:before {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

.crib-fading-circle .crib-circle6:before {
  -webkit-animation-delay: -0.7s;
  animation-delay: -0.7s;
}

.crib-fading-circle .crib-circle7:before {
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
}

.crib-fading-circle .crib-circle8:before {
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}

.crib-fading-circle .crib-circle9:before {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}

.crib-fading-circle .crib-circle10:before {
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}

.crib-fading-circle .crib-circle11:before {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}

.crib-fading-circle .crib-circle12:before {
  -webkit-animation-delay: -0.1s;
  animation-delay: -0.1s;
}

@-webkit-keyframes crib-circleFadeDelay {
  0%,
  39%,
  100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}

@keyframes crib-circleFadeDelay {
  0%,
  39%,
  100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}

@-webkit-keyframes crib-circleFadeDelay-ios {
  /*ios版菊花Loading*/
  0%,
  39%,
  100% {
    opacity: .3;
  }
  40% {
    opacity: 1;
  }
}

@keyframes crib-circleFadeDelay-ios {
  /*ios版菊花Loading*/
  0%,
  39%,
  100% {
    opacity: .3;
  }
  40% {
    opacity: 1;
  }
}
</style>
