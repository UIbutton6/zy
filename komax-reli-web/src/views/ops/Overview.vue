<template>
<div>
  <a-row :gutter="16" type="flex" justify="space-between">
    <a-col :md="24-5" :sm="24">
      <a-form style="margin-top: 8px" :labelCol="{ span: 3 }" :wrapperCol="{ span: 5 }">
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
        <a-form-item label="所属机构">
              <j-select-depart v-model="queryParam.departId" @onSelect="handleOK"/>
            </a-form-item>
      </a-form>
    </a-col>
  </a-row>
  <a-row :gutter="16" type="flex" justify="space-between">
    <a-col :span="4">
      <a-card title="运维人员" :bordered="false">
        <p><b>{{data1}}</b> 个</p>
      </a-card>
    </a-col>
    <a-col :span="4">
      <a-card title="本月应巡检" :bordered="false">
        <p><b>{{data2}}</b> m2</p>
      </a-card>
    </a-col>
    <a-col :span="4">
      <a-card title="本月已巡检" :bordered="false">
        <p><b>{{data3}}</b> GJ</p>
      </a-card>
    </a-col>
    <a-col :span="4">
      <a-card title="本月未按时巡检" :bordered="false">
        <p><b>{{data4}}</b> GJ</p>
      </a-card>
    </a-col>

    <a-col :span="4">
      <a-card title="本月已处理工单" :bordered="false">
        <p><b>{{data4}}</b> GJ</p>
      </a-card>
    </a-col>

    <a-col :span="4">
      <a-card title="本月未处理工单" :bordered="false">
        <p><b>{{data4}}</b> GJ</p>
      </a-card>
    </a-col>
  </a-row>

  <a-row :gutter="16" type="flex" justify="space-between" style="margin-top: 20px;">
    <a-col :span="12">
      <a-card title="巡检执行情况" :bordered="false">
        <div id="chart1"></div>
      </a-card>
    </a-col>
    <a-col :span="12">
      <a-card title="处理工单情况" :bordered="false">
        <div id="chart2"></div>
      </a-card>
    </a-col>
  </a-row>
  
</div>
</template>

<script>
import gsap from 'gsap';
import axios from 'axios';
import { Column } from '@antv/g2plot';
import { getCheckSum, getCheckTask, getCheckRepair } from '@/api/ops';
import { stackedData, tbData, olumnData } from '@/test/debugData';
import { Bar } from '@antv/g2plot';
import { Line } from '@antv/g2plot';
import { log } from '@antv/g2plot/lib/utils';
import JSelectDepart from '@/components/jeecgbiz/JSelectDepart'

export default {
  name: 'Overview',
  components: { 
    JSelectDepart
  },
  data() {
    return {
      queryParam:{departId:''},
      taskData:"",
      repairData:"",

      data1: 903,
      data2: 10439.88,
      data3: 1521,
      data4: 1205,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getCheckSum()
      this.chart1();
      this.chart2();
    });
  },
  methods: {
    handleOK(e){
      console.log(e);
    },
    getCheckSum(parameter) {
      return getCheckSum({...parameter, ...{ depart: this.queryParam} })
        .then(res => {
          // const { records, current, size, total, pages } = res.result;
          // return calcuNo({ data: records, pageSize: size, pageNo: current, totalPage: pages, totalCount: total });
        })
    },
    getCheckTask(parameter) {
      return getCheckTask({...parameter, ...{ depart: this.queryParam} })
        .then(res => {
          // const { records, current, size, total, pages } = res.result;
          // return calcuNo({ data: records, pageSize: size, pageNo: current, totalPage: pages, totalCount: total });
        })
    },
    getCheckRepair(parameter) {
      return getCheckRepair({...parameter, ...{ depart: this.queryParam} })
        .then(res => {
          // const { records, current, size, total, pages } = res.result;
          // return calcuNo({ data: records, pageSize: size, pageNo: current, totalPage: pages, totalCount: total });
        })
    },
    chart1() {

      const options = { data: this.getCheckTask(), isGroup: true, xField: 'xField', yField: 'yField', seriesField: 'name' };
      const plot = new Column('chart1', {
        ...options,
        label: {
          position: 'middle', // 'top', 'middle', 'bottom'
          layout: [
            { type: 'adjust-color' },
            { type: 'interval-hide-overlap' },
            { type: 'interval-adjust-position' },
          ],
        },
      });
      plot.render();
    },

    chart2() {
      const options = { data: olumnData,  xField: 'type', yField: 'sales' };
      const columnPlot = new Column('chart2', {
        ...options,
        label: {
          position: 'middle', // 'top', 'bottom', 'middle',
          // 配置样式
          style: {
            fill: '#FFFFFF',
            opacity: 0.6,
          },
        },
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
        meta: {
          type: {
            alias: '类别',
          },
          sales: {
            alias: '处理工单数',
          },
        },
      });

      columnPlot.render();
    },
    onSelectChange(e){
      debugger;
      console.log(e);
    }
  }
}
</script>

<style lang="less" scoped>
b {
  font-size: 24px;
}
</style>