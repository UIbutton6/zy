<template>
  <a-card :bordered="false">
    <!-- 操作按钮区域 -->
    <div class="table-operator" ref="dropdown">
      <a-form layout="inline">
        <a-form-item><a-button @click="() => this.disableModal=true" type="primary" icon="plus">新增</a-button></a-form-item>
        <a-form-item style="top: 3px; float:right"><a-input-search placeholder="请输入项目名称" enter-button @search="onSearch" /></a-form-item>
      </a-form>
    </div>

    <s-table
      ref="table"
      size="default"
      v-if="isRefresh"
      :data="loadData"
      :columns="columns"
      @onSelect="onChange">
      
      <template #action="val, item">
        <a @click="onEdit(item)">编辑</a>
        <a-divider type="vertical" />
        <a-dropdown>
          <a class="ant-dropdown-link"> 更多 <a-icon type="down" /></a>
          <a-menu slot="overlay">
            <a-menu-item><a @click="onResetPWD(item)">重置密码</a></a-menu-item>
            <a-menu-item><a href="javascript:;">一键登录</a></a-menu-item>
            <a-menu-item><a @click="onDel(item)">删除</a></a-menu-item>
          </a-menu>
        </a-dropdown>
      </template>
    </s-table>

    <a-modal title="新增项目" destroyOnClose :visible="disableModal" @ok="() => this.onOK()" @cancel="() => this.disableModal = false">
      <a-form style="margin-top: 8px" :form="form">
        <a-form-item :labelCol="{ span: 5 }" :wrapperCol="{ span: 15 }" label="项目名称" hasFeedback>
          <a-input placeholder="请输入" v-decorator="['departName', {rules: [{ required: true, message: '请输入至少两个字符的规则描述！', min: 2 }]}]"/>
        </a-form-item>

        <a-form-item label="描述" hasFeedback help="请填写一段描述" :labelCol="{xs: {span: 24}, sm: {span: 5}}" :wrapperCol="{xs: {span: 24}, sm: {span: 15}}">
          <a-textarea :rows="5" placeholder="..." v-decorator="['description', {}]" />
          <input type="hidden" v-decorator="['id', {}]"/>
        </a-form-item>
      </a-form>
    </a-modal>

  </a-card>
</template>

<script>
import axios from 'axios'
import { calcuNo } from '@/utils/util';
import { getProjects, addOrEditPM, delPM, resetPMpwd } from '@/api/pm';

export default {
  name: 'Projects',
  components: { 
    STable: () => import('@/components/table/')
  },
  data() {
    return {
      isRefresh: true,
      disableModal: false,
      queryParam: { departIds: "2" },
      form: this.$form.createForm(this, { name: 'addPM' }),
      
      columns:[
        { title: '序号', dataIndex: 'No' },
        { title: '项目名称', dataIndex: 'departName'},
        { title: '创建时间', dataIndex: 'createTime', sorter: true },
        { title: '备注', dataIndex: 'description'},
        { title: '操作', width: 150, dataIndex: 'action', scopedSlots: { customRender: 'action' }},
      ],

      loadData: parameter => this.getProjects(parameter),
    }
  },

  computed: {
    
  },

  methods: {
    onOK () {
      this.form.validateFields((err, values) => {
        if (err) {
          return;
        }

        addOrEditPM(Object.assign(values, {orgCategory: 2})).then(res => {
          if(res.success) {
            this.form.resetFields();
            this.disableModal = false;
            this.forceRefresh();
          }
        })
      })
    },
    
    onEdit (data) {
      this.disableModal = true;
      const {id, departName, description } = data
      this.$nextTick(() => this.form.setFieldsValue({id, departName, description}));
    },

    onDel ({id, departName}) {
      const option = { title: '确定删除?', content: `您确定要删除项目： ${departName}`, okText: '确定', okType: 'danger', cancelText: '不删除',}

      this.confirm(option, () => {
        delPM({id}).then( res => {
          this.$notification.success({ message: '成功删除', description: `成功删除项目： ${departName}`})
          this.forceRefresh();
        })
      })
    },
    
    onResetPWD ({id, departName}) {
      const option = { title: '确定重置密码?', content: `您确定要将项目 ${departName} 的密码重置`, okText: '确定', okType: 'danger', cancelText: '算了',}
      
      this.confirm(option, () => {
        resetPMpwd({departId: id}).then( res => {
          this.$notification.success({ message: '成功重置密码', description: `成功将项目 ${departName} 的密码重置`})
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

    onChange () {
      console.log('change');
    },
    
    onSearch () {

    },

    forceRefresh() {
      this.isRefresh = false;
      this.$nextTick(() => this.isRefresh = true )
    },

    getProjects(parameter) {
      return getProjects({...parameter, ...{ depart: this.queryParam} })
        .then(res => {
          const { records, current, size, total, pages } = res.result;
          return calcuNo({ data: records, pageSize: size, pageNo: current, totalPage: pages, totalCount: total });
        })
    }
  }
}
</script>