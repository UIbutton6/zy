<template>
  <a-row type="flex" :gutter="16">
    <a-col :md="5" :sm="24">
      <left-tree @onSelect="onSelect"/>
    </a-col>
    <a-col :md="24-5" :sm="24">
      <a-card :loading="cardLoading" :bordered="false" >
        {{selectData}}
        <div id="chartId"></div>
      </a-card>
      <a-card :loading="cardLoading" :bordered="false" style=" margin-top:10px;">
        <s-table
          ref="table"
          size="default"
          :data="loadData"
          :columns="columns"
          :loading="loading"
          @onSelect="onChange">
          
        </s-table>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
import LeftTree from './LeftTree';
import { calcuNo } from '@/utils/util';
import STable from '@/components/table/';
import { Column } from '@antv/g2plot';
import { stackedData, tbData } from '@/test/debugData';
// import { getProjects, addOrEditPM } from '@/api/pm';

export default {
  name: 'SameBranch',
  components: { STable, LeftTree },
  data() {
    return {
      selectData: '',
      cardLoading: false,
      
      loading: false,
      loadData: params => new Promise(function(resolve, reject) {}),
      columns:[
        { title: '参数', dataIndex: 'No' },
        { title: '调试前', dataIndex: 'departName'},
        { title: '调试后', dataIndex: 'createTime', sorter: true },
      ]
    }
  },
  created() {
    this.$nextTick(() => this.chart());
    
  },
  methods: {
    onSelect(v) {
      this.selectData = v;
      this.loadData = tbData;
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

    onChange () {
      console.log('change');
    },

    onSearch () {

    },

  }
}
</script>