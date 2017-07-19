<script>
export default {
  computed: {
    spinnerColor() {
      return this.$parent.color;
    },
    spinnerSize() {
      return this.$parent.size + 'px';
    }
  },
};
</script>
