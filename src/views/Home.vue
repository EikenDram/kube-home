<template>
  <Cluster :admin="props.admin" />
</template>

<script lang="ts" setup>
import Cluster from '@/components/Cluster.vue'
const props = defineProps({
  admin: Boolean
})
</script>
