<template>
  <nav class="navbar">
    <a-row style="padding: 0 15px; height: 100%">
      <a-col :span="9" style="margin: 15px 0;">
        <div class="navbar-header">
          <div class="navbar-brand">
            <img src="~@/assets/logo-white.png" class="navbar-logo" style="width: 140px; height: 31px" alt="logo">
            <div class="navbar-title">
              <span class="navbar-brand-text">智慧供热监控大屏</span>
              <span class="navbar-brand-subtext">The Platform of Intelligent Heating System</span>
            </div>
          </div>

          <div class="navbar-title clock" style="float: left">
            <span class="navbar-brand-subtext">{{dateMsg}}</span>
            <span class="navbar-brand-text">{{hourMsg}}</span>
          </div>
        </div>
      </a-col>
      <a-col :span="15" style="height: 100%">
        <screen-setting />
      </a-col>
    </a-row>

  </nav>
</template>

<script>
import * as dayjs from 'dayjs'
import ScreenSetting from './ScreenSetting'

export default {
  name: 'Navbar',
  components: { ScreenSetting },
  data() {
    return {
      timer: 0,
      hourMsg: dayjs().format('HH:mm:ss'),
      dateMsg: `${dayjs().format('YYYY-MM-DD')} 星期--`
    }
  },

  mounted() {
    this.timer = setInterval(() => this.clock(), 1000);
  },

  methods: {
    clock() {
      const weekArr = ['日', '一', '二', '三', '四', '五', '六'];
      this.hourMsg = dayjs().format('HH:mm:ss');
      this.dateMsg = `${dayjs().format('YYYY-MM-DD')} 星期${weekArr[dayjs().day()]}`;
    }
  },

  beforeDestroy() {
    this.timer && clearInterval(this.timer);
  }
}
</script>

<style lang="less" scoped>
@import './bar.less';
</style>