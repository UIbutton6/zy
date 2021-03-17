<template>
<a-card :loading="cardLoading" :bordered="false" style="height: 100%;">
  <!-- 操作按钮区域 -->
  <div class="table-operator" ref="dropdown">
    <a-form layout="inline">
        <a-form-item><a-button @click="() => this.disableModal=true" type="primary" icon="plus">新增型号</a-button></a-form-item>
        <a-form-item style="top: 3px; float:right"><a-input-search placeholder="请输入设备型号" enter-button @search="onSearch" /></a-form-item>
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


    <a-modal title="新增设备型号" destroyOnClose :visible="disableModal" @ok="() => this.onOK()" @cancel="() => this.disableModal = false">
      <a-form style="margin-top: 8px" :form="form" :labelCol="{ span: 5 }" :wrapperCol="{ span: 15 }">
        <a-form-item label="设备型号" hasFeedback>
          <a-input placeholder="请输入" v-decorator="['departName', {rules: [{ required: true, message: '请输入至少两个字符的规则描述！', min: 2 }]}]"/>
        </a-form-item>

        <a-form-item label="所属项目">
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

        <a-form-item label="生产厂家" hasFeedback>
          <a-input placeholder="请输入" v-decorator="['departName', {rules: [{ required: true, message: '请输入至少两个字符的规则描述！', min: 2 }]}]"/>
        </a-form-item>
        <a-form-item label="使用年限" hasFeedback>
          <a-input placeholder="请输入" v-decorator="['departName', {rules: [{ required: true, message: '请输入至少两个字符的规则描述！', min: 2 }]}]"/>
        </a-form-item>
        <a-form-item label="额定流量" hasFeedback>
          <a-input placeholder="请输入" v-decorator="['departName', {rules: [{ required: true, message: '请输入至少两个字符的规则描述！', min: 2 }]}]"/>
        </a-form-item>
        <a-form-item label="额定扬程" hasFeedback>
          <a-input placeholder="请输入" v-decorator="['departName', {rules: [{ required: true, message: '请输入至少两个字符的规则描述！', min: 2 }]}]"/>
        </a-form-item>
        <a-form-item label="额定电流" hasFeedback>
          <a-input placeholder="请输入" v-decorator="['departName', {rules: [{ required: true, message: '请输入至少两个字符的规则描述！', min: 2 }]}]"/>
        </a-form-item>
      </a-form>
    </a-modal>
</a-card>
</template>
<script>
import STable from '@/components/table/';
export default {
  name: 'EquipmentModel',
  components: { STable },
  data() {
    return {
      loading: false,
      cardLoading: false,
      disableModal: false,
      form: this.$form.createForm(this, { name: 'addHouses' }),
      loadData: params => new Promise(function(resolve, reject) {}),
      columns: [
        { title: '序号', dataIndex: 'No' },
        { title: '设备型号', dataIndex: 'departName'},
        { title: '生产厂家', dataIndex: 'createTi' },
        { title: '使用年限', dataIndex: 'creame' },
        { title: '额定流量', dataIndex: 'reTime' },
        { title: '额定扬程', dataIndex: 'cTime' },
        { title: '额定电流', dataIndex: 'crime' },
        { title: '操作', width: 150, dataIndex: 'action', scopedSlots: { customRender: 'action' }},
      ],
    }
  },
  methods: {
    onSearch() {},
    onTableChange() {

    },
    onSelectChange() {
      
    }
  }
}
</script>