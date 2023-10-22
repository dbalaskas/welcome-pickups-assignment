<template>
  <q-dialog
    ref="dialogRef"
    transition-show="slide-up"
    transition-hide="slide-down"
    position="bottom"
    maximized
  >
    <q-card class="dialog-container-mobile">
      <q-card-section class="full-height q-pa-none">
        <div class="row justify-between items-center bg-light q-pa-md">
          <span class="text-dark">
            {{ details.traveler_first_name }}'s trip
          </span>
          <q-btn
            flat
            rounded
            dense
            @click="onDialogCancel"
            class="bg-dark-secondary"
          >
            <img src="svg/close.svg" alt="Close" />
          </q-btn>
        </div>
        <div class="q-pa-md">
          <div>
            <div class="row text-h6 text-weight-bold q-mb-lg">
              <span class="text-h6 text-weight-bold q-pb-xs border-secondary">
                {{ getDateShort(new Date(details.datetime)) }}
                <!-- <q-separator color="secondary" size="2px" class="q-mx-xs" /> -->
              </span>
            </div>
            <div>
              <div class="row items-center q-mb-sm">
                <div class="column q-px-md">
                  <q-icon name="radio_button_unchecked" color="secondary" />
                  <img src="svg/arrow_dotted.svg" alt="Arrow" class="q-py-sm" />
                  <q-icon name="radio_button_unchecked" color="secondary" />
                </div>
                <div>
                  <div class="row justify-between q-mb-sm">
                    <div>
                      <div class="text-body1 text-weight-bold">
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
                      <div class="text-body2 text-weight-bold">
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
                class="row items-center text-dark bordered rounded-borders-lg q-mb-sm q-px-md q-py-sm"
              >
                <span class="q-mr-md">
                  <q-icon name="group" size="20px" />
                  <span class="text-body2 q-ml-sm">
                    {{ details.passengers }}
                  </span>
                </span>
                <span class="q-mx-md">
                  <q-icon name="work" size="20px" />
                  <span class="text-body2 q-ml-sm">
                    {{ details.babyseats }}
                  </span>
                </span>
                <span class="q-mx-md">
                  <q-icon name="business_center" size="20px" />
                  <span class="text-body2 q-ml-sm">
                    {{ details.luggage }}
                  </span>
                </span>
                <span class="q-mx-md">
                  <q-icon name="airline_seat_recline_extra" size="20px" />
                  <span class="text-body2 q-ml-sm">
                    {{ details.hand_luggage }}
                  </span>
                </span>
                <q-space />
                <q-btn flat rounded dense>
                  <q-icon name="expand_more" size="20px" />
                </q-btn>
              </div>
              <div
                v-if="details.flight_status"
                class="row items-center text-dark bordered rounded-borders-lg q-mb-sm q-px-md q-py-sm"
              >
                <q-icon name="flight_takeoff" size="20px" class="q-pr-sm" />
                <span class="text-body2 text-weight-medium q-pr-sm">
                  {{ details.flight_status.flight_number }}
                </span>
                <q-separator vertical class="q-mx-sm" />
                <q-icon name="schedule" size="20px" class="q-px-sm" />
                <span class="text-body2 text-weight-medium q-pr-sm">
                  {{ details.flight_status.flight_time }}
                </span>
                <q-separator vertical class="q-mx-sm" />
                <span
                  class="text-body2 text-secondary text-weight-medium q-px-sm"
                >
                  {{ details.flight_status.flight_status }}
                </span>
              </div>
            </div>
          </div>
          <q-separator class="q-my-md" />
          <div>
            <div>
              <div class="text-h5 text-weight-bold q-mb-md">Your Guest</div>
              <div class="full-width row items-center">
                <div class="col-4 text-center">
                  <q-avatar>
                    <img :src="details.traveler_photo" />
                  </q-avatar>
                </div>
                <div class="col-8">
                  <div class="text-weight-bolder">
                    {{ details.traveler_first_name }}
                    {{ details.traveler_last_name }}
                  </div>
                  <div class="text-dark">
                    {{ getPhoneNumber(details.traveler.phone_number) }}
                  </div>
                  <div class="text-dark">
                    From {{ details.traveler.country }}
                  </div>
                </div>
              </div>
              <q-separator class="q-my-md" />
              <div class="row">
                <div class="text-body1 text-dark offset-4 col-8 q-mb-sm">
                  Opportunities
                </div>
              </div>
              <opportunities-list :listing="details" show-none />
              <div class="row q-col-gutter-sm justify-evenly q-mt-md">
                <div class="col-6">
                  <q-btn
                    color="dark-secondary"
                    text-color="text-dark-strong"
                    class="full-width rounded-borders-xs"
                    unelevated
                    no-caps
                  >
                    <div>Call</div>
                  </q-btn>
                </div>
                <div class="col-6">
                  <q-btn
                    color="dark-secondary"
                    text-color="text-dark-strong"
                    class="full-width rounded-borders-xs"
                    unelevated
                    no-caps
                  >
                    <div>Message</div>
                  </q-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
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
    const { dialogRef, onDialogCancel, onDialogOK } =
      useDialogPluginComponent();

    return {
      dialogRef,
      onDialogCancel,
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
