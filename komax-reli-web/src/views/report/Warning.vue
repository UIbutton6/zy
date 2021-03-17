<template>
  <a-card :bordered="false">
    <a-tabs default-active-key="1" tab-position="left">
      <a-tab-pane key="1" tab="换热站报警">
        <warning-station></warning-station>
      </a-tab-pane>
      <a-tab-pane key="2" tab="二网报警">
        <warning-net></warning-net>
      </a-tab-pane>
      <a-tab-pane key="3" tab="户内报警">
        <warning-house/>
      </a-tab-pane>
    </a-tabs>
  </a-card>  
</template>
<script>
import WarningHouse from './WarningHouse.vue'
import WarningStation from './WarningStation.vue'
export default {
  name: 'Warning',
  components: {
    WarningNet: () => import('./WarningNet'),
    WarningHouse: () => import('./WarningHouse'),
    WarningStation: () => import('./WarningStation'),
  },
  data() {
    return {

    }
  },
}
</script>