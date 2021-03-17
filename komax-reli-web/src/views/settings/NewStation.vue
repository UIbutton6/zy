<template>
  <!-- <new-station :visible="visible" @toggle="()=> this.visible = !this.visible" /> -->
  <j-modal
    :title="title"
    :visible="visible"
    :confirmLoading="loading"
    :fullscreen="true"
    @ok="onModalOk"
    @cancel="onMadalCancel"
    okText="新增"
    cancelText="关闭">
    <a-spin :spinning="loading">
      <a-form :form="form">
        
      </a-form>
    </a-spin>
  </j-modal>
</template>
<script>
export default {
  name: 'NewStation',
  props: ['visible'],
  data() {
    return {
      loading: false,
      title: '新增换热站',
      form: this.$form.createForm(this, { name: 'addUser' }),
    }
  },
  destroyed() {
    Modal.destroyAll();
  },

  methods: {
    onModalOk() {},
    onMadalCancel() {
      this.$emit('toggle');
    },
  }
}
</script>