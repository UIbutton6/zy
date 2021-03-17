<template>
  <div class="bar left">

    <a-page-header title="数据概况" sub-title="本周" @back="e => e.preventDefault()" v-if="items.left1">
      <template slot="backIcon">
        <a-icon type="pause" style="font-size: 24px; color: #1890ff;" />
      </template>

      <div class="content">
        <a-row>
          <a-col :span="12">
            <animate-integer title="换热站数量" :value="200000" :isUp="false" />
          </a-col>
          <a-col :span="12">
            <animate-integer title="报警换热站" :value="6000" :isUp="true" />
          </a-col>
        </a-row>

        <a-row>
          <a-col :span="12">
            <animate-integer title="供热面积" :value="30000" :isUp="true" />
          </a-col>
          <a-col :span="12">
            <animate-integer title="今日耗热量" :value="60012" :isUp="false" />
          </a-col>
        </a-row>

        <a-row>
          <a-col :span="12">
            <animate-integer title="昨日供热量" :value="400345" suffix="GJ" :isUp="false" />
          </a-col>
          <a-col :span="12"></a-col>
        </a-row>
      </div>

      <a-divider />
    </a-page-header>

    <a-page-header title="热耗排行榜" sub-title="本周" @back="e => e.preventDefault()" v-if="items.left2">
      <template slot="backIcon">
        <a-icon type="pause" style="font-size: 24px; color: #1890ff;" />
      </template>

      <div class="content">
          <div class="main">
            <a-descriptions size="small" :column="1">
              <a-descriptions-item label="No.1 延静西里换热站">
                23 GJ
              </a-descriptions-item>
              
            </a-descriptions>
            <a-descriptions size="small" :column="1">
              <a-descriptions-item label="No.2 清华大学城换热点">
                <a>421421</a> GJ
              </a-descriptions-item>
            </a-descriptions>
            <a-descriptions size="small" :column="1">
              <a-descriptions-item label="No.3 永和家园换热站">
                23 GJ
              </a-descriptions-item>
            </a-descriptions>
            <a-descriptions size="small" :column="1">
              <a-descriptions-item label="No.4 清华大学城换热点">
                <a>421421</a> GJ
              </a-descriptions-item>
            </a-descriptions>
            <a-descriptions size="small" :column="1">
              <a-descriptions-item label="No.5 永和家园换热站">
                23 GJ
              </a-descriptions-item>
            </a-descriptions>
          </div>
      </div>
      
      <a-divider />
    </a-page-header>

    <a-page-header title="热耗量趋势图" sub-title="本周" @back="e => e.preventDefault()" v-show="!!items.left3">
      <template slot="backIcon">
        <a-icon type="pause" style="font-size: 24px; color: #1890ff;" />
      </template>

      <div id="rli-1"></div>
      
      <a-divider />
    </a-page-header>

  </div>
</template>

<script>
import { DualAxes } from '@antv/g2plot';
import AnimateInteger from './AnimateInteger';
export default {
  name: 'Leftbar',
  props: ['items'],
  components: { AnimateInteger },
  data() {
    return {

    }
  },

  created() {

  },
  mounted() {
    this.chart().then(dualAxes => dualAxes.render())
  },
  methods: {
    chart() {
      const data = [
        { time: '2019-03', value: 350, count: 800 },
        { time: '2019-04', value: 900, count: 600 },
        { time: '2019-05', value: 300, count: 400 },
        { time: '2019-06', value: 450, count: 380 },
        { time: '2019-07', value: 470, count: 220 },
      ];
      const options = {
        data: [data, data],
        xField: 'time',
        yField: ['value', 'count'],
        geometryOptions: [
          {
            geometry: 'column',
            color: '#5B8FF9',
          },
          {
            geometry: 'line',
            color: '#5AD8A6',
            lineStyle: {
              lineWidth: 2,
              stroke: '#5AD8A6',
            },
          },
        ],
      };

      return new Promise(function(resolve, reject){
        const dualAxes = new DualAxes('rli-1', options);
        return resolve(dualAxes);
      });
    },

  }
}
</script>

<style lang="less" scoped>
@import './bar.less';
</style>