<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="2">
        <v-list lines="one">
          <v-list-subheader>{{ locale.services }}</v-list-subheader>

          <v-list-item v-for="s in cluster.services">
            <template v-slot:prepend>
              <v-icon v-if="s.icon" :icon="s.icon"></v-icon>
              <v-avatar v-if="s.avatar" :color="s.avatar.color" :image="s.avatar.image">
                <v-icon v-if="s.avatar.icon" :color="s.avatar.icon.color" :icon="s.avatar.icon.icon"></v-icon>
              </v-avatar>
            </template>
            <v-list-item-title><a :href="s.url">{{ s.name }}</a></v-list-item-title>
            <v-list-item-subtitle>{{ s.desc }}</v-list-item-subtitle>
          </v-list-item>

        </v-list>
        <v-divider horizontal></v-divider>
        <v-list lines="one">
          <v-list-subheader>{{ locale.utils }}</v-list-subheader>

          <v-list-item v-for="s in cluster.utils">
            <template v-slot:prepend>
              <v-icon v-if="s.icon" :icon="s.icon"></v-icon>
              <v-avatar v-if="s.avatar" :color="s.avatar.color" :image="s.avatar.image">
                <v-icon v-if="s.avatar.icon" :color="s.avatar.icon.color" :icon="s.avatar.icon.icon"></v-icon>
              </v-avatar>
            </template>
            <v-list-item-title><a :href="s.url">{{ s.name }}</a></v-list-item-title>
            <v-list-item-subtitle>{{ s.desc }}</v-list-item-subtitle>
          </v-list-item>

        </v-list>
        <v-divider horizontal></v-divider>
        <v-list lines="three">
          <v-list-subheader>{{ locale.contacts }}</v-list-subheader>

          <v-list-item v-for="c in cluster.contacts">
            <template v-slot:prepend>
              <v-icon v-if="c.icon" :icon="c.icon"></v-icon>
              <v-avatar v-if="c.avatar" :color="c.avatar.color" :image="c.avatar.image">
                <v-icon v-if="c.avatar.icon" :color="c.avatar.icon.color" :icon="c.avatar.icon.icon"></v-icon>
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
      </v-col>

      <v-col>
        <v-responsive class="align-center text-center">
          <v-img v-if="logo.url" :height="logo.height" :src="logo.url" />
          <v-img v-else height="300" src="@/assets/logo.svg" />

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
                <v-img v-if="a.image" cover :height="a.image.height ?? '250'" :src="a.image.src"></v-img>
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


      <v-col cols="3">
        <v-list lines="one">
          <v-list-subheader>{{ locale.system }}</v-list-subheader>

          <v-list-item v-for="s in cluster.system">
            <template v-slot:prepend>
              <v-icon v-if="s.icon" :icon="s.icon"></v-icon>
              <v-avatar v-if="s.avatar" :color="s.avatar.color" :image="s.avatar.image">
                <v-icon v-if="s.avatar.icon" :color="s.avatar.icon.color" :icon="s.avatar.icon.icon"></v-icon>
              </v-avatar>
            </template>
            <v-list-item-title><a :href="s.url">{{ s.name }}</a></v-list-item-title>
            <v-list-item-subtitle>{{ s.desc }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>

        <v-divider horizontal></v-divider>

        <v-list lines="one">
          <v-list-subheader>{{ locale.specs }}</v-list-subheader>

          <v-list-item v-for="s in cluster.specs">
            <template v-slot:prepend>
              <v-icon v-if="s.icon" :icon="s.icon"></v-icon>
              <v-avatar v-if="s.avatar" :color="s.avatar.color" :image="s.avatar.image">
                <v-icon v-if="s.avatar.icon" :color="s.avatar.icon.color" :icon="s.avatar.icon.icon"></v-icon>
              </v-avatar>
            </template>
            <v-list-item-title>{{ s.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ s.value }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

  </v-container>
</template>

<script lang="ts" setup>
  //
</script>
