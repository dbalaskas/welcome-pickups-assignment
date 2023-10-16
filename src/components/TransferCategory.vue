<template>
  <img
    v-if="listing.category === 'Departure'"
    src="svg/departing.svg"
    alt="Departing"
  />
  <img
    v-else-if="listing.category === 'Arrival'"
    src="svg/arriving.svg"
    alt="Arriving"
  />
  <img v-else src="svg/oval_city.svg" alt="In City" />
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
