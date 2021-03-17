<template>
  <fullscreen ref="fullscreen" @change="onfsChange">
    <a-spin tip="正在加载..." :spinning="loading">
      <div id="mapdiv" v-bind:class="[fullScreen ? 'full' : 'notFull']"></div>
      
      <navbar v-if="fullScreen" />
      <transition name="fade"><leftbar v-if="panel.left" :items="leftData" /></transition>
      <transition name="fade"><rightbar v-if="panel.right" :items="rightData" /></transition>
      <a-tooltip placement="left" title="全屏">
        <a-icon class="full-screen-icon" type="fullscreen" @click="toggle" />
      </a-tooltip>
    </a-spin>
  </fullscreen>
</template>

<script>
import axios from 'axios';
import kmMap from '@/utils/kmMap';
import { point } from '@antv/g2plot';
import { Navbar, Leftbar, Rightbar } from './screen/';

export default {
  name: 'Home',
  components: { Fullscreen: () => import('vue-fullscreen/src/component'), Navbar, Leftbar,Rightbar },

  data() {
    return {
      loading: true,
      leftPanel: true,
      rightPanel: true,
      fullScreen: false,
      panel: { left: false, right: false },
      rightData: { right1: true, right2: true },
      leftData: { left1: true, left2: true, left3: true },
    }
  },
  
  provide() {
    return {
      topgglePanel: this.topgglePanel,
    }
  },

  methods: {
    toggle () {
      this.$refs['fullscreen'].toggle();
    },

    topgglePanel(arr) {
      if(!this.fullScreen) {
        return;
      }
      const left = [];
      const right = [];
      arr.map(item => {
        /left/.test(item.label) && left.push(item);
        /right/.test(item.label) && right.push(item);
      })
      this.calcPanelData(left);
      this.calcPanelData(right);
    },

    calcPanelData(arr) {
      const tag = arr[0].label
      this.panel[tag] = arr[0].value;
      const obj = {}
      arr.map(item => {
        let _item={};
        const { label, value } = item;
        _item[label] = value;
        Object.assign(obj, _item);
      })
      this[`${tag}Data`] = obj;
      console.log('data: ', this[`${tag}Data`]);
    },

    onfsChange (fullscreen) {
      this.loading = true;
      this.fullScreen = fullscreen;
      timeID && clearTimeout(timeID); // 释放计时器
      fullscreen || (this.panel = {left: false, right: false } );

      const timeID = setTimeout(() => {
        fullscreen && (this.panel = {left: true, right: true });
        this.loading = false
      }, 1000);
    },

    loadMap() {
      kmMap.init().then( AMap => {
        const map = new AMap.Map("mapdiv", { resizeEnable: true });
        map.setMapStyle('amap://styles/darkblue');

        this.drawDot(map, AMap)
        this.geolocation(map, AMap);

        map.on('complete', () => {
          this.loading = false;
        })
        this.$once('hook:beforeDestroy', () => map.destroy())
      });
    },

    drawDot(map, AMap) {
      const markers = [];
      axios.get('http://a.amap.com/jsapi_demos/static/china.js')
        .then(res => JSON.parse( res.data.replace('var points = ', '') ))
        .then(res => {
          console.log('点数：', res.length);
          res.forEach(item => {
             markers.push(new AMap.Marker({
              position: item['lnglat'],
              content: '<div style="background-color: hsla(180, 100%, 50%, 0.7); height: 24px; width: 24px; border: 1px solid hsl(180, 100%, 40%); border-radius: 12px; box-shadow: hsl(180, 100%, 50%) 0px 0px 1px;"></div>',
              offset: new AMap.Pixel(-15, -15)
            }))
          });
          new AMap.MarkerClusterer(map, markers, {gridSize: 80})
        });
    },

    geolocation(map, AMap){ // 精确定位
      const options = {
        'buttonOffset': new AMap.Pixel(10, 20),//定位按钮距离对应角落的距离
        'markerOptions':{//自定义定位点样式，同Marker的Options
          'offset': new AMap.Pixel(-18, -36),
          'content':'<img src="https://a.amap.com/jsapi_demos/static/resource/img/user.png" style="width:36px;height:36px"/>'
        },
      };

      AMap.plugin(["AMap.Geolocation"], function() {
          const geolocation = new AMap.Geolocation({...kmMap.locationOptions, ...options});
          map.addControl(geolocation);
          geolocation.getCurrentPosition()
      })
    }

  },
  mounted() {
    this.$nextTick(() => this.loadMap())
  },
}
</script>
<style lang="less" scoped>

  #mapdiv {
    width: 100%;
    margin-top: -12px;
  }
  #mapdiv.notFull {
    height: calc(100vh - 112px);
  }
  #mapdiv.full {
    height: calc(100vh + 12px);
  }

  .full-screen-icon {
    position: fixed;
    top: 80px;
    right: 35px;
    cursor: pointer;
    &:hover {
      color: #000;
    }
  }
</style>