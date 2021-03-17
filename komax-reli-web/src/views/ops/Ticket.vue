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
            <a-form-item>
              <a-select
                show-search
                placeholder="请选择工单类型"
                option-filter-prop="children"
                style="width: 200px"
                :filter-option="filterOption"
                @focus="onFocus"
                @blur="onBlur"
                @change="onSelectChange">
                <a-select-option value="jack">低温</a-select-option>
                <a-select-option value="lucy">高温</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item>
              <a-select
                show-search
                placeholder="请选择工单状态"
                option-filter-prop="children"
                style="width: 200px"
                :filter-option="filterOption"
                @focus="onFocus"
                @blur="onBlur"
                @change="onSelectChange">
                <a-select-option value="jack">待接单</a-select-option>
                <a-select-option value="lucy">已接单</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item><a-range-picker @change="onDateChange" /></a-form-item>
            <a-form-item><a-input-search placeholder="房号/工单编号" enter-button @search="onSearch" /></a-form-item>
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
  name: 'Ticket',
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
        { title: '工单编号', dataIndex: 'No' },
        { title: '工单类型', dataIndex: 'departName'},
        { title: '所属机构', dataIndex: 'createTi' },
        { title: '报修地址', dataIndex: 'creame' },
        { title: '联系电话', dataIndex: 'reTime' },
        { title: '状态', dataIndex: 'cTime' },
        { title: '维修人员', dataIndex: 'crime' },
        { title: '提交时间', dataIndex: 'cr' },
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
      
    },
    onSelectChange() {

    },
    onFocus() {},
    onBlur() {},
    filterOption() {},
  }

}
</script>