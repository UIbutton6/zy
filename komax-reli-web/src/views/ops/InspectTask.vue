<template>
<a-row type="flex" :gutter="16">
    <a-col :md="5" :sm="24">
      <left-tree @onSelect="onTreeSelect" checkable/>
    </a-col>
    <a-col :md="24-5" :sm="24">
      <a-card :loading="cardLoading" :bordered="false" style="height: 100%;">
        <!-- 操作按钮区域 -->
        <div class="table-operator" style="margin-bottom: 20px">
          <a-form :form="form" layout="inline">
            <a-form-item>
              <a-select
                show-search
                placeholder="请选择巡检状态"
                option-filter-prop="children"
                style="width: 200px"
                :filter-option="filterOption"
                @focus="onFocus"
                @blur="onBlur"
                @change="onSelectChange">
                <a-select-option value="jack">全部</a-select-option>
                <a-select-option value="1">正常</a-select-option>
                <a-select-option value="2">异常</a-select-option>
                <a-select-option value="3">待巡检</a-select-option>
                <a-select-option value="4">超期未检</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item><a-range-picker @change="onDateChange" /></a-form-item>
            <a-form-item>
              <a-input-search placeholder="机构/名称" enter-button @search="onSearch" />
            </a-form-item>
            <!-- <a-form-item label="部门选择">
              <j-select-depart v-model="bumen"/>
            </a-form-item> -->
            <a-form-item><a-button @click="onSearch" type="primary" icon="search">查询</a-button></a-form-item>
            <a-form-item><a-button @click="() => this.viewModal=true" type="primary" icon="plus">查看</a-button></a-form-item>
          </a-form>
        </div>

        <s-table
          bordered
          ref="table"
          size="middle"
          rowKey="id"
          :data="loadData"
          :columns="columns"
          :loading="loading"
          @change="onTableChange"/>
          <template #checkStatus="val, item, index">
            {{ val }}-
            <a-tag color="#87d068" v-if="text == 2">正常</a-tag>
            <a-tag color="#ff5500" v-else-if="text == 1">待巡检</a-tag>
            <a-tag color="#FF9800" v-else-if="3">异常</a-tag>
            <a-tag color="#FF9800" v-else>超期未检</a-tag>
          </template>
          <template #action="val, item">
            <a @click="onView(item)">查看详情</a>
          </template>
      </a-card>
    </a-col>

    <a-modal title="巡检详情" destroyOnClose :visible="viewModal" @ok="() => this.onViewOK()" @cancel="() => this.viewModal = false">
     <a-form style="margin-top: 8px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 17 }">
        <a-form-item label="任务名称" hasFeedback>
          永和家园换热站定期巡检
        </a-form-item>
        <a-form-item label="日期">
          2020-08-19
        </a-form-item>
        <a-form-item label="巡检状态">
          正常
        </a-form-item>
        <a-form-item label="巡检人">
          张三
        </a-form-item>
        <a-form-item label="巡检时间">
          2020-08-05 14:35:25
        </a-form-item>
        <a-form-item label="巡检结果">
          <a-tag color="#87d068">正常</a-tag>
          <a-tag color="#ff5500">待巡检</a-tag>
          <a-tag color="#FF9800">#超期未检</a-tag>
        </a-form-item>
        <a-form-item label="备注" hasFeedback>
          入户总管有破损，已修复。入户总管有破损，已修复。入户总管有破损，已修复。入户总管有破损，已修复。入户总管有破损，已修复。入户总管有破损，已修复。入户总管有破损，已修复。
        </a-form-item>
        <a-form-item label="照片">
          <img src="" alt="">
        </a-form-item>
      </a-form>
    </a-modal>
  </a-row>
</template>
<script>
import axios from 'axios';
import { calcuNo } from '@/utils/util';
import { getTaskList, getTaskDetail } from '@/api/ops';
import JSelectDepart from '@/components/jeecgbiz/JSelectDepart'
export default {
  name: 'InspectTask',
  components: { 
    STable: () => import('@/components/table/'),
    LeftTree: () => import('../debugInHand/LeftTree'), 
    JSelectDepart
  },
  data() {
    return {
      bumen:"",
      viewModal: false,
      loading: true,
      cardLoading: false,
      disableModal: false,
      queryParam: { orgCategory: "2" },
      form: this.$form.createForm(this, { name: 'searchTask' }),
      loadData: parameter => this.getTaskList(parameter),
      columns: [
        { title: '任务名称', dataIndex: 'name' },
        { title: '所属机构', dataIndex: 'id' },
        { title: '巡检日期', dataIndex: 'checkTime' },
        { title: '巡检人', dataIndex: 'realname' },
        { title: '巡检状态', scopedSlots: { customRender: 'checkStatus' } },
        { title: '操作', width: 150, scopedSlots: {customRender: 'action'}},
      ],
    }
  },
  methods: {
    onTableChange() {

    },
    onSearch() {
      this.getTaskList(parameter)
    },
    onDateChange() {

    },
    onTreeSelect(e) {
      console.log(e,'onTreeSelect');
      this.queryParam.dppartId = e[0];
      this.$refs.table.refresh()
    },
    onSelectChange() {
      console.log(e,'onSelectChange');
    },
    onFocus() {},
    onBlur() {},
    filterOption() {},
    onView(data){
      const { id, realname, username } = data;
      this.modal = Object.assign({}, { id, enable: true, title: '巡检详情', realname, username });
      this.$nextTick(() => this.form.setFieldsValue({ realname, username }));
    },
    onViewOK() {},
    getTaskList(parameter) {
      return getTaskList({...parameter, ...{ depart: this.queryParam} })
        .then(res => {
          const { records, current, size, total, pages } = res.result;
          return calcuNo({ data: records, pageSize: size, pageNo: current, totalPage: pages, totalCount: total });
        })
    }
  }

}
</script>
<style scoped>
.ant-form-item { margin-bottom:0; }
</style>