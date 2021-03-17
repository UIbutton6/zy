<template>
  <a-row type="flex" :gutter="16">
    <a-col :md="5" :sm="24">
      <left-tree @onSelect="onSelect" checkable/>
    </a-col>
    <a-col :md="24-5" :sm="24">
      <a-card title="分支流量对比" :loading="cardLoading" :bordered="false" style="">
        {{selectData}}
        <a-row type="flex" :gutter="16">
          <a-col :md="12" :sm="24">
            <div id="chartId"></div>
          </a-col>
          <a-col :md="12" :sm="24">
            2
          </a-col>
        </a-row>
      </a-card>
      <a-card title="分支压差对比" :loading="cardLoading" :bordered="false" style=" margin:10px 0;">
        <a-row type="flex" :gutter="16">
          <a-col :md="12" :sm="24">
            1
          </a-col>
          <a-col :md="12" :sm="24">
            2
          </a-col>
        </a-row>
      </a-card>
      <a-card title="分支温度对比" :loading="cardLoading" :bordered="false" style="">
W        <a-row type="flex" :gutter="16">
          <a-col :md="12" :sm="24">
            1
          </a-col>
          <a-col :md="12" :sm="24">
            2
          </a-col>
        </a-row>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
import LeftTree from './LeftTree';
import { calcuNo } from '@/utils/util';
import { Column } from '@antv/g2plot';
import { stackedData, tbData } from '@/test/debugData';

export default {
  name: 'DiffBranch',
  components: { LeftTree },
  data() {
    return {
      selectData: '',
      cardLoading: false,
    }
  },
  created() {

  },
  methods: {
    onSelect(v) {
      this.selectData = v;
    },
    chart() {
      const options = { data: stackedData, isGroup: true, xField: 'xField', yField: 'yField', seriesField: 'name' };

      const plot = new Column('chartId', {
        ...options,
        label: {
          position: 'middle', // 'top', 'middle', 'bottom'
          layout: [
            { type: 'adjust-color' },
            { type: 'interval-adjust-position' },
          ],
        },
      });

      plot.render();
      this.$once('hook:beforeDestroy', () => plot.destroy() )
    },
  }
}
</script>