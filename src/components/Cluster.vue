<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="2">
        <v-list lines="one">
          <v-list-subheader>{{ locale.services }}</v-list-subheader>

          <v-list-item v-for="s in cluster.services">
            <v-list-item-title><a :href="s.url">{{ s.name }}</a></v-list-item-title>
            <v-list-item-subtitle>{{ s.desc }}</v-list-item-subtitle>
          </v-list-item>

        </v-list>
        <v-divider horizontal></v-divider>
        <v-list lines="one">
          <v-list-subheader>{{ locale.utils }}</v-list-subheader>

          <v-list-item v-for="s in cluster.utils">
            <v-list-item-title><a :href="s.url">{{ s.name }}</a></v-list-item-title>
            <v-list-item-subtitle>{{ s.desc }}</v-list-item-subtitle>
          </v-list-item>

        </v-list>
        <v-divider horizontal></v-divider>
        <v-list lines="three">
          <v-list-subheader>{{ locale.contacts }}</v-list-subheader>

          <v-list-item v-for="c in cluster.contacts">
            <v-list-item-title>{{ c.title }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ c.name }} <br />
              {{ c.phone }} <br />
              <a :href="`mailto: ${c.mail}`">{{ c.mail }}</a>
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-col>

      <v-col>
        <v-responsive class="align-center text-center">
          <v-img height="300" src="@/assets/logo.svg" />

          <h1 class="text-h2 font-weight-bold">{{ cluster.name }}</h1>

          <div class="py-4" />
        </v-responsive>

        <v-container fluid class="fill-width">
          <v-row dense>
            <v-col v-for="a in apps" cols="4">
              <v-card class="mx-auto">
                <v-card-title>
                  {{ a.name }}
                </v-card-title>
                <v-card-text>
                  {{ a.desc }}
                </v-card-text>
                <v-card-actions>
                  <v-btn variant="flat" color="primary" :href="a.url">
                    {{ locale.open }}
                  </v-btn>
                  <v-btn variant="text" color="blue" :href="a.docs">
                    {{ locale.docs }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>


      <v-col cols="2">
        <v-list lines="one">
          <v-list-subheader>{{ locale.system }}</v-list-subheader>

          <v-list-item v-for="s in cluster.system">
            <v-list-item-title><a :href="s.url">{{ s.name }}</a></v-list-item-title>
            <v-list-item-subtitle>{{ s.desc }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>

        <v-divider horizontal></v-divider>

        <v-list lines="one">
          <v-list-subheader>{{ locale.specs }}</v-list-subheader>

          <v-list-item v-for="s in cluster.specs">
            <v-list-item-title>{{ s.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ s.value }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup>
import { onMounted } from "vue";
import { ref } from 'vue'

const locale = ref({});
const apps = ref([]);
const cluster = ref({
  services: [],
  utils: [],
  specs: [],
  system: [],
  contacts: []
});

onMounted(async () => {
  const res = await fetch("/content/locale.json")
  locale.value = await res.json();
  const res1 = await fetch("/content/apps.json");
  apps.value = await res1.json();
  const res2 = await fetch("/content/cluster.json")
  cluster.value = await res2.json();
});
</script>
