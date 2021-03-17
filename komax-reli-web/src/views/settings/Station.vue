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
            <a-form-item><a-button @click="() => this.visible=true" type="primary" icon="plus">新增换热站</a-button></a-form-item>
            <a-form-item style="top: 3px; float:right"><a-input-search placeholder="请输入项目名称" enter-button @search="onSearch" /></a-form-item>
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


    <!-- <new-station :visible="visible" @toggle="()=> this.visible = !this.visible" /> -->
    <add-station :visible="visible" @toggle="()=> this.visible = !this.visible" />
  </a-row>
</template>

<script>
import NewStation from './NewStation';
import AddStation from './AddStation';
export default {
  name: 'Station',
  components: {
    NewStation: () => import('./NewStation'), 
    AddStation: () => import('./AddStation'),
    STable: () => import('@/components/table/'),
    LeftTree: () => import('../debugInHand/LeftTree'), 
  },
  data() {
    return {
      visible: false,
      selectData: '',
      loading: false,
      cardLoading: false,
      loadData: params => new Promise(function(resolve, reject) {}),

      columns: [
        { title: '序号', dataIndex: 'No' },
        { title: '换热站名称', dataIndex: 'departName'},
        { title: '所属机构', dataIndex: 'createTime' },
        { title: '操作', width: 150, dataIndex: 'action', scopedSlots: { customRender: 'action' }},
      ],
    }
  },

  methods: {
    onTableChange() {

    },


    onSelect(v) {
      this.selectData = v;
    },

    onSearch() {

    },

    onDrawerCancel() {
      this.visible = false;
    },
  },
}
</script>