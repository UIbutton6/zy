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
        <a-form-item label="pointId" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['pointId']" placeholder="请输入pointId"></a-input>
        </a-form-item>
        <a-form-item label="basisFlow" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['basisFlow']" placeholder="请输入basisFlow" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="computeFlow" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['computeFlow']" placeholder="请输入computeFlow" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="supplyWater" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['supplyWater']" placeholder="请输入supplyWater" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="inWater" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['inWater']" placeholder="请输入inWater" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="actualFlow" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['actualFlow']" placeholder="请输入actualFlow" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="inWaterTemperature" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['inWaterTemperature']" placeholder="请输入inWaterTemperature" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="type" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['type']" placeholder="请输入type" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="createBy" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['createBy']" placeholder="请输入createBy"></a-input>
        </a-form-item>
        <a-form-item label="createTime" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择createTime" v-decorator="['createTime']" :trigger-change="true" style="width: 100%"/>
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
  import JDate from '@/components/jeecg/JDate'  
  
  export default {
    name: "PdaAdjustLogModal",
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
          add: "/reli/pdaAdjustLog/add",
          edit: "/reli/pdaAdjustLog/edit",
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
          this.form.setFieldsValue(pick(this.model,'spdDeviceId','pointId','basisFlow','computeFlow','supplyWater','inWater','actualFlow','inWaterTemperature','type','createBy','createTime','isDelete'))
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
        this.form.setFieldsValue(pick(row,'spdDeviceId','pointId','basisFlow','computeFlow','supplyWater','inWater','actualFlow','inWaterTemperature','type','createBy','createTime','isDelete'))
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