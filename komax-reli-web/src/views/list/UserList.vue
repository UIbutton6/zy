<template>
  <a-card :bordered="false">
    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="() => this.disableModal=true" type="primary" icon="plus">新增用户</a-button>
    </div>

    <s-table
      ref="table"
      size="default"
      :data="loadData"
      :columns="columns"
      @onSelect="onChange">
      
      <span slot="action" slot-scope="text, record">
        <a @click="handleEdit(record)">编辑</a>
        <a-divider type="vertical" />
        <a-dropdown>
          <a class="ant-dropdown-link"> 更多 <a-icon type="down" /> </a>
          <a-menu slot="overlay">
            <a-menu-item><a href="javascript:;">详情</a></a-menu-item>
            <a-menu-item><a href="javascript:;">禁用</a></a-menu-item>
            <a-menu-item><a href="javascript:;">删除</a></a-menu-item>
          </a-menu>
        </a-dropdown>
      </span>
    </s-table>

    <a-modal title="新增项目" destroyOnClose :visible="disableModal" @ok="onOk" @cancel="() => this.disableModal = false">
      <a-form style="margin-top: 8px" :form="form">
        <a-form-item :labelCol="{ span: 5 }" :wrapperCol="{ span: 15 }" label="项目名称" v-decorator="description" :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入至少五个字符的规则描述！', min: 5 }]}">
          <a-input placeholder="请输入" />
        </a-form-item>

        <a-form-item
          label="描述"
          hasFeedback
          help="请填写一段描述"
          :labelCol="{xs: {span: 24}, sm: {span: 5}}"
          :wrapperCol="{xs: {span: 24}, sm: {span: 15}}">
          <a-textarea :rows="5" placeholder="..." id="description"/>
        </a-form-item>
      </a-form>
    </a-modal>

  </a-card>
</template>

<script>
import STable from '@/components/table/'

export default {
  name: 'Projects',
  components: { STable },
  data() {
    return {
      columns:[
        { title: '序号', dataIndex: 'no' },
        { title: '项目名称', dataIndex: 'departName'},
        { title: '创建时间', dataIndex: 'createTime', sorter: true },
        { title: '备注', dataIndex: 'description'},
        { title: '操作', dataIndex: 'action', scopedSlots: { customRender: 'action' }},
      ],
      description: {},
      disableModal: false,
      form: this.$form.createForm(this, { name: 'addPM' }),

      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        return new Promise(function(resolve, reject) {

        })
      },
    }
  },
  created() {},
  methods: {
    onOk () {
      console.log('hhh');
    },
    onChange () {
      console.log('change');
    }
  }
}
</script>

<style scoped>

</style>