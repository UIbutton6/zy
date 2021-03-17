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
            <a-form-item>
              <a-button-group>
                <a-button type="primary">昨天</a-button>
                <a-button>近7天</a-button>
                <a-button>近30天</a-button>
                <a-button>近90天</a-button>
              </a-button-group>
            </a-form-item>
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
  name: 'EnergyStatistics',
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
        { title: '换热站名称', dataIndex: 'No' },
        { title: '供热面积(m2)', dataIndex: 'departName'},
        { title: '供水量(吨)', dataIndex: 'createTi' },
        { title: '耗热量(J)', dataIndex: 'creame' },
        { title: '耗电量(KW/h)', dataIndex: 'reTime' },
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