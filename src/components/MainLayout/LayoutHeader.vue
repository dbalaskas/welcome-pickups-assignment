<template>
  <q-header class="bg-white" elevated>
    <q-toolbar class="header-height no-padding">
      <template v-if="isSmallScreen(q.screen.width)">
        <q-btn flat rounded @click="toggleDrawer">
          <img src="svg/expand.svg" alt="Expand" />
        </q-btn>
        <q-space />
        <div class="text-body1 text-weight-bold text-primary">
          Transfer List
        </div>
        <q-space />
        <q-btn flat rounded disable>
          <img src="svg/search.svg" alt="Search" />
        </q-btn>
      </template>

      <template v-else>
        <q-space />
        <q-btn flat rounded disable>
          <img src="svg/profile.svg" alt="Profile" />
        </q-btn>
        <q-btn flat rounded disable class="q-mr-md">
          <img src="svg/power_off.svg" alt="Power off" />
        </q-btn>
      </template>
    </q-toolbar>
  </q-header>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import { isSmallScreen } from "../../utils";

export default defineComponent({
  name: "LayoutHeader",

  emits: ["toggleDrawer"],

  setup(_, context) {
    const q = useQuasar();

    return {
      q,
      isSmallScreen,
      toggleDrawer() {
        context.emit("toggleDrawer");
      },
    };
  },
});
</script>
