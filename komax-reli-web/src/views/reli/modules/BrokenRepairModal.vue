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

        <a-form-item label="userId" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['userId', validatorRules.userId]" placeholder="请输入userId"></a-input>
        </a-form-item>
        <a-form-item label="type" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['type']" placeholder="请输入type" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="content" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['content']" placeholder="请输入content"></a-input>
        </a-form-item>
        <a-form-item label="img" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['img']" placeholder="请输入img"></a-input>
        </a-form-item>
        <a-form-item label="contact" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['contact']" placeholder="请输入contact"></a-input>
        </a-form-item>
        <a-form-item label="tel" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['tel']" placeholder="请输入tel"></a-input>
        </a-form-item>
        <a-form-item label="address" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['address']" placeholder="请输入address"></a-input>
        </a-form-item>
        <a-form-item label="createTime" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择createTime" v-decorator="['createTime']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="updateTime" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择updateTime" v-decorator="['updateTime']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="repairUserId" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['repairUserId']" placeholder="请输入repairUserId"></a-input>
        </a-form-item>
        <a-form-item label="repairStyle" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['repairStyle']" placeholder="请输入repairStyle" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="repairContent" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['repairContent']" placeholder="请输入repairContent"></a-input>
        </a-form-item>
        <a-form-item label="repairImg" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['repairImg']" placeholder="请输入repairImg"></a-input>
        </a-form-item>
        <a-form-item label="status" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['status']" placeholder="请输入status" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="departId" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['departId']" placeholder="请输入departId"></a-input>
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
    name: "BrokenRepairModal",
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
          userId: {
            rules: [
              { required: true, message: '请输入userId!'},
            ]
          },
        },
        url: {
          add: "/reli/brokenRepair/add",
          edit: "/reli/brokenRepair/edit",
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
          this.form.setFieldsValue(pick(this.model,'userId','type','content','img','contact','tel','address','createTime','updateTime','repairUserId','repairStyle','repairContent','repairImg','status','departId','isDelete'))
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
        this.form.setFieldsValue(pick(row,'userId','type','content','img','contact','tel','address','createTime','updateTime','repairUserId','repairStyle','repairContent','repairImg','status','departId','isDelete'))
      },

      
    }
  }
</script>