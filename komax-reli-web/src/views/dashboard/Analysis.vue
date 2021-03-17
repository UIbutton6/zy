<template>
  <a-row type="flex" :gutter="16">
    <a-col :md="5" :sm="24">
      <left-tree @onSelect="onSelect"/>
    </a-col>
    <a-col :md="24-5" :sm="24">
      <a-card :loading="cardLoading" :bordered="false" style="height: 100%;">

        <a-tabs>
          <a-tab-pane key="1" tab="能耗统计">
            <Energy/>
          </a-tab-pane>
          <a-tab-pane key="2" tab="历史记录">
            <History/>
          </a-tab-pane>
          <a-tab-pane key="3" tab="报警记录">
            <Warn/>
          </a-tab-pane>
          <a-button slot="tabBarExtraContent">
            Extra Action
          </a-button>
        </a-tabs>

      </a-card>
    </a-col>
  </a-row>
</template>

<script>
  import { LeftTree } from '../debugInHand'
  import { Warn, Energy, History } from './report'
  export default {
    name: "Analysis",
    components: { LeftTree, Energy, History, Warn },
    data() {
      return {
        selectData: '',
        cardLoading: false,
      }
    },
    created() {

    },
    methods: {
      onSelect(v) {
        this.selectData = v;
      },
    }
  }
</script>