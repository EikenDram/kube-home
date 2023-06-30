<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <v-icon icon="mdi-cloud" />

      {{ locale.app }}
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup>
import { onMounted } from "vue";
import { ref } from 'vue'

const locale = ref({});

onMounted(async () => {
  const res = await fetch("/content/locale.json")
  locale.value = await res.json();
});
</script>
