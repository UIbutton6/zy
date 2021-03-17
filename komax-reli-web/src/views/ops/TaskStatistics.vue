<template>
<a-row type="flex" :gutter="16">
    <a-col :md="5" :sm="24">
      <left-tree @onSelect="onTreeSelect" checkable/>
    </a-col>
    <a-col :md="24-5" :sm="24">
      <a-card :loading="cardLoading" :bordered="false" style="height: 100%;">
        <!-- 操作按钮区域 -->
        <div class="table-operator" style="margin-bottom: 20px">
          <a-form :form="form" layout="inline">
            <a-form-item><a-range-picker @change="onDateChange" /></a-form-item>
            <a-form-item><a-input-search placeholder="姓名或机构" enter-button @search="onSearch" /></a-form-item>
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
export default {
  name: 'Equipments',
  components: { 
    STable: () => import('@/components/table/'),
    LeftTree: () => import('../debugInHand/LeftTree'), 
  },
  data() {
    return {
      loading: true,
      cardLoading: false,
      disableModal: false,
      form: this.$form.createForm(this, { name: 'searchTask' }),
      loadData: params => new Promise(function(resolve, reject) {}),
      columns: [
        { title: '姓名', dataIndex: 'No' },
        { title: '所属机构', dataIndex: 'departName'},
        { title: '已巡检次数', dataIndex: 'createTi' },
        { title: '待巡检', dataIndex: 'creame' },
        { title: '超期未检', dataIndex: 'reTime' },
        { title: '巡检率', dataIndex: 'cTime' },
        { title: '处理工单数', dataIndex: 'crime' },
      ],
    }
  },
  methods: {
    onTableChange() {

    },
    onSearch() {

    },
    onDateChange() {

    },
    onTreeSelect() {
      
    }
  }

}
</script>