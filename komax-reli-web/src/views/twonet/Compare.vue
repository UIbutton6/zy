<template>
  <a-row type="flex" :gutter="16">
    <a-col :md="5" :sm="24">
      <left-tree @onSelect="onSelect" checkable />
    </a-col>
    <a-col :md="24-5" :sm="24">
      <a-card>
        <div id="chartId" style="height: 350px; width: 100%"></div>
      </a-card>

      <a-card :loading="cardLoading" :bordered="false">
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
    </a-col>
  </a-row>
</template>

<script>
import { Column } from '@antv/g2plot';
import STable from '@/components/table/';
import LeftTree from '../debugInHand/LeftTree';
import { stackedData } from '@/test/twoCompare';

export default {
  name: 'Compare',
  components: { STable, LeftTree },
  data() {
    return {
      selectData: '',
      loading: false,
      cardLoading: false,
      loadData: params => new Promise(function(resolve, reject) {}),

      columns: [
        { title: '序号', dataIndex: 'No' },
        { title: '设备名称', dataIndex: 'departName'},
        { title: '设备编号', dataIndex: 'createTime' },
        { title: '供水温度/更新时间', dataIndex: 'cr' },
        { title: '回水温度/更新时间', dataIndex: 'crea' },
        { title: '供水压力/更新时间', dataIndex: 'createTi' },
        { title: '回水压力/更新时间', dataIndex: 'createe' },
        { title: '实时流量/更新时间', dataIndex: 'crime' },
        { title: '操作', width: 150, dataIndex: 'action', scopedSlots: { customRender: 'action' }},
      ],
    }
  },
  created() {
    this.$nextTick(() => this.chart());
  },
  methods: {
    onSearch() {

    },

    onTreeSelect() {

    },
    onTableChange() {

    },
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

<style scoped>

</style>