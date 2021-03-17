<template>
  <a-row type="flex" :gutter="16">
    <a-col :span="5">
      <left-tree @onSelect="onTreeSelect" checkable/>
    </a-col>
    <a-col :span="14">
      <a-card :bordered="false">
        <a-form :label-col="{ span: 2 }" :wrapper-col="{ span: 22 }">
          <a-form-item label="监测时间">
            <a-range-picker @change="onDateChange" />
          </a-form-item>

          <a-form-item label="运行参数" hasFeedback>
            <div :style="{ borderBottom: '1px solid #E9E9E9' }">
              <a-checkbox :indeterminate="indeterminate" :checked="checkAll" @change="onCheckAllChange">
               全选
              </a-checkbox>
            </div>
            <a-checkbox-group @change="onCheckboxChange" style="margin-top: 10px">
              <a-row>
                <a-col :span="6" v-for="(item, index) in checkOptions" :key="index"> <a-checkbox :value="index">  {{item}} </a-checkbox></a-col>
              </a-row>
            </a-checkbox-group>

          </a-form-item>
        </a-form>
      </a-card>
    </a-col>
    <a-col :span="5">
      <a-card title="设备信息" :bordered="false">
        <a-descriptions>
          <a-descriptions-item label="设备状态" :span="3">
            <a-button type="danger">离线</a-button>
          </a-descriptions-item>
          <a-descriptions-item label="设备编号" :span="3">
            1810000000
          </a-descriptions-item>
          <a-descriptions-item label="设备名称" :span="3">
            Hangzhou, Zhejiang
          </a-descriptions-item>
          <a-descriptions-item label="设备型号" :span="3">
            No. 1810000000
          </a-descriptions-item>
          <a-descriptions-item label="所属机构" :span="3">
            ----
          </a-descriptions-item>
          <a-descriptions-item label="设备地址" :span="3">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </a-descriptions-item>
        </a-descriptions>
      </a-card>
    </a-col>
  </a-row>
</template>
<script>
const checkOptions = ['本地', '远程','变频故障', '工频故障','变频1泵运行','变频2泵运行','工频1泵运行','工频2泵运行','运行电流','循环泵入口压力','循环泵出口压力','循环泵累计运行时间','循环泵入电机温度','补水系统运行状态','水箱液位','水质监测','瞬时热耗','日热单耗','一网供压','一网回压','一网供温','一网回温','二网供压','二网回压','二网供温','二网回温','阀门开度','一次总回压'];
export default {
  name: 'History',
  components: {
    LeftTree: () => import('../debugInHand/LeftTree'), 
  },
  data() {
    return {
      checkeds:[],
      checkAll: false,
      indeterminate: true,
      checkOptions: checkOptions,
    }
  },
  methods: {
    onTreeSelect() {
      
    },
    onDateChange() {},
    onCheckboxChange() {

    },
    onCheckAllChange() {

    }
  },
}
</script>