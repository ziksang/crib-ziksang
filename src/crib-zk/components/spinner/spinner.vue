<template>
  <span>
    <component :is="spinner"></component>
  </span>
</template>

<script>
const SPINNERS = [
  'flower'
];
const parseSpinner = function (index) {
  if ({}.toString.call(index) === '[object Number]') {
    if (SPINNERS.length <= index) {
      console.warn(`'${index}' spinner not found, use the default spinner.`);
      index = 0;
    }
    return SPINNERS[index];
  }
  if (SPINNERS.indexOf(index) === -1) {
    console.warn(`'${index}' spinner not found, use the default spinner.`);
    index = SPINNERS[0];
  }
  return index;
};

export default {
  props: {
    type: {
      default: 0
    },
    size: {
      type: Number,
      default: 20
    },
    color: {
      type: String,
      default: '#ccc'
    }
  },
  computed: {
    spinner() {
      return `spinner-${parseSpinner(this.type)}`;
    }
  },
  components: {
    SpinnerFlower: require('./flower.vue')
  }

}
</script>


