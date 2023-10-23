<template>
  <q-badge
    v-if="listing.category === 'Departure'"
    rounded
    color="departing"
    class="q-py-none"
  >
    <img src="svg/departing.svg" alt="Departing" width="16" />
    <span class="text-caption2"> Departing </span>
  </q-badge>
  <q-badge
    v-else-if="listing.category === 'Arrival'"
    rounded
    color="arriving"
    class="q-py-none"
  >
    <img src="svg/arriving.svg" alt="Arriving" width="16" />
    <span class="text-caption2"> Arriving </span>
  </q-badge>
  <q-badge v-else rounded color="incity" class="q-py-none">
    <img src="svg/oval_city.svg" alt="In City" width="16" />
    <span class="text-caption2"> In City </span>
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
