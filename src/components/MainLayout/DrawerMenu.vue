<template>
  <q-list class="absolute fit column">
    <template v-if="isSmallScreen(q.screen.width)">
      <q-item class="drawer-logo-margin row bg-light q-py-md">
        <q-item-section avatar>
          <img src="svg/logo.svg" alt="Logo" class="q-pl-sm" />
        </q-item-section>
        <q-item-section class="text-primary welcome-font">
          <div class="text-h6 text-weight-bolder">Welcome</div>
          <div class="text-caption text-weight-bold">FOR PARTNERS</div>
        </q-item-section>
        <q-space />
        <q-btn flat rounded @click="toggleDrawer" class="bg-dark-secondary">
          <img src="svg/close.svg" alt="Close" />
        </q-btn>
      </q-item>
    </template>
    <template v-else>
      <q-item class="drawer-logo-margin">
        <q-item-section avatar>
          <img src="svg/logo.svg" alt="Logo" />
        </q-item-section>
      </q-item>
    </template>

    <template v-for="{ title, img } in links" :key="title">
      <q-space v-if="title === 'space'" />
      <q-separator v-else-if="title === 'separator'" class="q-ma-sm" />
      <q-item
        v-else
        clickable
        v-ripple
        class="drawer-item-margin rounded-borders q-pa-none q-mx-md"
        :class="{ 'active-item': activeLink === title }"
      >
        <q-item-section avatar>
          <img
            :src="img"
            :alt="title"
            :class="{
              'active-svg': activeLink === title,
              'q-pl-sm': isSmallScreen(q.screen.width),
            }"
          />
        </q-item-section>
        <q-item-section>{{ title }}</q-item-section>
      </q-item>
    </template>
  </q-list>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";
import { isSmallScreen } from "src/utils";

const links = [
  {
    title: "Live View",
    img: "svg/live.svg",
  },
  {
    title: "Scheduled",
    img: "svg/scheduled.svg",
  },
  {
    title: "Statistics",
    img: "svg/statistics.svg",
  },
  {
    title: "Revenue",
    img: "svg/revenue.svg",
  },
  {
    title: "Settings",
    img: "svg/settings.svg",
  },
  {
    title: "space",
  },
  {
    title: "separator",
  },
  {
    title: "Support",
    img: "svg/support.svg",
  },
  {
    title: "Collapse Menu",
    img: "svg/collapse.svg",
  },
];

export default defineComponent({
  name: "DrawerMenu",

  emits: ["toggleDrawer"],

  setup(_, context) {
    const q = useQuasar();
    const activeLink = ref("Scheduled");
    return {
      q,
      activeLink,
      links,
      isSmallScreen,
      toggleDrawer() {
        context.emit("toggleDrawer");
      },
    };
  },
});
</script>
