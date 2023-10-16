<template>
  <q-page-container>
    <q-page class="q-pa-lg bg-light">
      <!-- <div class="q-pa-lg bg-light"> -->
      <router-view />
      <!-- </div> -->
    </q-page>
  </q-page-container>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageContainer",
});
</script>
