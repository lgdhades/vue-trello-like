
<template>
  <div>
    <span v-if="loading">loading ...</span>
  </div>
</template>

<script>
export default {
  name: 'ScrollLoader',
  props: {
    'loader-method': {
      type: Function,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    },
  },
  data(){
    return {
      display: false
    }
  },
  computed: {
    observer () {
      return new IntersectionObserver(([{isIntersecting}]) => {
        isIntersecting  && this.loaderMethod()
      }, this.options)
    }
  },
  mounted () {
    this.observer.observe(this.$el)
  },
  activated () {
    this.observer.observe(this.$el)
  },
  deactivated () {
    this.observer.unobserve(this.$el)
  },
  beforeDestroy () {
    this.observer.unobserve(this.$el)
  }
}
</script>
