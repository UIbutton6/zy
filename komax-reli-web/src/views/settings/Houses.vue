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
            <a-form-item><a-button @click="() => this.disableModal=true" type="primary" icon="plus">新增住户</a-button></a-form-item>
            <a-form-item style="top: 3px; float:right"><a-input-search placeholder="住户姓名/设备SN" enter-button @search="onSearch" /></a-form-item>
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
  name: 'Houses',
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
        { title: '控制面板SN', dataIndex: 'createTi' },
        { title: '边缘控制器SN/通道', dataIndex: 'creaTime' },
        { title: '热量表号', dataIndex: 'creTime' },
        { title: '分阀号', dataIndex: 'crteTime' },
        { title: '操作', width: 150, dataIndex: 'action', scopedSlots: { customRender: 'action' }},
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