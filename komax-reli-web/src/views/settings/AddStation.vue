<template>
  <a-drawer
    width="750px"
    @close="onCancel"
    :visible="visible"
    :confirmLoading="loading">

    <a-tabs default-active-key="tab1" @change="onTabChange">
      <a-tab-pane key="tab1" tab="新增换热站">
        <a-spin :spinning="loading">
          <a-form :form="form" :labelCol="{ span: 6 }" :wrapperCol="{ span: 15 }">
            <a-form-item label="换热站名称" hasFeedback>
              <a-input placeholder="换热站名称" v-decorator="['stationName', {rules: [{ required: true, message: '换热站名称不能为空', min: 2 }]}]" />
            </a-form-item>
            <a-form-item label="所属机构">
              <a-select
                @change="onSelectChange"
                placeholder="请选择所属机构"
                v-decorator="[ 'gender', { rules: [{ required: true, message: 'Please select your gender!' }] } ]"
              >
                <a-select-option value="male">
                  北京大学
                </a-select-option>
                <a-select-option value="female">
                  北京热力集团
                </a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="总供暖面积" hasFeedback>
              <a-input placeholder="总供暖面积" v-decorator="['stationName', {rules: [{ required: true, message: '换热站名称不能为空', min: 2 }]}]" />
            </a-form-item>
            <a-form-item label="建筑基本形式" hasFeedback>
              <a-input placeholder="建筑基本形式" v-decorator="['stationName', {rules: [{ required: true, message: '换热站名称不能为空', min: 2 }]}]" />
            </a-form-item>
            <a-form-item label="工艺图上传">
              <j-image-upload class="avatar-uploader" text="上传" v-model="fileList" ></j-image-upload>
            </a-form-item>
            <a-form-item label="地理位置">
              <a-input placeholder="建筑基本形式" v-decorator="['stationName', {rules: [{ required: true, message: '换热站名称不能为空', min: 2 }]}]" />
            </a-form-item>
            <a-form-item :wrapper-col="{ offset: 6 }">
              <a-button type="primary" html-type="submit">
                提交
              </a-button>
            </a-form-item>
          </a-form>
        </a-spin>
      </a-tab-pane>
      <a-tab-pane key="tab2" tab="换热站设备" force-render>
        <a-card size="small" title="站内设备" style="margin-bottom: 15px">
          <a slot="extra" href="#">添加设备</a>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </a-card>
        <a-card size="small" title="二次官网采集器" style="margin-bottom: 15px">
          <a slot="extra" href="#">添加设备</a>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </a-card>
        <a-card size="small" title="二次官网边缘控制器" style="margin-bottom: 15px">
          <a slot="extra" href="#">添加设备</a>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </a-card>
      </a-tab-pane>
    </a-tabs>

    

  </a-drawer> 
</template>
<script>
  import JImageUpload from '../../components/jeecg/JImageUpload';
export default {
  name: 'AddStation',
  props: ['visible'],
  components: { JImageUpload },
  data() {
    return {
      fileList: [],
      loading: false,
      title: "新增换热站",
      form: this.$form.createForm(this, { name: 'addStation' }),
    }
  },
  methods: {
    onCancel() {
      this.$emit('toggle')
    },
    onTabChange() {

    },
    onSelectChange() {

    },
  }
}
</script>
