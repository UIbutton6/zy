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

        <a-form-item label="hotStationId" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['hotStationId']" placeholder="请输入hotStationId"></a-input>
        </a-form-item>
        <a-form-item label="name" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['name']" placeholder="请输入name"></a-input>
        </a-form-item>
        <a-form-item label="deviceNo" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['deviceNo']" placeholder="请输入deviceNo"></a-input>
        </a-form-item>
        <a-form-item label="deviceVersion" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['deviceVersion']" placeholder="请输入deviceVersion"></a-input>
        </a-form-item>
        <a-form-item label="address" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['address']" placeholder="请输入address"></a-input>
        </a-form-item>
        <a-form-item label="x" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['x']" placeholder="请输入x" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="y" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['y']" placeholder="请输入y" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="type" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['type']" placeholder="请输入type" style="width: 100%"/>
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


  export default {
    name: "DeviceModal",
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
          add: "/reli/device/add",
          edit: "/reli/device/edit",
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
          this.form.setFieldsValue(pick(this.model,'hotStationId','name','deviceNo','deviceVersion','address','x','y','type','isDelete'))
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
        this.form.setFieldsValue(pick(row,'hotStationId','name','deviceNo','deviceVersion','address','x','y','type','isDelete'))
      },

      
    }
  }
</script>