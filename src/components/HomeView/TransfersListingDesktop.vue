<template>
  <q-btn
    flat
    class="full-width bg-white rounded-borders-sm q-px-sm q-py-xs q-mb-sm"
    @click="openListing"
  >
    <div class="row no-wrap full-width">
      <div class="row items-center justify-center transfers-width-sm">
        <transfer-category :listing="listing" />
      </div>
      <div class="row items-center transfers-width-lg">
        <q-avatar class="row items-center" size="35px">
          <img :src="listing.traveler_photo" />
        </q-avatar>
        <span
          class="text-no-transform ellipsis q-pl-md"
          :title="
            listing.traveler_first_name + ' ' + listing.traveler_last_name
          "
        >
          {{ listing.traveler_first_name }} {{ listing.traveler_last_name }}
        </span>
      </div>
      <div class="row items-center transfers-width-lg">
        <span
          class="text-no-transform ellipsis"
          :title="getDatetime(listing.datetime)"
        >
          {{ getDatetime(listing.datetime) }}
        </span>
      </div>
      <div class="row items-center transfers-width-lg">
        <span
          class="text-no-transform ellipsis"
          :title="listing.location_title"
        >
          {{ listing.location_title }}</span
        >
      </div>
      <div class="row items-center transfers-width-md">
        <opportunities-list-short :listing="listing" show-none />
      </div>
    </div>
  </q-btn>
</template>

<script>
import { defineComponent } from "vue";
import { getDatetime } from "../../utils";
import TransferCategory from "../TransferCategory.vue";
import OpportunitiesListShort from "../OpportunitiesListShort.vue";

export default defineComponent({
  name: "TransfersListingDesktop",
  components: {
    TransferCategory,
    OpportunitiesListShort,
  },
  props: {
    listing: { type: Object, default: () => ({}) },
  },
  emits: ["openListing"],

  setup(_, context) {
    return {
      getDatetime,
      openListing() {
        context.emit("openListing");
      },
    };
  },
});
</script>
