<template>
  <div
    v-if="listing.early_checkin"
    class="row items-center q-mb-sm text-weight-bold"
  >
    <div class="text-center" :class="{ 'col-4': !dense }">
      <img src="svg/early_checkin.svg" alt="Early Checkin" />
    </div>
    <div :class="{ 'col-8': !dense, 'q-pl-sm': dense }">Early Check-in</div>
  </div>
  <div v-if="listing.late_checkout" class="row items-center q-mb-sm">
    <div class="text-center" :class="{ 'col-4': !dense }">
      <img src="svg/late_checkout.svg" alt="Late Checkout" />
    </div>
    <div :class="{ 'col-8': !dense, 'q-pl-sm': dense }">Late Check-out</div>
  </div>
  <div v-if="listing.babies" class="row items-center q-mb-sm">
    <div class="text-center" :class="{ 'col-4': !dense }">
      <img src="svg/baby.svg" alt="Baby" />
    </div>
    <div :class="{ 'col-8': !dense, 'q-pl-sm': dense }">Babies included</div>
  </div>
  <div v-if="listing.return_transfer" class="row items-center q-mb-sm">
    <div class="text-center" :class="{ 'col-4': !dense }">
      <img src="svg/transfer.svg" alt="Transfer" />
    </div>
    <div :class="{ 'col-8': !dense, 'q-pl-sm': dense }">No return transfer</div>
  </div>
  <div
    v-if="
      showNone &&
      !listing.early_checkin &&
      !listing.late_checkout &&
      !listing.babies &&
      !listing.return_transfer
    "
    class="row items-center q-mb-md"
  >
    <div class="text-center" :class="{ 'col-4': !dense }">
      <img src="svg/oval.svg" alt="No Opportunity" />
    </div>
    <div :class="{ 'col-8': !dense, 'q-ml-sm': dense }">No Information</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "OpportunitiesListShort",
  props: {
    listing: { type: Object, default: () => ({}) },
    showNone: Boolean,
    dense: Boolean,
  },
});
</script>
