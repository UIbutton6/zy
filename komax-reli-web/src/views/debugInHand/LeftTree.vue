<template>
  <a-card :bordered="false" style="height: 100%;">
    
      <a-input-search style="width:100%; margin-top: 5px; margin-bottom: 15px" placeholder="输入机构名称查询..." v-model="keyWord"/>
      <a-spin :spinning="loading">
        <a-tree
          showLine
          class="atree"
          :treeData="data"
          @expand="onExpand"
          @select="onSelect"
          :checkable="checkable"
          :selectedKeys="selectedKeys"
          :expandedKeys.sync="expandedKeys"
          :autoExpandParent="autoExpandParent"/>

      </a-spin>
  </a-card>
</template>

<script>
const api = {
  search: '/sys/sysDepart/searchBy',
  departs: '/sys/sysDepart/queryTreeList',
}
import * as _ from 'lodash';
import { axios } from '@/utils/request';
import { treeData } from '@/test/debugData';

export default {
  name: 'LeftTree',
  props: { checkable: { type: Boolean, default: false } },
  data() {
    return {
        data: [],
        keyWord: '',
        loading: true,
        expandedKeys: [],
        selectedKeys: [],
        autoExpandParent: true,
    }
  },
  created() {
    this.getTreeData();
    this.cardLoading = false;
  },
  watch: {
    keyWord(newValue, oldValue) {
      if( newValue === oldValue ) {
        return ;
      }
      _.debounce(this.searchBy, 500)();
    }
  },
  methods: {
    queryTreeData(keyword) {
      this.data = treeData.result;
    },
    searchBy() {
      this.loading = true;
      axios({params: {keyWord: this.keyWord}, method: 'get', url: api.search}).then(res => {
        this.data = res.result;
        this.loading = false;
      })
    },
    onSelect(item) {
      this.$emit('onSelect', item)
      console.log('select: ', item);
    },
    onExpand(expandedKeys) {
      console.log(expandedKeys);
    },
    getTreeData() {
      axios({method: 'get', url: api.departs}).then(res => {
        this.data = res.result;
        this.loading = false;
      });
    },
  }
}
</script>

<style scoped>
.atree {
  overflow: auto;
  max-height: 200px;
}
</style>