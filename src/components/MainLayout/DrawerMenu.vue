<template>
  <q-list>
    <template v-for="l in links" :key="l.title">
      <q-space v-if="l.title === 'space'" />
      <q-separator v-else-if="l.title === 'separator'" class="q-mx-md" />
      <q-item
        v-else
        clickable
        v-ripple
        class="drawer-item-margin rounded-borders-sm q-pa-none q-mx-md"
        :class="activeLink === l.title ? 'bg-secondary' : 'text-dark'"
      >
        <q-item-section avatar>
          <img
            :src="l.img"
            :alt="l.title"
            :class="{
              'active-svg': activeLink === l.title,
            }"
            size="25"
          />
        </q-item-section>
        <q-item-section>
          <span class="q-pr-sm">
            {{ l.title }}
          </span>
        </q-item-section>
      </q-item>
    </template>
    <div v-if="isSmallScreen(q.screen.width)" class="absolute-bottom q-ma-md">
      <q-btn
        color="light"
        text-color="text-dark-strong"
        class="full-width rounded-borders-xxs"
        unelevated
        no-caps
      >
        <div>Log out</div>
      </q-btn>
    </div>
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
    };
  },
});
</script>
