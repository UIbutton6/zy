<template>
  <div>
    <div id="secondaryPipe"></div>

    <div class="info">
      <a-tree-select
        allow-clear
        :value="value"
        @select="onSelect"
        @search="onSearch"
        @change="onChange"
        style="width: 100%"    
        :tree-data="treeData"
        :load-data="onLoadData"
        placeholder="请输入机构/换热站/小区/机构/设备名"/>
    </div>
    <div id="panel" style="display: none"></div>
  </div>  
</template>
<script>
import kmMap from '@/utils/kmMap';
export default {
  name: 'SecondaryPipe',
  components: {
    LeftTree: () => import('../debugInHand/LeftTree'),
  },
  data() {
    return {
      map: {},
      AMap: {},
      path: [],
      value: undefined,
      treeData: [
        { id: 1, pId: 0, value: '北京清华大学', title: '北京清华大学' },
        { id: 2, pId: 0, value: '北京大学', title: '北京大学' },
        { id: 3, pId: 0, value: '中国科大', title: '中国科大', isLeaf: true },
        { id: 4, pId: 0, value: '合肥创新产业园', title: '合肥创新产业园', isLeaf: true },
      ],
    }
  },
  mounted() {
    this.loadMap();
  },
  methods: {
    onChange(value) {
      this.value = value;
      this.mapPOI(value);
    },
    onSearch() {},
    onSelect() {},
    onTreeSelect() {

    },
    onLoadData(treeNode) {
      return new Promise(resolve => {
        const { id } = treeNode.dataRef;
        setTimeout(() => {
          this.treeData = this.treeData.concat([
            this.genTreeNode(id, false),
            this.genTreeNode(id, true),
          ]);
          resolve();
        }, 300);
      });
    },
    genTreeNode(parentId, isLeaf = false) {
      const random = Math.random().toString(36).substring(2, 6);
      return { id: random, pId: parentId, value: random, title: isLeaf ? 'Tree Node' : 'Expand to load', isLeaf, };
    },
    loadMap() {
      kmMap.init({plugin: 'AMap.PolyEditor,AMap.PlaceSearch'}).then( AMap => {
        const map = new AMap.Map('secondaryPipe', { resizeEnable: true,  center: [116.395577, 39.892257],});
        this.map = map;
        this.AMap = AMap;
        const clickListener = AMap.event.addListener(map, "click", function(e) {
          console.log('e', e);
          new AMap.Marker({
              position: e.lnglat,
              map: map
          });
        });

        this.drawPolyline(map, AMap);
        map.on('complete', () => this.loading = false);
        this.$once('hook:beforeDestroy', () => map.destroy())
      });
    },

    mapPOI(keyword) {
      console.log('keyword:', keyword);
      const { AMap, map } = this;
      const options = { 
        pageSize: 1, // 单页显示结果条数
        pageIndex: 1, // 页码
        map: map, // 展现结果的地图实例
        panel: "panel", // 结果列表将在此容器中进行展示。
        autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
      }

      AMap.service(["AMap.PlaceSearch"], function() {
        var placeSearch = new AMap.PlaceSearch(options);
        placeSearch.search(keyword); // 关键字查询
      });
    },
    drawPolyline(map) {
      var path = [
        [116.371888, 39.856555],
        [116.369828, 39.831382],
        [116.401156, 39.832436],
        [116.400212, 39.856951],
        [116.371888, 39.856555],
      ];
      const options = {
        path: path,
        isOutline: true,
        outlineColor: '#ffeeff',
        borderWeight: 3,
        strokeColor: "#3366FF", 
        strokeOpacity: 1,
        strokeWeight: 6,
        strokeStyle: "solid",
        lineJoin: 'round',
        lineCap: 'round',
        zIndex: 50,
      }
      const polyline = new AMap.Polyline(options);
      
      polyline.setMap(map);
      map.setFitView([ polyline ])

      const polyEditor = new AMap.PolyEditor(map, polyline);
      polyEditor.open();

      polyEditor.on('addnode', function(event) {
        console.log('触发事件：addnode', event);
      })

      polyEditor.on('adjust', function(event) {
        console.log('触发事件：adjust', event);
      })
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
}
</script>

<style lang="less" scoped>
  #secondaryPipe {
    width: 100%;
    margin-top: -12px;
    height: calc(100vh - 112px);
  }
  .info {
    top: 120px;
    right: 20px;
    width: auto;
    padding: 10px;
    min-width: 22rem;
    border-width: 0px;
    position: absolute;
    border-radius: 0.25rem;
    background-color: white;
    box-shadow: rgba(114, 124, 245, 0.5) 0px 2px 6px 0px;
  }

</style>