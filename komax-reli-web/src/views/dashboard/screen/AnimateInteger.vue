<template>
  <a-statistic :title="title" :value="animatedNumber" :suffix="suffix" :value-style="numStyle">
    <template #prefix><a-icon v-if="isUp" type="arrow-down" /><a-icon v-if="!isUp" type="arrow-up" /></template>
  </a-statistic>
</template>

<script>
import gsap from 'gsap';

export default {
  name: 'AnimateInteger',
  props: ['title', 'value', 'isUp', 'suffix'],
  data() {
    return {
      number: 0,
      numStyle: { fontSize: '18px', color: '#cf1322' }
    }
  },
  computed: {
    animatedNumber() {
      return this.number.toFixed(0);
    }
  },
  created () {
    gsap.to(this.$data, { duration: 3, number: this.value });
    if(!this.isUp) {
      this.numStyle = Object.assign({}, this.numStyle, {color: '#3f8600'} )
    }
  },
}
</script>