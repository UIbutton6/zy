<template>
  <a-card :bordered="false">
    <a-tabs>
      <a-tab-pane key="1" tab="换热站概况">
        
        <a-row :gutter="16">
            <a-col :span="12">
              <a-card title="北大换热站" :bordered="false" style="margin-right: 20px;">

                <div style="margin-bottom: 10px; height: 300px; width: 100%" id="chartID"></div>
                <a-descriptions size="small" :column="2">
                  <a-descriptions-item label="所属机构">
                    北京热力集团南片区分公司>东城区服务站
                  </a-descriptions-item>
                  <a-descriptions-item label="地理位置">
                    北京市东城区林岩南路80
                  </a-descriptions-item>
                  <a-descriptions-item label="设备数量">
                    8
                  </a-descriptions-item>
                  <a-descriptions-item label="数据最新采集时间">
                    2017-10-10
                  </a-descriptions-item>
                </a-descriptions>
              </a-card>
            </a-col>
            <a-col :span="12">
              <a-card title="地图位置" :bordered="false" style="margin-left: 20px;">
                <div style="width: 100%; height: 400px" id="mapID"></div>
              </a-card>
            </a-col>
        </a-row>

        <a-card title="参数概况" :bordered="false">
          <s-table
          bordered
          ref="table"
          size="middle"
          rowKey="userId"
          :data="loadData"
          :columns="columns"
          :loading="loading"
          @change="onTableChange"/>
        </a-card>
      </a-tab-pane>

      <a-tab-pane key="2" tab="工艺图展示">
        工艺图展示
      </a-tab-pane>

      <!-- select -->
      <a-select slot="tabBarExtraContent" default-value="lucy" style="width: 200px" @change="onChange">
        <a-select-opt-group>
          <span slot="label"><a-icon type="pause" /> 朝阳区</span>
          <a-select-option value="jack">
            清华大学换热站
          </a-select-option>
          <a-select-option value="lucy">
            北大换热站
          </a-select-option>
        </a-select-opt-group>
        <a-select-opt-group>
          <span slot="label"><a-icon type="pause" /> 海定区</span>
          <a-select-option value="Yiminghe">
            人民大学换热站
          </a-select-option>
        </a-select-opt-group>
      </a-select>
    </a-tabs>
  </a-card>
</template>

<script>
import kmMap from '@/utils/kmMap';
import { Pie } from '@antv/g2plot';
import STable from '@/components/table/';

export default {
  name: 'RunMoniter',
  components: { STable },
  data() {
    return {
      loading: false,
      loadData: params => new Promise(function(resolve, reject) {}),
      columns: [
        { title: '设备', dataIndex: 'No' },
        { title: '参数', dataIndex: 'departName'},
        { title: '当前值', dataIndex: 'createTime' },
        { title: '更新时间', dataIndex: 'updateTime' },
        { title: '操作', width: 150, dataIndex: 'action', scopedSlots: { customRender: 'action' }},
      ],
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => this.map());
    this.chart().then(piePlot => piePlot.render());
  },
  methods: {
    onChange() {

    },
    onTableChange() {},
    map() {
      kmMap.init().then( AMap => {
        var map = new AMap.Map("mapID", { resizeEnable: true });
        AMap.service(["AMap.PlaceSearch"], function() {
            //构造地点查询类
            var placeSearch = new AMap.PlaceSearch({ 
                pageSize: 2, // 单页显示结果条数
                pageIndex: 1, // 页码
                city: "010", // 兴趣点城市
                citylimit: true,  //是否强制限制在设置的城市内搜索
                map: map, // 展现结果的地图实例
                // panel: "panel", // 结果列表将在此容器中进行展示。
                autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
            });
            //关键字查询
            placeSearch.search('北京大学');
        });
      })
    },

    chart() {
      const data = [
        { type: '在线设备：7', value: 7 },
        { type: '离线设备：1', value: 1 },
      ];
      const options = {
        appendPadding: 10,
        data,
        legend: false,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        label: {
          type: 'inner',
          offset: '-50%',
          content: '{value}',
          style: {
            textAlign: 'center',
            fontSize: 14,
          },
        },
        interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
        statistic: {
          title: false,
          content: {
            style: {
              whiteSpace: 'pre-wrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
            formatter: () => `${Math.round(800/888*100)}%`,
          },
        },
      };

      return new Promise(function(resolve, reject) {
        const piePlot = new Pie('chartID', options);
        return resolve(piePlot);
      });
    },
  },
}
</script>

<style lang="less" scoped>

</style>