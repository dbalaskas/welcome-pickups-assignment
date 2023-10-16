<template>
  <q-drawer
    v-model="drawerExpanded"
    :breakpoint="600"
    :mini-width="82"
    :mini="miniState"
    elevated
    class="rounded-borders"
  >
    <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
      <drawer-menu @toggle-drawer="drawerExpanded = false" />
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
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
    const drawerExpanded = computed({
      get() {
        return props.expanded;
      },
      set(_) {
        context.emit("toggleDrawer");
      },
    });

    return {
      drawerExpanded,
      miniState: ref(true),

      onHome() {
        $r.push("/");
      },
    };
  },
});
</script>
