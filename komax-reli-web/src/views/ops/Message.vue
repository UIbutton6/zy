<template>
<a-card :loading="cardLoading" :bordered="false" style="height: 100%;">
  <!-- 操作按钮区域 -->
  <div class="table-operator" ref="dropdown">
    <a-form layout="inline" style="margin-bottom: 20px">
        <a-form-item><a-button @click="() => this.disableModal=true" type="primary" icon="plus">推送消息</a-button></a-form-item>
        <a-form-item style="top: 3px; float:right"><a-input-search placeholder="请输入关键词" enter-button @search="onSearch" /></a-form-item>
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


    <a-modal title="推送消息" destroyOnClose :visible="disableModal" @ok="() => this.onOK()" @cancel="() => this.disableModal = false">
      <a-form style="margin-top: 8px" :form="form" :labelCol="{ span: 5 }" :wrapperCol="{ span: 15 }">
        <a-form-item label="标题" hasFeedback>
          <a-input placeholder="请输入" v-decorator="['departName', {rules: [{ required: true, message: '请输入至少两个字符的规则描述！', min: 2 }]}]"/>
        </a-form-item>

        <a-form-item label="推送用户" hasFeedback>
          <a-checkbox-group v-model="checkeds" :options="checkOptions" @change="onCheckboxChange" />
        </a-form-item>

        <a-form-item label="消息内容" hasFeedback>
          <a-textarea :rows="5" placeholder="..." v-decorator="['description', {}]" />
          <input type="hidden" v-decorator="['id', {}]"/>
        </a-form-item>
      </a-form>
    </a-modal>
</a-card>
</template>
<script>
const checkOptions = ['热用户', '运维用户'];
export default {
  name: 'Message',
  components: { STable: () => import('@/components/table/') },
  data() {
    return {
      checkeds:[],
      loading: false,
      cardLoading: false,
      disableModal: false,
      checkOptions: checkOptions,
      form: this.$form.createForm(this, { name: 'addMessage' }),
      loadData: params => new Promise(function(resolve, reject) {}),
      columns: [
        { title: '序号', dataIndex: 'No' },
        { title: '标题', dataIndex: 'departName'},
        { title: '通知用户类型', dataIndex: 'createTi' },
        { title: '创建时间', dataIndex: 'creame' },
        { title: '操作', width: 150, dataIndex: 'action', scopedSlots: { customRender: 'action' }},
      ],
    }
  },
  methods: {
    onSearch() {},
    onTableChange() {

    },
    onSelectChange() {
      
    },
    onCheckboxChange() {

    }
  }
}
</script>