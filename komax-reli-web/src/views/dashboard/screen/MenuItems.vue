<template>
  <a-menu-item>
    <a-row style="width: 200px">
      <a-col :span="12">数据概况</a-col>
      <a-col :span="12" class="menubar"><a-switch checked-children="开" un-checked-children="关" size="small" id="left-1" default-checked @change="onChange" /></a-col>
    </a-row>
  </a-menu-item>
</template>

<script>
export default {
  name: 'MenuItems',
  data() {
    return {

    }
  },
  created() {

  },
  methods: {

  },
}
</script>

<style lang="less" scoped>
@import './bar.less';
</style>