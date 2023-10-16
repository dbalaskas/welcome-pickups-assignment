<template>
  <q-layout view="lHh Lpr lFf">
    <layout-header @toggle-drawer="toggleDrawer" />
    <left-drawer :expanded="drawerExpanded" @toggle-drawer="toggleDrawer" />
    <page-container />
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
import { isSmallScreen } from "../utils";
import LayoutHeader from "../components/MainLayout/LayoutHeader.vue";
import LeftDrawer from "../components/MainLayout/LeftDrawer.vue";
import PageContainer from "../components/MainLayout/PageContainer.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    LayoutHeader,
    LeftDrawer,
    PageContainer,
  },
  setup() {
    const q = useQuasar();
    const drawerExpanded = ref(!isSmallScreen(q.screen.width));
    return {
      drawerExpanded,
      toggleDrawer() {
        drawerExpanded.value = !drawerExpanded.value;
      },
    };
  },
});
</script>
