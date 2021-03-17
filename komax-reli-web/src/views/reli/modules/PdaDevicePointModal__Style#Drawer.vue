<template>
  <a-drawer
    :title="title"
    :width="width"
    placement="right"
    :closable="false"
    @close="close"
    :visible="visible">
  
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">

        <a-form-item label="spdDeviceId" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['spdDeviceId']" placeholder="请输入spdDeviceId"></a-input>
        </a-form-item>
        <a-form-item label="parameterId" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['parameterId']" placeholder="请输入parameterId"></a-input>
        </a-form-item>
        <a-form-item label="orignValue" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['orignValue']" placeholder="请输入orignValue" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="createTime" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['createTime']" placeholder="请输入createTime" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="updateValue" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['updateValue']" placeholder="请输入updateValue" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="updateTime" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['updateTime']" placeholder="请输入updateTime" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="name" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['name']" placeholder="请输入name"></a-input>
        </a-form-item>
        <a-form-item label="point" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['point']" placeholder="请输入point" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="isDelete" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['isDelete']" placeholder="请输入isDelete" style="width: 100%"/>
        </a-form-item>
        
      </a-form>
    </a-spin>
    <a-button type="primary" @click="handleOk">确定</a-button>
    <a-button type="primary" @click="handleCancel">取消</a-button>
  </a-drawer>
</template>

<script>

  import { httpAction } from '@/api/manage'
  import pick from 'lodash.pick'
  import { validateDuplicateValue } from '@/utils/util'
  
  export default {
    name: "PdaDevicePointModal",
    components: { 
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
          add: "/reli/pdaDevicePoint/add",
          edit: "/reli/pdaDevicePoint/edit",
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
          this.form.setFieldsValue(pick(this.model,'spdDeviceId','parameterId','orignValue','createTime','updateValue','updateTime','name','point','isDelete'))
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
        this.form.setFieldsValue(pick(row,'spdDeviceId','parameterId','orignValue','createTime','updateValue','updateTime','name','point','isDelete'))
      }
      
    }
  }
</script>

<style lang="less" scoped>
/** Button按钮间距 */
  .ant-btn {
    margin-left: 30px;
    margin-bottom: 30px;
    float: right;
  }
</style>