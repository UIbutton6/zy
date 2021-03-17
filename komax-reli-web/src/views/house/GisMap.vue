<template>
  <gis-map-heat/>
</template>
<script>
export default {
  name: 'GisMap',
  components: {
    GisMapHeat: () => import('../heat/GisMap')
  }
}
</script>