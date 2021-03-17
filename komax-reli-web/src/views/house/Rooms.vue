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
            <a-form-item><a-input-search placeholder="住户名称/设备号" enter-button @search="onSearch" /></a-form-item>
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


    <a-modal title="新增小区" destroyOnClose :visible="disableModal" @ok="() => this.onOK()" @cancel="() => this.disableModal = false">
      <a-form style="margin-top: 8px" :form="form" :labelCol="{ span: 5 }" :wrapperCol="{ span: 15 }">
        <a-form-item label="所属机构">
          <a-select
            @change="onSelectChange"
            placeholder="请选择所属机构"
            v-decorator="[ 'gender', { rules: [{ required: true, message: 'Please select your gender!' }] } ]"
          >
            <a-select-option value="male">
              北京大学
            </a-select-option>
            <a-select-option value="female">
              北京热力集团
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="房号" hasFeedback>
          <a-input placeholder="请输入" v-decorator="['departName', {rules: [{ required: true, message: '请输入至少两个字符的规则描述！', min: 2 }]}]"/>
        </a-form-item>
        <a-form-item label="住户姓名" hasFeedback>
          <a-input placeholder="请输入" v-decorator="['departName', {rules: [{ required: true, message: '请输入至少两个字符的规则描述！', min: 2 }]}]"/>
        </a-form-item>
      </a-form>
    </a-modal>
  </a-row>
</template>
<script>
import STable from '@/components/table/';
// import LeftTree from '../debugInHand/LeftTree';
export default {
  name: 'Rooms',
  components: { LeftTree: () => import('../debugInHand/LeftTree'), STable },
  data() {
    return {
      loading: true,
      cardLoading: false,
      disableModal: false,
      form: this.$form.createForm(this, { name: 'addHouses' }),
      loadData: params => new Promise(function(resolve, reject) {}),
      columns: [
        { title: '住户地址', dataIndex: 'No' },
        { title: '住户姓名', dataIndex: 'departName'},
        { title: '供暖模式', dataIndex: 'createTi' },
        { title: '温度', dataIndex: 'creame' },
        { title: '湿度', dataIndex: 'reTime' },
        { title: '供水温度', dataIndex: 'cTifme' },
        { title: '回水温度', dataIndex: 'crigme' },
        { title: '户热量', dataIndex: 'crime' },
        { title: '控制面板SN', dataIndex: 'crimqe' },
      ],
    }
  },
  methods: {
    onTableChange() {

    },
    onSearch() {

    },
    onSelect() {

    },
    onOK() {
      
    },
    onSelectChange() {

    }
  }

}
</script>