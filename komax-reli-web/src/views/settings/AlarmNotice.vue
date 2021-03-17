<template>
<a-card :loading="cardLoading" :bordered="false" style="height: 100%;">
  <!-- 操作按钮区域 -->
  <div class="table-operator" ref="dropdown" style="margin-bottom: 20px">
    <a-form layout="inline">
      <a-form-item><a-button @click="() => this.modal.enable=true" type="primary" icon="plus">新增报警通知配置</a-button></a-form-item>
      <a-form-item style="top: 3px; float:right"><a-input-search placeholder="请输入报警名称" v-model="keyWord" enter-button @search="onSearch" /></a-form-item>
    </a-form>
  </div>

  <s-table bordered size="middle" rowKey="id" v-if="isRefresh" :data="loadData" :columns="columns">
    <template #type="val, item">
      {{typeArr[Number(item.type)-1]}}
    </template>

    <template #status="val, {id, name}">
      <a-switch :checked="val === 1" :status="val" :id="id" :value="name" @change="onStatus">
        <a-icon slot="checkedChildren" type="check" />
        <a-icon slot="unCheckedChildren" type="close" />
      </a-switch>
    </template>

    <template #action="val, item">
      <a @click="onEdit(item)">编辑</a> | 
      <a @click="onDel(item)">删除</a>
    </template>
  </s-table>


    <a-modal :title="modal.title" destroyOnClose :visible="modal.enable" @ok="onOK" @cancel="() => this.modal.enable = false">
      <a-form style="margin-top: 8px" :form="form" :labelCol="{ span: 8 }" :wrapperCol="{ span: 12 }">
        <a-form-item label="报警通知名称" hasFeedback>
          <a-input placeholder="请输入" v-decorator="['name', {rules: [{ required: true, message: '报警名称不能为空', min: 2 }]}]"/>
        </a-form-item>

        <a-form-item label="接收报警类型">
          <a-select
            @change="onSelectChange"
            placeholder="请选择报警类型"
            v-decorator="[ 'type', { rules: [{ required: true, message: '请选择报警类型' }] } ]">
            <a-select-option v-for="(item, index) in typeArr" :value="index + 1" :key="index">{{item}}</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="接收报警手机号" hasFeedback>
          <a-input placeholder="请输入手机号码" v-decorator="['tel', validator.telephone]"/>
        </a-form-item>
      </a-form>
    </a-modal>
</a-card>
</template>
<script>
const api = {
  add: '/pc/alarm/add/',
  edit: '/pc/alarm/edit',
  list: '/pc/alarm/list/',
  del: '/pc/alarm/delete',
};

import { axios } from '@/utils/request';
export default {
  name: 'EquipmentModel',
  components: { STable: () => import('@/components/table/') },
  data() {
    return {
      keyWord: '',
      isRefresh: true,
      cardLoading: false,
      typeArr: ['站内报警', '二网报警', '户内报警'],
      modal: { id: 0, enable: false, title: '新增报警通知' },
      form: this.$form.createForm(this, { name: 'addHouses' }),
      loadData: params => this.getAlarms(params),
      columns: [
        { title: '报警通知名称', dataIndex: 'name' },
        { title: '接收报警类型', dataIndex: 'type', scopedSlots: { customRender: 'type' }},
        { title: '换热站/二网/小区', dataIndex: 'createTi' },
        { title: '接收报警手机', dataIndex: 'tel' },
        { title: '启用状态', dataIndex: 'status', scopedSlots: { customRender: 'status' } },
        { title: '操作', width: 150, dataIndex: 'action', scopedSlots: { customRender: 'action' }},
      ],
      validator: {
        telephone: {
          rules: [
            { required: true, pattern: /^1[3|4|5|7|8|9][0-9]\d{8}$/, message: '请输入正确的手机号码' },
          ]
        }
      },
    }
  },
  methods: {
    onSearch() {
      this.forceRefresh();
    },
    onEdit({id, name, type, tel}) {
      this.modal = Object.assign({}, this.modal, { title: '修改报警通知设置', enable: true, id,});
      this.$nextTick(() => this.form.setFieldsValue({ name, type, tel }));
    },
    onOK() {
      if(this.modal.id) {
        this.editor();
        return ;
      }

      this.form.validateFields((err, values) => {
        if(err) {
          return ;
        }
        axios({data: values, method: 'post', url: api.add}).then(res => {
          this.forceRefresh();
          this.modal.enable = false;
          this.$notification.success({ message: '新增成功', description: `成功新增报警设置： ${values.name}`})
        });
      })
    },
    onDel({id, name}) {
      const option = { title: '确定删除?', content: `您确定要删除报警设置： ${name}`, okText: '确定', okType: 'danger', cancelText: '不删除',}
      this.confirm(option, () => {
        axios({ params: {id}, method: 'delete', url: api.del}).then(res => {
          this.$notification.success({ message: '成功删除', description: `成功删除报警设置： ${name}`})
          this.forceRefresh();
        });
      })
    },
    onStatus(checked, e) {
      const id = e.target.id || e.currentTarget.id;
      const name = e.target.value || e.currentTarget.value;
      const sucOption = { message: '更改成功', description: `成功重置用户 ${name} 的状态`};
      const cfgOption = { title: '更改状态?', content: `您确定要更改 ${name} 的状态吗？`, okText: '确定', okType: 'danger', cancelText: '算了',};
      this.confirm(cfgOption, () => {
        const option = { data: {id, status: Number(checked)}, method: 'PUT', url: api.edit };
        axios(option).then(res => {
          this.$notification.success(sucOption);
          this.forceRefresh();
        })
      })
    },
    editor() {
      const {id} = this.modal;
      const values = this.form.getFieldsValue();
      const data = {id, ...values }
      axios({data, method: 'PUT', url: api.edit}).then(res => {
        this.forceRefresh();
        this.modal.enable = false;
        this.$notification.success({message: '修改成功', description: '修改成功，数据不可恢复'});
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
    getAlarms(par) {
      const params = { ...par, name: this.keyWord };
      return axios({ params, method: 'get', url: api.list})
        .then(res => {
          const { records, current, size, total, pages } = res.result;
          return { data: records, pageSize: size, pageNo: current, totalPage: pages, totalCount: total };
        });
    },
  }
}
</script>