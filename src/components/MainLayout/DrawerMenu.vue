<template>
  <q-list class="absolute fit column">
    <template v-if="isSmallScreen(q.screen.width)">
      <q-item class="bg-light q-py-md q-mb-md">
        <q-item-section avatar>
          <img src="svg/logo.svg" alt="Logo" class="q-pl-sm" />
        </q-item-section>
        <q-item-section class="text-primary">
          <div>
            <div class="text-h6 welcome-font text-weight-bolder">Welcome</div>
            <div class="header-caption">FOR PARTNERS</div>
          </div>
        </q-item-section>
        <q-space />
        <div class="row items-center">
          <q-btn
            flat
            rounded
            dense
            @click="toggleDrawer"
            class="bg-dark-secondary q-pa-sm"
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

    <template v-for="l in links" :key="l.title">
      <q-space v-if="l.title === 'space'" />
      <q-separator
        v-else-if="l.title === 'separator'"
        class="q-mx-md"
        color="dark-secondary"
      />
      <q-item
        v-else
        clickable
        v-ripple
        class="drawer-item-margin rounded-borders-xs q-pa-none q-mx-md"
        :class="activeLink === l.title ? 'active-item' : 'text-dark'"
      >
        <q-item-section avatar>
          <img
            :src="l.img"
            :alt="l.title"
            :class="{
              'active-svg': activeLink === l.title,
              'q-pl-sm': isSmallScreen(q.screen.width),
            }"
          />
        </q-item-section>
        <q-item-section>{{ l.title }}</q-item-section>
      </q-item>
    </template>
    <q-item v-if="isSmallScreen(q.screen.width)">
      <q-btn
        color="light"
        text-color="text-dark-strong"
        class="full-width rounded-borders-xs"
        unelevated
        no-caps
      >
        <div>Log out</div>
      </q-btn>
    </q-item>
  </q-list>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";
import { isSmallScreen } from "src/utils";
import mobileLinks from "../../data/mobile_drawer_links.json";
import desktopLinks from "../../data/desktop_drawer_links.json";

export default defineComponent({
  name: "DrawerMenu",

  emits: ["toggleDrawer"],

  setup(_, context) {
    const q = useQuasar();
    const activeLink = ref("Scheduled");

    let links;
    if (isSmallScreen(q.screen.width)) {
      links = mobileLinks;
    } else {
      links = desktopLinks;
    }

    return {
      q,
      links,
      activeLink,
      isSmallScreen,
      toggleDrawer() {
        context.emit("toggleDrawer");
      },
    };
  },
});
</script>
