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
            <a-form-item><a-button @click="() => this.disableModal=true" type="primary" icon="plus">新增规则</a-button></a-form-item>
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


    <a-modal title="新增规则" destroyOnClose :visible="disableModal" @ok="() => this.onOK()" @cancel="() => this.disableModal = false">
      <a-form style="margin-top: 8px" :form="form" :labelCol="{ span: 8 }" :wrapperCol="{ span: 12 }">
        <a-form-item label="选择小区">
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

        <a-form-item label="户内参数">
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

        <a-form-item label="触发条件">
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

        <a-form-item label="报警推送内容" hasFeedback>
          <a-textarea :rows="5" placeholder="..." v-decorator="['description', {}]" />
          <input type="hidden" v-decorator="['id', {}]"/>
        </a-form-item>
        <a-form-item label="恢复正常推送内容" hasFeedback>
          <a-textarea :rows="5" placeholder="..." v-decorator="['description', {}]" />
          <input type="hidden" v-decorator="['id', {}]"/>
        </a-form-item>
      </a-form>
    </a-modal>
  </a-row>
</template>
<script>
// import STable from '@/components/table/';
export default {
  name: 'ZoneAlarmRegular',
  components: { 
    LeftTree: () => import('../debugInHand/LeftTree'), 
    STable: () => import('@/components/table/') 
  },
  data() {
    return {
      loading: true,
      cardLoading: false,
      disableModal: false,
      form: this.$form.createForm(this, { name: 'addHouses' }),
      loadData: params => new Promise(function(resolve, reject) {}),
      columns: [
        { title: '小区名称', dataIndex: 'No' },
        { title: '参数', dataIndex: 'departName'},
        { title: '触发条件', dataIndex: 'createTi' },
        { title: '启用状态', dataIndex: 'creame' },
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