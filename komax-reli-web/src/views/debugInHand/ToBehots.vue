<template>
  <a-row type="flex" :gutter="16">
    <a-col :md="5" :sm="24">
      <left-tree @onSelect="onSelect"/>
    </a-col>
    <a-col :md="24-5" :sm="24">
      <a-card :loading="cardLoading" :bordered="false" style="height: 100%;">
        <div class="table-page-search-wrapper">
          <a-input-search @search="onSearch" style="width:300px; margin: 10px auto" placeholder="换热站名查询..." enterButton />
          {{selectData}}
        </div>

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
import LeftTree from './LeftTree';
import STable from '@/components/table/';


export default {
  name: 'ToBehots',
  components: { STable, LeftTree },
  data() {
    return {
      selectData: '',
      loading: false,
      cardLoading: false,
      loadData: params => new Promise(function(resolve, reject) {}),

      columns: [
        { title: '换热站名称', dataIndex: 'No' },
        { title: '运行状态', dataIndex: 'departName'},
        { title: '供热面积', dataIndex: 'createTime' },
        { title: '操作', width: 150, dataIndex: 'action', scopedSlots: { customRender: 'action' }},
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