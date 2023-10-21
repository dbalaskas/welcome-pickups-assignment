<template>
  <q-btn
    flat
    class="full-width bg-white rounded-borders-sm q-mb-sm no-padding"
    @click="openListing"
  >
    <div class="full-width q-py-md q-px-lg text-left">
      <div class="row items-center justify-between q-mb-sm">
        <div>
          <transfer-category-short :listing="listing" />
          <div class="text-h6">
            {{ listing.traveler_first_name }} {{ listing.traveler_last_name }}
          </div>
        </div>
        <div>
          <q-avatar>
            <img :src="listing.traveler_photo" />
          </q-avatar>
        </div>
      </div>
      <div class="q-mb-sm">
        <div class="text-caption text-dark">PROPERTY</div>
        <div>{{ listing.property_title }}</div>
      </div>
      <div class="q-mb-sm">
        <div class="text-caption text-dark">ARRIVAL TIME</div>
        <div>{{ getDatetime(listing.datetime) }}</div>
      </div>
      <div class="q-mb-sm">
        <div class="text-caption text-dark">FROM</div>
        <div>{{ listing.location_title }}</div>
      </div>
      <div>
        <div class="text-caption text-dark q-mb-sm">OPORTUNITIES</div>
        <div>
          <opportunities-list-short :listing="listing" show-none />
        </div>
      </div>
    </div>
  </q-btn>
</template>

<script>
import { defineComponent } from "vue";
import { getDatetime } from "../../utils";
import TransferCategoryShort from "../TransferCategoryShort.vue";
import OpportunitiesListShort from "../OpportunitiesListShort.vue";

export default defineComponent({
  name: "TransfersListingMobile",
  components: {
    TransferCategoryShort,
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
