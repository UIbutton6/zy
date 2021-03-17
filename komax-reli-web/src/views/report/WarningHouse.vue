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
  name: 'WarningHouse',
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
        { title: '住户地址', dataIndex: 'No' },
        { title: '报警参数', dataIndex: 'createTi' },
        { title: '当前值', dataIndex: 'eTi' },
        { title: '报警内容', dataIndex: 'creame' },
        { title: '报警时间', dataIndex: 'reTime' },
        { title: '处理状态', dataIndex: 'cTime' },
        { title: '操作', width: 150, dataIndex: 'action', scopedSlots: { customRender: 'action' }},
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