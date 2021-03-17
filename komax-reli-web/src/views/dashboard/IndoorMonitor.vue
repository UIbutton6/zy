<template>
  <a-row type="flex" :gutter="16">
    <a-col :md="5" :sm="24">
      <left-tree @onSelect="onSelect"/>
    </a-col>
    <a-col :md="24-5" :sm="24">
      <a-card :loading="cardLoading" :bordered="false" style="height: 100%;">

      </a-card>
    </a-col>
  </a-row>
</template>

<script>
import { LeftTree } from '../debugInHand'

export default {
  name: "IndoorMonitor",
  components: { LeftTree },
  data() {
    return {
      selectData: '',
      cardLoading: false,
    }
  },
  created() {

  },
  methods: {
    onSelect(v) {
      this.selectData = v;
    },
  }
}
</script>

<style scoped>

</style>