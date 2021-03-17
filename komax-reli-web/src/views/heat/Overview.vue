<template>
<div>
  <a-row :gutter="16" type="flex" justify="space-between">
    <a-col :span="6">
      <a-card title="换热站数量" :bordered="false">
        <p><b>{{data1}}</b> 个</p>
      </a-card>
    </a-col>
    <a-col :span="6">
      <a-card title="供热面积" :bordered="false">
        <p><b>{{data2}}</b> m2</p>
      </a-card>
    </a-col>
    <a-col :span="6">
      <a-card title="预计明日耗热量" :bordered="false">
        <p><b>{{data3}}</b> GJ</p>
      </a-card>
    </a-col>
    <a-col :span="6">
      <a-card title="今日耗热量" :bordered="false">
        <p><b>{{data4}}</b> GJ</p>
      </a-card>
    </a-col>
  </a-row>

  <a-row :gutter="16" type="flex" justify="space-between" style="margin-top: 20px;">
    <a-col :span="12">
      <a-card title="换耗排行榜" :bordered="false">
        <div id="chart1"></div>
      </a-card>
    </a-col>
    <a-col :span="12">
      <a-card title="耗能趋势图" :bordered="false">
        <div id="chart2"></div>
      </a-card>
    </a-col>
  </a-row>
  
</div>
</template>

<script>
import gsap from 'gsap';
import axios from 'axios';
import { Bar } from '@antv/g2plot';
import { Line } from '@antv/g2plot';

export default {
  name: 'ReliOverview',
  data() {
    return {
      data1: 903,
      data2: 10439.88,
      data3: 1521,
      data4: 1205,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.chart1();
      this.chart2();
    });
  },
  methods: {
    chart1() {

      const data = [
        { type: '醉圆居换热站', sales: 900, },
        { type: '清华大学城', sales: 800, },
        { type: '永华家园', sales: 700, },
        { type: '海亮九玺', sales: 600, },
        { type: '延静西里',sales: 500,},
        { type: '中科大', sales: 400,},
        { type: '创新产业园', sales: 390, },
        { type: '中海花园', sales: 38, },
      ];

      const barPlot = new Bar('chart1', {
        data,
        xField: 'sales',
        yField: 'type',
        seriesField: 'type',
        color: ({ type }) => {
          return type === '美容洗护' ? '#FAAD14' : '#5B8FF9';
        },
        legend: false,
        meta: {
          type: {
            alias: '类别',
          },
          sales: {
            alias: '销售额',
          },
        },
      });

      barPlot.render();

    },

    chart2() {

      fetch('https://gw.alipayobjects.com/os/bmw-prod/c48dbbb1-fccf-4a46-b68f-a3ddb4908b68.json')
        .then((res) =>  res.json())
        .then((data) => {
          console.log('data:', data);
          data.map(item=> {
            item.type === "download" && (item.type = "耗热量");
            item.type === "register" && (item.type = "耗水量");
            item.type === "bill" && (item.type = "耗电量");
          })
          const line = new Line('chart2', {
            data,
            xField: 'date',
            yField: 'value',
            yAxis: {
              label: {
                // 数值格式化为千分位
                formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
              },
            },
            seriesField: 'type',
            color: ({ type }) => {
              return type === '耗水量' ? '#F4664A' : type === '耗热量' ? '#30BF78' : '#FAAD14';
            },
            lineStyle: ({ type }) => {
              if (type === '耗水量') {
                return {
                  lineDash: [4, 4],
                  opacity: 1,
                };
              }
              return {
                opacity: 0.5,
              };
            },
          });

          line.render();
        });

    }
  }
}
</script>

<style lang="less" scoped>
b {
  font-size: 24px;
}
</style>