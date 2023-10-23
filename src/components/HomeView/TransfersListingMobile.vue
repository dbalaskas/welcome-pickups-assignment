<template>
  <q-btn
    flat
    class="full-width bg-white rounded-borders-sm q-mb-sm no-padding"
    @click="openListing"
  >
    <div class="full-width q-py-md q-px-lg text-left">
      <div class="row items-center justify-between q-mb-md">
        <div>
          <transfer-category :listing="listing" />
          <div class="text-h6 text-weight-bold">
            {{ listing.traveler_first_name }} {{ listing.traveler_last_name }}
          </div>
        </div>
        <div>
          <template v-if="listing.traveler_photo">
            <q-avatar class="row items-center" size="38px">
              <img :src="listing.traveler_photo" />
            </q-avatar>
          </template>
          <span v-else class="row bg-light q-pa-md rounded-borders-lg">
            <img :src="'svg/profile.svg'" size="38" />
          </span>
        </div>
      </div>
      <div class="q-mb-md">
        <div class="text-caption2 text-dark text-weight-bold">PROPERTY</div>
        <div class="text-body1">{{ listing.property_title }}</div>
      </div>
      <div class="q-mb-md">
        <div class="text-caption2 text-dark text-weight-bold">ARRIVAL TIME</div>
        <div class="text-body1">{{ getDatetime(listing.datetime) }}</div>
      </div>
      <div class="q-mb-md">
        <div class="text-caption2 text-dark text-weight-bold">FROM</div>
        <div class="text-body1">{{ listing.location_title }}</div>
      </div>
      <div>
        <div class="text-caption2 text-dark text-weight-bold">OPORTUNITIES</div>
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
import TransferCategory from "../TransferCategory.vue";
import OpportunitiesListShort from "../OpportunitiesListShort.vue";

export default defineComponent({
  name: "TransfersListingMobile",
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
