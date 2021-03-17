<template>
  <a-card :bordered="false">
    <div class="table-operator">
      <a-form layout="inline">
        <a-form-item><a-button @click="onAdd" type="primary" icon="plus">新增</a-button></a-form-item>
        <a-form-item style="top: 3px; float:right"><a-input-search placeholder="请输入用户名或账号" enter-button @search="onSearch" /></a-form-item>
      </a-form>
    </div>

    <s-table
      ref="table"
      size="default"
      v-if="isRefresh"
      :data="loadData"
      :columns="columns"
      @onSelect="onChange">

      <template #status="val, {id, username}">
        <a-switch :checked="val === 1" :status="val" :id="id" :value="username" @change="onStatus">
          <a-icon slot="checkedChildren" type="check" />
          <a-icon slot="unCheckedChildren" type="close" />
        </a-switch>
      </template>

      <template #action="val, item">
        <a @click="onEdit(item)">编辑</a>
        <a-divider type="vertical" />
        <a-dropdown>
          <a class="ant-dropdown-link"> 更多 <a-icon type="down" /></a>
          <a-menu slot="overlay">
            <a-menu-item><a @click="onReset(item)">重置密码</a></a-menu-item>
            <a-menu-item><a href="javascript:;">一键登录</a></a-menu-item>
            <a-menu-item><a @click="onDel(item)">删除</a></a-menu-item>
          </a-menu>
        </a-dropdown>
      </template>
    </s-table>

    <a-modal :title="modal.title" destroyOnClose :visible="modal.enable" @ok="onOK" @cancel="() => this.modal.enable = false">
      <a-form :labelCol="{ span: 5 }" :wrapperCol="{ span: 15 }" style="margin-top: 8px; padding-left: 125px" :form="form">
        <a-form-item help="请输入真实姓名或别名" hasFeedback>
          <a-input placeholder="用户名" v-decorator="['realname', {rules: [{ required: true, message: '请真实姓名或别名，不能为空', min: 2 }]}]">
            <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
          </a-input>
        </a-form-item>

        <a-form-item  help="注意，登录使用，不可重复" hasFeedback>
          <a-input placeholder="账号" :disabled="disabled" v-decorator="['username', {rules: [{ required: true, message: '请填写登录账号', min: 2 }]}]">
            <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
          </a-input>
        </a-form-item>

        <a-form-item hasFeedback>
          <a-input
            size="large"
            type="password"
            autocomplete="false"
            :disabled="disabled"
            placeholder="密码 / 123456"
            v-decorator="['password',{rules: [{ required: true, message: '请设置该账号密码' }, { validator: checkpwd }]}]">
            <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
          </a-input>
        </a-form-item>

        <a-form-item hasFeedback>
          <a-input
            size="large"
            type="password"
            autocomplete="false"
            :disabled="disabled"
            @blur="onConfirmBlur"
            placeholder="确认密码 / 123456"
            v-decorator="['pwd',{rules: [{ required: true, message: '请确认该账号密码' }, { validator: checkPassword }]}]">
            <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
          </a-input>
        </a-form-item>
      </a-form>
    </a-modal>
  </a-card>
</template>
<script>
import { addUser, getUsers, delUser, editUser, resetpwd } from '@/api/pm';

export default {
  name: 'Users',
  components: { STable: () => import('@/components/table/') },
  data() {
    return {
      isRefresh: true,
      confirmDirty: false,
      loadData: params => this.getUsers(params),
      form: this.$form.createForm(this, { name: 'addUser' }),
      modal: { id: 0, enable: false, title: '新增用户', realname: '', username: '' },
      columns:[
        { title: '序号', dataIndex: 'id' },
        { title: '用户名', dataIndex: 'realname'},
        { title: '账号', dataIndex: 'username' },
        { title: '状态', dataIndex: 'status', scopedSlots: { customRender: 'status' }},
        { title: '操作', width: 150, dataIndex: 'action', scopedSlots: { customRender: 'action' }},
      ],
    }
  },
  computed: {
    disabled() {
      return !!this.modal.id
    }
  },
  methods: {
    onAdd() {
      this.modal = Object.assign({}, { id: 0, enable: true, title: '新增用户' });
    },

    onOK() {
      if(this.modal.id) {
        this.editUserOpt()
        return;
      }

      this.form.validateFields((err, values) => {
        if (err) {
          return;
        }
        delete(values.pwd)
        addUser(values).then(res => {
          this.form.resetFields();
          this.modal.enable = false;
          this.forceRefresh();
        }).catch(res => console.log('res失败:', res));
      });
    },
    
    editUserOpt() {
      const { id, realname, username } = this.modal;
      const newRealname = this.form.getFieldValue('realname')
      const sucOption = { message: '更改成功', description: `成功更改账号 ${username} 的用户名为 ${newRealname}`};
      const cfgOption = { title: '确定修改?', content: `您确定要将 ${realname} 修改为 ${newRealname}`, okText: '确定', okType: 'danger', cancelText: '不修改',};

      this.confirm(cfgOption, () => editUser({id, realname, newRealname }).then(res => {
        this.modal.enable = false;
        this.$notification.success(sucOption);
        this.forceRefresh();
      }))
    },

    onEdit (data) {
      const { id, realname, username } = data;
      this.modal = Object.assign({}, { id, enable: true, title: '编辑用户', realname, username });
      this.$nextTick(() => this.form.setFieldsValue({ realname, username }));
    },

    onDel({ id, realname}) {
      const sucOption = { message: '成功删除', description: `成功删除项目： ${realname}`};
      const cfgOption = { title: '确定删除?', content: `您确定要删除项目： ${realname}`, okText: '确定', okType: 'danger', cancelText: '不删除',};
      
      this.confirm(cfgOption, () => delUser({id}).then(res => {
          this.$notification.success(sucOption);
          this.forceRefresh();
      }))
    },

    onReset({id, realname}) {
      const sucOption = { message: '成功重置密码', description: `成功将用户 ${realname} 的密码重置`};
      const cfgOption = { title: '重置密码?', content: `您确定要重置 ${realname} 的密码吗？`, okText: '确定', okType: 'danger', cancelText: '算了',};
      
      this.confirm(cfgOption, () =>　 resetpwd({id}).then(res => this.$notification.success(sucOption)) )
    },

    onConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },

    onSearch() {

    },

    onChange() {

    },

    onStatus(checked, e) {
      const id = e.target.id || e.currentTarget.id;
      const username = e.target.value || e.currentTarget.value;
      const sucOption = { message: '更改成功', description: `成功重置用户 ${username} 的状态`};
      const cfgOption = { title: '更改状态?', content: `您确定要更改 ${username} 的状态吗？`, okText: '确定', okType: 'danger', cancelText: '算了',};
      this.confirm(cfgOption, () => {
        editUser({id, status: Number(checked) }).then(res => {
          this.$notification.success(sucOption);
          this.forceRefresh();
        })
      })
    },
    
    confirm(option, okFn, cancelFn=() => {}) {
      this.$confirm({
        ...option, 
        onOk: () =>  okFn(),
        onCancel: () => cancelFn()
      });
    },

    forceRefresh() {
      this.isRefresh = false;
      this.$nextTick(() => this.isRefresh = true )
    },

    getUsers(params) {
      return getUsers(params).then(res => {
        const { records, current, size, total, pages } = res.result;
        return { data: records, pageSize: size, pageNo: current, totalPage: pages, totalCount: total };
      });
    },

    checkpwd(rule, value, callback) {
      if (value && this.confirmDirty) {
        this.form.validateFields(['confirm'], { force: true });
      }
      callback();
    },
    
    checkPassword(rule, value, callback) {
      if (value && value !== this.form.getFieldValue('password')) {
        callback('两次输入的密码不一致');
        return ;
      }
      callback();
    },
  },
}
</script>