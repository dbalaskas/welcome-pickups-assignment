<template>
  <img
    v-if="listing.category === 'Departure'"
    src="svg/departing.svg"
    alt="Departing"
    size="38"
  />
  <img
    v-else-if="listing.category === 'Arrival'"
    src="svg/arriving.svg"
    alt="Arriving"
    size="38"
  />
  <img v-else src="svg/oval_city.svg" alt="In City" size="38" />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TransferCategoryShort",
  props: {
    listing: { type: Object, default: () => ({}) },
  },
});
</script>
