<template>
  <div class="setting">
    <a-dropdown :getPopupContainer="() => $refs.setting" v-model="visible">
      <div style="width: 100%; height:52px" ref="setting">
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          <a-icon type="setting" class="icon" />
        </a>
      </div>

      <a-menu slot="overlay" @click="onMenuClick">
        <template v-for="(item, index) in menus">
          <a-menu-divider :key="item.name" v-if="item.divider && index !== 0" />
          <a-menu-item :key="item.label">
            <a-row style="width: 200px">
              <a-col :span="12">{{item.name}} {{index}}</a-col>
              <a-col :span="12" class="menubar"><a-switch checked-children="开" un-checked-children="关" size="small" :id="item.label" default-checked @change="onChange" /></a-col>
            </a-row>
          </a-menu-item>
          <a-menu-divider :key="index" v-if="item.divider && index !== menus.length + 1" />
        </template>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
export default {
  name: 'ScreenSetting',
  inject: ['topgglePanel'],
  data() {
    return {
      visible: false,
      menus: [
        { label: 'left', name: '左侧信息面板', value: true, divider: true },
        { label: 'left1', name: '数据概况', value: true },
        { label: 'left2', name: '热耗排行榜', value: true },
        { label: 'left3', name: '热耗量趋势图', value: true },
        { label: 'right', name: '右侧信息面板', value: true, divider: true },
        { label: 'right1', name: '报警统计', value: true },
        { label: 'right2', name: '报警记录', value: true }
      ],
    }
  },
  methods: {
    onMenuClick (e) {
      e.key === '3' && (this.visible = false); 
    },
    onChange(checked, e) {
      const id = e.target.id || e.currentTarget.id;
      this.menus.map(item => item.label === id && (item.value=checked));

      this.topgglePanel(this.menus)
    },
  }
}
</script>

<style lang="less" scoped>
@import './bar.less';
</style>