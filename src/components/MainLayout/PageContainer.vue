<template>
  <q-page-container>
    <q-page
      class="bg-light"
      :class="isSmallScreen(q.screen.width) ? 'q-pa-md' : 'q-pa-lg'"
    >
      <!-- <div class="q-pa-lg bg-light"> -->
      <router-view />
      <!-- </div> -->
    </q-page>
  </q-page-container>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import { isSmallScreen } from "../../utils";

export default defineComponent({
  name: "PageContainer",
  setup() {
    const q = useQuasar();
    return {
      q,
      isSmallScreen,
    };
  },
});
</script>
