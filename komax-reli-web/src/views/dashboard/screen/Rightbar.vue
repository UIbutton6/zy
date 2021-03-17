<template>
  <div class="bar right">
    <a-page-header title="报警统计" sub-title="今日" @back="e => e.preventDefault()" v-if="!!items.right1">
      <template slot="backIcon">
        <a-icon type="pause" style="font-size: 24px; color: #1890ff;" />
      </template>

      <div class="content">
          <div class="chart" id="rli-2" style="width: 100%; height: 230px"></div>

          <a-row>
            <a-col :span="8">
              <animate-integer title="总数" :value="888" :isUp="1" />
            </a-col>
            <a-col :span="8">
              <animate-integer title="已处理" :value="800" :isUp="1" />
            </a-col>
            <a-col :span="8">
              <animate-integer title="未处理" :value="88" />
            </a-col>
          </a-row>
      </div>

      <a-divider />
    </a-page-header>

    <a-page-header title="报警记录" sub-title="今日" @back="e => e.preventDefault()" v-if="!!items.right2">
      <template slot="backIcon">
        <a-icon type="pause" style="font-size: 24px; color: #1890ff;" />
      </template>

      <a-timeline>
        <a-timeline-item color="green">
          <p>[恢复] 10分钟前 延静西里换热站 一网回温</p>
          <p>[报警] 半小时前 延静西里换热站 一网回温</p>
          <p>[报警] 1小时前 延静西里换热站 一网回温</p>
          <p>[报警] 2小时前 延静西里换热站 一网回温</p>
        </a-timeline-item>
        <a-timeline-item color="green">
          Create a services site 2015-09-01
        </a-timeline-item>
        <a-timeline-item color="red">
          <p>Solve initial network problems 1</p>
          <p>Solve initial network problems 2</p>
          <p>Solve initial network problems 3 2015-09-01</p>
        </a-timeline-item>
        <a-timeline-item>
          <p>Technical testing 1</p>
          <p>Technical testing 2</p>
          <p>Technical testing 3 2015-09-01</p>
        </a-timeline-item>
        <a-timeline-item color="gray">
          <p>Technical testing 1</p>
          <p>Technical testing 2</p>
          <p>Technical testing 3 2015-09-01</p>
        </a-timeline-item>
        <a-timeline-item color="gray">
          <p>Technical testing 1</p>
          <p>Technical testing 2</p>
          <p>Technical testing 3 2015-09-01</p>
        </a-timeline-item>
      </a-timeline>

    </a-page-header>
  </div>
</template>

<script>
import * as _ from 'lodash';
import AnimateInteger from './AnimateInteger';
import { Pie, measureTextWidth } from '@antv/g2plot';

export default {
  name: 'Rightbar',
  props: ['items'],
  components: { AnimateInteger },
  data() {
    return {

    }
  },

  mounted() {
    this.chart().then(piePlot => piePlot.render());
  },

  methods: {
    chart() {
      const data = [
        { type: '已解决', value: 800 },
        { type: '未解决', value: 88 },
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
        const piePlot = new Pie('rli-2', options);
        return resolve(piePlot);
      });
    }
  }
}
</script>

<style lang="less" scoped>
@import './bar.less';
</style>