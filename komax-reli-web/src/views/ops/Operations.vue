<template>
<a-row type="flex" :gutter="16">
    <a-col :md="5" :sm="24">
      <left-tree @onSelect="onTreeSelect" checkable/>
    </a-col>
    <a-col :md="24-5" :sm="24">
      <a-card :loading="cardLoading" :bordered="false" style="height: 100%;">
        <!-- 操作按钮区域 -->
        <div class="table-operator" ref="dropdown">
          <a-form layout="inline" style="margin-bottom: 20px">
            <a-form-item><a-button @click="onUserModal" type="primary" icon="plus">新增账号</a-button></a-form-item>
            <a-form-item style="top: 3px; float:right"><a-input-search placeholder="请输入姓名" enter-button @search="onSearch" /></a-form-item>
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

    <user-modal ref="userModal" @ok="userModalOK"></user-modal>

    <!-- <a-modal title="新增账号" destroyOnClose :visible="disableModal" @ok="() => this.onOK()" @cancel="() => this.disableModal = false">
      <a-form style="margin-top: 8px" :form="form" :labelCol="{ span: 5 }" :wrapperCol="{ span: 15 }">
        <a-form-item label="小区名称" hasFeedback>
          <a-input placeholder="请输入" v-decorator="['departName', {rules: [{ required: true, message: '请输入至少两个字符的规则描述！', min: 2 }]}]"/>
        </a-form-item>

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
      </a-form>
    </a-modal> -->
  </a-row>
</template>
<script>
export default {
  name: 'Operations',
  components: {
    STable: ()=> import('@/components/table/'),
    LeftTree: () => import('../debugInHand/LeftTree'),
    UserModal: () => import('../system/modules/UserModal'),
  },
  data() {
    return {
      loading: true,
      cardLoading: false,
      disableModal: false,
      form: this.$form.createForm(this, { name: 'addOps' }),
      loadData: params => new Promise(function(resolve, reject) {}),
      columns: [
        { title: '序号', dataIndex: 'No' },
        { title: '姓名', dataIndex: 'departName'},
        { title: '账号', dataIndex: 'createTi' },
        { title: '所属机构', dataIndex: 'creaTime' },
        { title: '联系电话', dataIndex: 'creTime' },
        { title: '邮箱', dataIndex: 'crteTime' },
        { title: '状态', dataIndex: 'status' },
        { title: '操作', width: 150, dataIndex: 'action', scopedSlots: { customRender: 'action' }},
      ],
    }
  },
  methods: {
    onTableChange() {

    },
    onSearch() {

    },
    onTreeSelect() {},
    onUserModal() {
      this.$refs.userModal.roleDisabled = true
      this.$refs.userModal.selectedRole = [this.currentRoleId]
      this.$refs.userModal.add()
      this.$refs.userModal.title = '新增'
    },
    userModalOK() {

    }
  }

}
</script>