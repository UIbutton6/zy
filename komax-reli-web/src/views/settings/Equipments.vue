<template>
<a-row type="flex" :gutter="16">
    <a-col :md="5" :sm="24">
      <left-tree @onSelect="onSelect" checkable/>
    </a-col>
    <a-col :md="24-5" :sm="24">
      <a-card :loading="cardLoading" :bordered="false" style="height: 100%;">
        <!-- 操作按钮区域 -->
        <div class="table-operator" ref="dropdown">
          <a-form layout="inline">
            <a-form-item><a-input-search placeholder="住户名称/设备号" v-model="keyWord" enter-button @search="onSearch" /></a-form-item>
          </a-form>
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
const api = {
  list:'/pc/device/list'
};
import { axios } from '@/utils/request';

import STable from '@/components/table/';
// import LeftTree from '../debugInHand/LeftTree';
export default {
  name: 'Equipments',
  components: { LeftTree: () => import('../debugInHand/LeftTree'), STable },
  data() {
    return {
      keyWord: '',
      loading: true,
      cardLoading: false,
      disableModal: false,
      form: this.$form.createForm(this, { name: 'addHouses' }),
      loadData: params => this.getAlarms(params),
      columns: [
        { title: '状态', dataIndex: 'No' },
        { title: '设备名称', dataIndex: 'departName'},
        { title: '设备号', dataIndex: 'deviceNo' },
        { title: '型号', dataIndex: 'deviceVersion' },
        { title: '所属机构', dataIndex: 'hotStationId' },
        { title: '位置', dataIndex: 'address' },
        { title: '数据更新时间', dataIndex: 'updateTime' },
        { title: '操作', width: 150, dataIndex: 'action', scopedSlots: { customRender: 'action' }},
      ],
    }
  },
  methods: {
    onTableChange() {

    },
    onSearch() {
      this.forceRefresh();
    },
    onSelect() {

    },
    onOK() {
      
    },
    onSelectChange() {

    },
    forceRefresh() {
      this.isRefresh = false;
      this.$nextTick(() => this.isRefresh = true )
    },
    getAlarms(par) {
      const params = { ...par, name: this.keyWord };
      return axios({ params, method: 'get', url: api.list})
        .then(res => {
          const { records, current, size, total, pages } = res.result;
          return { data: records, pageSize: size, pageNo: current, totalPage: pages, totalCount: total };
        });
    },
  }

}
</script>