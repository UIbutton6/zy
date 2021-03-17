<template>
<a-row type="flex" :gutter="16">
    <a-col :md="5" :sm="24">
      <left-tree @onSelect="onTreeSelect" checkable/>
    </a-col>
    <a-col :md="24-5" :sm="24">
      <a-card :loading="cardLoading" :bordered="false" style="height: 100%;">
        <!-- 操作按钮区域 -->
        <div class="table-operator" ref="dropdown">
          <a-form layout="inline" style="margin-bottom: 20px">
            <a-form-item><a-button @click="() => this.disableModal=true" type="primary" icon="plus">新增计划</a-button></a-form-item>
            <a-form-item style="top: 3px; float:right"><a-input-search placeholder="巡检计划名称" enter-button @search="onSearch" /></a-form-item>
          </a-form>
        </div>

        <s-table
          bordered
          ref="table"
          size="middle"
          rowKey="userId"
          :data="loadData"
          :columns="columns"
          :loading="loading"
          @change="onTableChange"/>
          <span slot="status" slot-scope="text, record">
            <a-switch default-checked :value="text" @change="onChange" />
          </span>
          <span slot="action" slot-scope="text, record">
            <a @click="edit">编辑</a>
            <a @click="del">删除</a>
          </span>
      </a-card>
    </a-col>

    <a-modal title="新增巡检计划" destroyOnClose :visible="disableModal" @ok="() => this.onOK()" @cancel="() => this.disableModal = false">
      <a-form style="margin-top: 8px" :form="form" :labelCol="{ span: 5 }" :wrapperCol="{ span: 15 }">
        <a-form-item label="巡检计划名称" hasFeedback>
          <a-input placeholder="请输入" v-decorator="['departName', {rules: [{ required: true, message: '请输入至少两个字符的规则描述！', min: 2 }]}]"/>
        </a-form-item>

        <a-form-item label="所属机构">
          <a-select
            @change="onSelectChange"
            placeholder="请选择所属机构"
            v-decorator="[ 'gender', { rules: [{ required: true, message: 'Please select your gender!' }] } ]"
          >
            <a-select-option value="male">北京大学</a-select-option>
            <a-select-option value="female">北京热力集团</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="巡检周期">
          <a-select
            @change="onSelectChange"
            placeholder="请选择巡检周期"
            v-decorator="[ 'gender', { rules: [{ required: true, message: 'Please select your gender!' }] } ]"
          >
            <a-select-option value="male">日巡</a-select-option>
            <a-select-option value="female">周巡</a-select-option>
            <a-select-option value="femalea">月巡</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="巡检人">
          <a-select
            @change="onSelectChange"
            placeholder="请选择巡检人"
            v-decorator="[ 'gender', { rules: [{ required: true, message: 'Please select your gender!' }] } ]"
          >
            <a-select-option value="male">日巡</a-select-option>
            <a-select-option value="female">周巡</a-select-option>
            <a-select-option value="femalea">月巡</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="备注" hasFeedback>
          <a-textarea :rows="5" placeholder="..." v-decorator="['description', {}]" />
          <input type="hidden" v-decorator="['id', {}]"/>
        </a-form-item>
      </a-form>
    </a-modal>
  </a-row>
</template>
<script>

import axios from 'axios';
import { calcuNo } from '@/utils/util';
import { getPlanList, getPlanDetail } from '@/api/ops';
export default {
  name: 'InspectPlan',
  components: {
    STable: ()=> import('@/components/table/'),
    LeftTree: () => import('../debugInHand/LeftTree'),
    UserModal: () => import('../system/modules/UserModal'),
  },
  data() {
    return {
      loading: true,
      cardLoading: false,
      disableModal: false,
      form: this.$form.createForm(this, { name: 'addOps' }),
      loadData: parameter => this.getPlanList(parameter),//params => new Promise(function(resolve, reject) {}),
      columns: [
        { title: '名称', dataIndex: 'No' },
        { title: '所属机构', dataIndex: 'departName'},
        { title: '巡检周期', dataIndex: 'createTi' },
        { title: '巡检日期', dataIndex: 'creaTime' },
        { title: '巡检人', dataIndex: 'creTime' },
        { title: '创建时间', dataIndex: 'crteTime' },
        { title: '备注', dataIndex: 'creTaaaaime' },
        { title: '状态', dataIndex: 'status', scopedSlots: { customRender: 'status' }},
        { title: '操作', width: 150, dataIndex: 'action', scopedSlots: { customRender: 'action' }},
      ],
    }
  },
  methods: {
    onOK() {},
    onTableChange() {

    },
    onSearch() {

    },
    onTreeSelect() {},
    onSelectChange() {},
    onEdit(e) {
      console.log(e,'onEdit');
    },
    onDel(e) {
      console.log(e,'onDel');
    },
    getPlanList(parameter) {
      return getPlanList({...parameter, ...{ depart: this.queryParam} })
        .then(res => {
          const { records, current, size, total, pages } = res.result;
          return calcuNo({ data: records, pageSize: size, pageNo: current, totalPage: pages, totalCount: total });
        })
    }
  }

}
</script>