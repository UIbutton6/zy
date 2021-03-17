<template>
  <a-spin tip="正在加载..." :spinning="loading">
    <div id="mapgis"></div>
  </a-spin>
</template>

<script>
import axios from 'axios';
import kmMap from '@/utils/kmMap';
export default {
  name: 'GisMap',
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    this.loadMap();
  },
  methods: {
    loadMap() {
      kmMap.init().then( AMap => {
        const map = new AMap.Map('mapgis', { resizeEnable: true, center: [116.418261, 39.921984], });
        this.draw(map, AMap);
        //this.geolocation(map, AMap);

        map.on('complete', () => {
          this.loading = false;
        })
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
    },

    draw(map, AMap) {
      axios.get('http://a.amap.com/jsapi_demos/static/resource/heatmapData.js')
        .then(res => {
          const repStr = `/**
 * http://gaode.com)
 */
var heatmapData = `;
          const str = res.data.replace(repStr, '');
          return JSON.parse(str.replace(';', ''));
        })
        .then(res => {
          this.loading = false
          const heatmapData = res;
          map.plugin(["AMap.Heatmap"], function () {
            //初始化heatmap对象
            const heatmap = new AMap.Heatmap(map, {
                radius: 80, //给定半径
                opacity: [0, 0.8]
            });
            //设置数据集：该数据为北京部分“公园”数据
            heatmap.setDataSet({
                data: heatmapData,
                max: 100
            });

          });
        })
    }    
  }
}
</script>

<style lang="less" scoped>
  #mapgis {
    width: 100%;
    margin-top: -12px;
    height: calc(100vh - 112px);
  }
</style>