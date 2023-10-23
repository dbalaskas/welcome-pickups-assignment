<template>
  <q-drawer
    v-model="drawerExpanded"
    :breakpoint="600"
    :mini-width="82"
    :mini="miniState"
    class="rounded-borders shadow"
  >
    <template v-if="isSmallScreen(q.screen.width)">
      <q-item class="bg-light q-py-md q-mb-md">
        <q-item-section avatar>
          <img src="svg/logo.svg" alt="Logo" class="q-pl-sm" />
        </q-item-section>
        <q-item-section class="text-primary">
          <div>
            <div class="text-h6 welcome-font text-weight-bold">Welcome</div>
            <div class="header-caption">FOR PARTNERS</div>
          </div>
        </q-item-section>
        <q-space />
        <div class="row items-center">
          <q-btn
            flat
            rounded
            dense
            @click="drawerExpanded = false"
            class="bg-dark-third q-pa-sm"
          >
            <img src="svg/close.svg" alt="Close" />
          </q-btn>
        </div>
      </q-item>
    </template>
    <template v-else>
      <q-item class="drawer-logo-margin">
        <q-item-section avatar>
          <img src="svg/logo.svg" alt="Logo" />
        </q-item-section>
      </q-item>
    </template>
    <drawer-menu />
  </q-drawer>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useQuasar } from "quasar";
import { isSmallScreen } from "../../utils";
import DrawerMenu from "./DrawerMenu.vue";

export default defineComponent({
  name: "LeftDrawer",

  components: {
    DrawerMenu,
  },

  props: {
    expanded: { type: Boolean, default: false },
  },

  emits: ["toggleDrawer"],

  setup(props, context) {
    const q = useQuasar();
    const drawerExpanded = computed({
      get() {
        return props.expanded;
      },
      set(_) {
        context.emit("toggleDrawer");
      },
    });

    return {
      q,
      isSmallScreen,
      drawerExpanded,
      miniState: ref(true),

      onHome() {
        $r.push("/");
      },
    };
  },
});
</script>
