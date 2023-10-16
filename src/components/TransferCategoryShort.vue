<template>
  <q-badge v-if="listing.category === 'Departure'" rounded color="departing">
    <img src="svg/departing.svg" alt="Departing" width="20" />
    <span> Departing </span>
  </q-badge>
  <q-badge v-else-if="listing.category === 'Arrival'" rounded color="arriving">
    <img src="svg/arriving.svg" alt="Arriving" width="20" />
    <span> Arriving </span>
  </q-badge>
  <q-badge v-else rounded color="incity">
    <img src="svg/oval_city.svg" alt="In City" width="20" />
    <span> In City </span>
  </q-badge>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TransferCategory",
  props: {
    listing: { type: Object, default: () => ({}) },
  },
});
</script>
