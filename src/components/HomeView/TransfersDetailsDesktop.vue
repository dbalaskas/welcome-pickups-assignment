<template>
  <q-dialog ref="dialogRef" :transition-show="transition">
    <div
      class="row fit justify-between items-center"
      style="max-width: initial !important"
    >
      <q-btn
        rounded
        dense
        color="white"
        class="q-mr-lg q-pa-sm"
        @click="onPrevListing"
        :disable="prevDisabled"
      >
        <img src="svg/arrow_left.svg" alt="Previous" />
      </q-btn>
      <q-card class="dialog-container">
        <q-card-section class="row full-height">
          <div class="col-4 q-pa-lg border-r">
            <div class="q-mb-md text-center">
              <q-avatar size="70px">
                <img :src="details.traveler_photo" />
              </q-avatar>
            </div>
            <div
              class="text-h6 text-weight-bold text-center"
              :title="
                details.traveler_first_name + ' ' + details.traveler_last_name
              "
            >
              {{ details.traveler_first_name }}<br />
              {{ details.traveler_last_name }}
            </div>
            <q-separator class="q-my-lg" />
            <div class="q-gutter-md q-mt-md">
              <div>
                <div class="text-dark" :title="details.traveler.phone_number">
                  Phone Number
                </div>
                <div>
                  {{ getPhoneNumber(details.traveler.phone_number) }}
                </div>
              </div>
              <div>
                <div class="text-dark">Email</div>
                <div class="ellipsis" :title="details.traveler.email">
                  {{ details.traveler.email }}
                </div>
              </div>
              <div>
                <div class="text-dark">Coming from</div>
                <div :title="details.traveler.country">
                  {{ details.traveler.country }}
                </div>
              </div>
              <div>
                <div class="text-dark q-mb-sm">Opportunities</div>
                <div>
                  <opportunities-list dense :listing="details" show-none />
                </div>
              </div>
            </div>
          </div>
          <div class="col-8 q-pa-lg">
            <div class="text-h5 text-weight-bold q-mb-md">Transfers</div>
            <div class="bg-light-secondary rounded-borders q-pa-lg">
              <div class="q-gutter-md no-margin">
                <span class="text-h6 text-weight-bold q-pb-xs border-secondary">
                  {{ getDateShort(new Date(details.datetime)) }}
                  <!-- <q-separator color="secondary" size="3px" class="q-mx-xs" /> -->
                </span>
                <div class="row items-center details-bar-width justify-between">
                  <div class="q-px-sm column">
                    <q-icon name="radio_button_unchecked" color="secondary" />
                    <img
                      src="svg/arrow_dotted.svg"
                      alt="Arrow"
                      class="q-py-sm"
                    />
                    <q-icon name="radio_button_unchecked" color="secondary" />
                  </div>
                  <div>
                    <div class="row justify-between q-mb-md">
                      <div>
                        <div
                          class="text-body1"
                          :title="details.from_location_title"
                        >
                          {{ details.from_location_title }}
                        </div>
                        <div
                          class="text-caption text-dark address-width ellipsis"
                          :title="details.from_location_address"
                        >
                          {{ details.from_location_address }}
                        </div>
                      </div>
                      <div class="text-body2 text-dark q-mr-sm">
                        {{ getTime(new Date(details.from_datetime)) }}
                      </div>
                    </div>
                    <div class="row justify-between">
                      <div>
                        <div
                          class="text-body2"
                          :title="details.to_location_title"
                        >
                          {{ details.to_location_title }}
                        </div>
                        <div
                          class="text-caption text-dark address-width ellipsis"
                          :title="details.to_location_address"
                        >
                          {{ details.to_location_address }}
                        </div>
                      </div>
                      <div class="text-body2 text-dark q-mr-sm">
                        {{ getTime(new Date(details.to_datetime)) }}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="details-bar-width bg-dark-secondary text-dark rounded-borders-lg q-px-md q-py-sm"
                >
                  <div class="row q-gutter-md items-center">
                    <span>
                      <q-icon name="group" size="20px" />
                      <span class="text-body2 q-ml-sm">
                        {{ details.passengers }}
                      </span>
                    </span>
                    <span>
                      <q-icon name="work" size="20px" />
                      <span class="text-body2 q-ml-sm">
                        {{ details.babyseats }}
                      </span>
                    </span>
                    <span>
                      <q-icon name="business_center" size="20px" />
                      <span class="text-body2 q-ml-sm">
                        {{ details.luggage }}
                      </span>
                    </span>
                    <span>
                      <q-icon name="airline_seat_recline_extra" size="20px" />
                      <span class="text-body2 q-ml-sm">
                        {{ details.hand_luggage }}
                      </span>
                    </span>
                  </div>
                </div>
                <div
                  class="details-bar-width bg-dark-secondary text-dark rounded-borders-lg q-px-md q-py-sm"
                >
                  <div
                    v-if="details.flight_status"
                    class="row justify-around items-center"
                  >
                    <q-icon name="flight_takeoff" size="20px" />
                    <span class="text-body2 q-px-sm">
                      {{ details.flight_status.flight_number }}
                    </span>
                    <q-separator vertical class="q-mx-sm" />
                    <q-icon name="schedule" size="20px" />
                    <span class="text-body2 q-px-sm">
                      {{ details.flight_status.flight_time }}
                    </span>
                    <q-separator vertical class="q-mx-sm" />
                    <span class="text-body2 text-secondary q-px-sm">
                      {{ details.flight_status.flight_status }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <q-btn
            flat
            rounded
            dense
            @click="onDialogHide"
            class="bg-light-secondary absolute-top-right q-ma-lg q-pa-sm"
          >
            <img src="svg/close.svg" alt="Close" />
          </q-btn>
        </q-card-section>
      </q-card>
      <q-btn
        rounded
        dense
        color="white"
        class="q-ml-lg q-pa-sm"
        @click="onNextListing"
        :disable="nextDisabled"
      >
        <img src="svg/arrow_right.svg" alt="Next" />
      </q-btn>
    </div>
  </q-dialog>
</template>

<script>
import { defineComponent } from "vue";
import { useDialogPluginComponent } from "quasar";
import { getDateShort, getTime, getPhoneNumber } from "src/utils";
import OpportunitiesList from "../OpportunitiesList.vue";

export default defineComponent({
  name: "TransferDetails",
  components: {
    OpportunitiesList,
  },
  props: {
    details: { type: Object, default: () => ({}) },
    transition: { type: String, default: "" },
    nextDisabled: { type: Boolean, default: false },
    prevDisabled: { type: Boolean, default: false },
  },
  emits: [...useDialogPluginComponent.emits],

  setup() {
    const { dialogRef, onDialogHide, onDialogOK } = useDialogPluginComponent();

    return {
      dialogRef,
      onDialogHide,
      getDateShort,
      getTime,
      getPhoneNumber,
      onPrevListing() {
        // context.emit("onPrevListing");
        onDialogOK(false);
      },
      onNextListing() {
        // context.emit("onNextListing");
        onDialogOK(true);
      },
    };
  },
});
</script>
