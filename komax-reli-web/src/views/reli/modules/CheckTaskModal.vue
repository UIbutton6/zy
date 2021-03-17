<template>
  <j-modal
    :title="title"
    :width="width"
    :visible="visible"
    :confirmLoading="confirmLoading"
    switchFullscreen
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭">
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">

        <a-form-item label="checkPlanId" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['checkPlanId']" placeholder="请输入checkPlanId"></a-input>
        </a-form-item>
        <a-form-item label="createTime" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择createTime" v-decorator="['createTime']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="checkStatus" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['checkStatus']" placeholder="请输入checkStatus" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="checkTime" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择checkTime" v-decorator="['checkTime']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="remarks" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['remarks']" placeholder="请输入remarks"></a-input>
        </a-form-item>
        <a-form-item label="img" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['img']" placeholder="请输入img"></a-input>
        </a-form-item>
        <a-form-item label="isDelete" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['isDelete']" placeholder="请输入isDelete" style="width: 100%"/>
        </a-form-item>

      </a-form>
    </a-spin>
  </j-modal>
</template>

<script>

  import { httpAction } from '@/api/manage'
  import pick from 'lodash.pick'
  import { validateDuplicateValue } from '@/utils/util'
  import JDate from '@/components/jeecg/JDate'  


  export default {
    name: "CheckTaskModal",
    components: { 
      JDate,
    },
    data () {
      return {
        form: this.$form.createForm(this),
        title:"操作",
        width:800,
        visible: false,
        model: {},
        labelCol: {
          xs: { span: 24 },
          sm: { span: 5 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
        confirmLoading: false,
        validatorRules: {
        },
        url: {
          add: "/reli/checkTask/add",
          edit: "/reli/checkTask/edit",
        }
      }
    },
    created () {
    },
    methods: {
      add () {
        this.edit({});
      },
      edit (record) {
        this.form.resetFields();
        this.model = Object.assign({}, record);
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'checkPlanId','createTime','checkStatus','checkTime','remarks','img','isDelete'))
        })
      },
      close () {
        this.$emit('close');
        this.visible = false;
      },
      handleOk () {
        const that = this;
        // 触发表单验证
        this.form.validateFields((err, values) => {
          if (!err) {
            that.confirmLoading = true;
            let httpurl = '';
            let method = '';
            if(!this.model.id){
              httpurl+=this.url.add;
              method = 'post';
            }else{
              httpurl+=this.url.edit;
               method = 'put';
            }
            let formData = Object.assign(this.model, values);
            console.log("表单提交数据",formData)
            httpAction(httpurl,formData,method).then((res)=>{
              if(res.success){
                that.$message.success(res.message);
                that.$emit('ok');
              }else{
                that.$message.warning(res.message);
              }
            }).finally(() => {
              that.confirmLoading = false;
              that.close();
            })
          }
         
        })
      },
      handleCancel () {
        this.close()
      },
      popupCallback(row){
        this.form.setFieldsValue(pick(row,'checkPlanId','createTime','checkStatus','checkTime','remarks','img','isDelete'))
      },

      
    }
  }
</script>