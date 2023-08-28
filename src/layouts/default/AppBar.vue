<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <v-icon class="ml-2 mr-2" icon="fa-solid fa-cubes" />

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
