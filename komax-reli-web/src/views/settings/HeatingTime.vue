<template>
  <a-card :bordered="false" style="height: 100%; margin: 0 auto">
    <a-form :form="form" @submit="onSubmit" :labelCol="{ span: 8 }" :wrapperCol="{ span: 12 }">
      <a-form-item
        :key="k"
        :required="false"
        :label="`时间点${index+1}`"
        v-for="(k, index) in form.getFieldValue('keys')">
        <a-date-picker 
          @change="onChange"
          placeholder="请设置一个时间点"
          style="width: 60%; margin-right: 8px"
          v-decorator="[ `names[${k}]`, { rules: [ { required: true, message: '请设置一个时间点' } ] } ]" />
          <a-icon
            type="minus-circle-o"
            @click="() => remove(k)"
            class="dynamic-delete-button"
            v-if="form.getFieldValue('keys').length > 1"
            :disabled="form.getFieldValue('keys').length === 1"/>
      </a-form-item>

      <a-form-item :wrapperCol="{ span: 12, offset: 8 }">
        <a-button type="dashed" style="width: 60%" @click="add"> <a-icon type="plus" /> 新增 </a-button>
      </a-form-item>
      
      <a-form-item :wrapperCol="{ span: 12, offset: 8 }">
        <a-button type="primary" html-type="submit"> 提交</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>
<script>
let id = 1;
export default {
  name: 'HeatingTime',
  data() {
    return {
      
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'addNew' });
    this.form.getFieldDecorator('keys', { initialValue: [0], preserve: true });
  },
  methods: {
    onSubmit() {

    },
    onChange() {

    },
    remove(k) {
      const { form } = this;
      // can use data-binding to get
      const keys = form.getFieldValue('keys');
      console.log('key', keys);
      // We need at least one passenger
      if (keys.length === 1) {
        return;
      }

      // can use data-binding to set
      form.setFieldsValue({
        keys: keys.filter(key => key !== k),
      });
    },
    add() {
      const { form } = this;
      // can use data-binding to get
      const keys = form.getFieldValue('keys');
      const nextKeys = keys.concat(id++);
      // can use data-binding to set
      // important! notify form to detect changes
      form.setFieldsValue({
        keys: nextKeys,
      });
    },
  }
}
</script>
<style lang="less" scoped>
  .dynamic-delete-button {
    cursor: pointer;
    position: relative;
    top: 4px;
    font-size: 24px;
    color: #999;
    transition: all 0.3s;
  }
  .dynamic-delete-button:hover {
    color: #777;
  }
  .dynamic-delete-button[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
</style>