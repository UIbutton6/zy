<template>
  <a-row type="flex" :gutter="16">
    <a-col :md="5" :sm="24">
      <left-tree @onSelect="onSelect"/>
    </a-col>
    <a-col :md="24-5" :sm="24">
      <a-card :loading="cardLoading" :bordered="false" style="height: 100%;">
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
import LeftTree from '../debugInHand/LeftTree';
import STable from '@/components/table/';


export default {
  name: 'EdgeControl',
  components: { STable, LeftTree },
  data() {
    return {
      selectData: '',
      loading: false,
      cardLoading: false,
      loadData: params => new Promise(function(resolve, reject) {}),

      columns: [
        { title: '设备名称', dataIndex: 'No' },
        { title: '边缘控制器SN', dataIndex: 'departName'},
        { title: '操作', width: 150, dataIndex: 'action', scopedSlots: { customRender: 'action' }},
        { title: '总阀开度(%)', dataIndex: 'createTime' },
      ],
    }
  },
  created() {

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
    }
  }
}
</script>

<style scoped>

</style>