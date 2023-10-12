<template>
  <v-container fluid>
    <v-navigation-drawer :width="340" permanent>
      <v-list lines="one" v-show="props.admin && cluster.services">
        <v-list-subheader>{{ $t("services") }}</v-list-subheader>

        <v-list-item v-for="(s, i) in cluster.services" :key="i">
          <template v-slot:prepend>
            <v-icon v-if="s.icon" :icon="s.icon"></v-icon>
            <v-avatar
              v-if="s.avatar"
              :color="s.avatar.color"
              :image="s.avatar.image"
            >
              <v-icon
                v-if="s.avatar.icon"
                :color="s.avatar.iconColor"
                :icon="s.avatar.icon"
              ></v-icon>
            </v-avatar>
          </template>
          <v-list-item-title
            ><a :href="s.url">{{ s.name }}</a></v-list-item-title
          >
          <v-list-item-subtitle>{{ s.desc }}</v-list-item-subtitle>
        </v-list-item>
      </v-list>
      <v-divider
        horizontal
        v-show="props.admin && cluster.services"
      ></v-divider>
      <v-list lines="one" v-show="props.admin && cluster.utils">
        <v-list-subheader>{{ $t("utils") }}</v-list-subheader>

        <v-list-item v-for="(s, i) in cluster.utils" :key="i">
          <template v-slot:prepend>
            <v-icon v-if="s.icon" :icon="s.icon"></v-icon>
            <v-avatar
              v-if="s.avatar"
              :color="s.avatar.color"
              :image="s.avatar.image"
            >
              <v-icon
                v-if="s.avatar.icon"
                :color="s.avatar.iconColor"
                :icon="s.avatar.icon"
              ></v-icon>
            </v-avatar>
          </template>
          <v-list-item-title
            ><a :href="s.url">{{ s.name }}</a></v-list-item-title
          >
          <v-list-item-subtitle>{{ s.desc }}</v-list-item-subtitle>
        </v-list-item>
      </v-list>
      <v-divider horizontal v-show="props.admin && cluster.utils"></v-divider>
      <v-list lines="three" v-show="cluster.contacts">
        <v-list-subheader>{{ $t("contacts") }}</v-list-subheader>

        <v-list-item v-for="(c, i) in cluster.contacts" :key="i">
          <template v-slot:prepend>
            <v-icon v-if="c.icon" :icon="c.icon"></v-icon>
            <v-avatar
              v-if="c.avatar"
              :color="c.avatar.color"
              :image="c.avatar.image"
            >
              <v-icon
                v-if="c.avatar.icon"
                :color="c.avatar.iconColor"
                :icon="c.avatar.icon"
              ></v-icon>
            </v-avatar>
          </template>
          <v-list-item-title>{{ c.title }}</v-list-item-title>
          <v-list-item-subtitle>
            {{ c.name }} <br />
            {{ c.phone }} <br />
            <a :href="`mailto: ${c.mail}`">{{ c.mail }}</a>
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-row>
      <v-responsive class="align-center text-center">
        <v-img
          v-if="cluster.logo"
          :height="cluster.logo.height"
          :src="cluster.logo.url"
        />
        <v-img v-else height="300" src="@/assets/logo.png" />

        <h1 class="text-h2 font-weight-bold">{{ cluster.name }}</h1>

        <div class="py-4" />
      </v-responsive>

      <v-container fluid class="fill-width" v-show="apps">
        <v-row dense>
          <v-col v-for="(a, i) in apps" :key="i" :cols="6">
            <v-card class="mx-auto">
              <v-card-title>
                {{ a.name }}
              </v-card-title>
              <v-img
                v-if="a.logo"
                cover
                :height="a.logo.height ?? '250'"
                :src="a.logo.url"
              ></v-img>
              <v-card-text>
                {{ a.desc }}
              </v-card-text>
              <v-card-actions>
                <v-btn variant="flat" color="primary" :href="a.url">
                  {{ $t("open") }}
                </v-btn>
                <v-btn variant="text" color="blue" :href="a.docs">
                  {{ $t("docs") }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-row>

    <v-navigation-drawer
      v-if="props.admin"
      location="right"
      permanent
      :width="340"
    >
      <v-list lines="one" v-show="props.admin && cluster.system">
        <v-list-subheader>{{ $t("system") }}</v-list-subheader>

        <v-list-item v-for="(s, i) in cluster.system" :key="i">
          <template v-slot:prepend>
            <v-icon v-if="s.icon" :icon="s.icon"></v-icon>
            <v-avatar
              v-if="s.avatar"
              :color="s.avatar.color"
              :image="s.avatar.image"
            >
              <v-icon
                v-if="s.avatar.icon"
                :color="s.avatar.iconColor"
                :icon="s.avatar.icon"
              ></v-icon>
            </v-avatar>
          </template>
          <v-list-item-title
            ><a :href="s.url">{{ s.name }}</a></v-list-item-title
          >
          <v-list-item-subtitle>{{ s.desc }}</v-list-item-subtitle>
        </v-list-item>
      </v-list>

      <v-divider horizontal v-show="props.admin && cluster.system"></v-divider>

      <v-list lines="one" v-show="props.admin && cluster.specs">
        <v-list-subheader>{{ $t("specs") }}</v-list-subheader>

        <v-list-item v-for="(s, i) in cluster.specs" :key="i">
          <template v-slot:prepend>
            <v-icon v-if="s.icon" :icon="s.icon"></v-icon>
            <v-avatar
              v-if="s.avatar"
              :color="s.avatar.color"
              :image="s.avatar.image"
            >
              <v-icon
                v-if="s.avatar.icon"
                :color="s.avatar.iconColor"
                :icon="s.avatar.icon"
              ></v-icon>
            </v-avatar>
          </template>
          <v-list-item-title>{{ s.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ s.value }}</v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script lang="ts" setup>
import { inject } from "vue";
import type { RuntimeConfiguration } from "@/plugins/runtimeConfiguration";

const props = defineProps({
  admin: Boolean,
});

const rc = inject("runtimeConfiguration") as RuntimeConfiguration;
const apps = rc.apps;
const cluster = rc.cluster;
</script>
