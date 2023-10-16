<template>
  <img
    v-if="listing.early_checkin"
    src="svg/early_checkin.svg"
    alt="Early Checkin"
    class="q-mr-md"
  />
  <img
    v-if="listing.late_checkout"
    src="svg/late_checkout.svg"
    alt="Late Checkout"
    class="q-mr-md"
  />
  <img v-if="listing.babies" src="svg/baby.svg" alt="Baby" class="q-mr-md" />
  <img
    v-if="listing.return_transfer"
    src="svg/transfer.svg"
    alt="Transfer"
    class="q-mr-md"
  />
  <img
    v-if="
      showNone &&
      !listing.early_checkin &&
      !listing.late_checkout &&
      !listing.babies &&
      !listing.return_transfer
    "
    src="svg/oval.svg"
    alt="No Opportunity"
    class="q-mr-md"
  />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "OpportunitiesListShort",
  props: {
    listing: { type: Object, default: () => ({}) },
    showNone: { type: Boolean, default: false },
  },
});
</script>
