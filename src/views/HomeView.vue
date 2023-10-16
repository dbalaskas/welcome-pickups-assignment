<template>
  <template v-if="q.screen.lt.md">
    <template v-for="(r, index) in transfers" :key="r.id">
      <div
        v-if="isDifferentDate(r.datetime)"
        class="bg-dark-secondary q-py-xs q-px-sm q-mt-lg q-mb-md rounded-borders row items-center"
      >
        <img src="svg/calendar_small.svg" alt="Calendar" />
        <span class="q-ml-xs">{{ getDate(new Date(r.datetime)) }}</span>
      </div>
      <transfers-listing-mobile
        :listing="r"
        @open-listing="openListing(index)"
      />
    </template>
  </template>
  <template v-else>
    <transfers-list-header-desktop />
    <div v-for="(r, index) in transfers" :key="r.id">
      <div v-if="isDifferentDate(r.datetime)" class="q-mb-md">
        {{ getDate(new Date(r.datetime)) }}
      </div>
      <transfers-listing-desktop
        :listing="r"
        @open-listing="openListing(index)"
      />
    </div>
  </template>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import transfers from "../data/transfers_list.json";
import details from "../data/transfers_details.json";
import { getDate, compareDatetimes, areSameDate } from "../utils";
import TransfersListingDesktop from "../components/HomeView/TransfersListingDesktop.vue";
import TransfersListingMobile from "../components/HomeView/TransfersListingMobile.vue";
import TransfersListHeaderDesktop from "../components/HomeView/TransfersListHeaderDesktop.vue";
import TransfersDetailsDesktop from "../components/HomeView/TransfersDetailsDesktop.vue";
import TransfersDetailsMobile from "../components/HomeView/TransfersDetailsMobile.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    TransfersListingDesktop,
    TransfersListingMobile,
    TransfersListHeaderDesktop,
  },

  setup() {
    const q = useQuasar();
    let today = new Date();
    transfers.sort(
      (a, b) => -compareDatetimes(new Date(a.datetime), new Date(b.datetime))
    );

    function openListing(index, transition) {
      q.dialog({
        component: q.screen.lt.md
          ? TransfersDetailsMobile
          : TransfersDetailsDesktop,
        componentProps: {
          details: { ...transfers[index], ...details[index] },
          prevDisabled: index === 0,
          nextDisabled: index === transfers.length - 1,
          transition,
        },
      })
        .onOk((getNext) => {
          if (getNext) {
            openListing(index + 1, "slide-left");
          } else {
            openListing(index - 1, "slide-right");
          }
        })
        .onCancel(() => {});
    }

    return {
      q,
      transfers,
      getDate,
      isDifferentDate(date) {
        const newDate = new Date(date);
        if (!areSameDate(today, newDate)) {
          today = newDate;
          return true;
        }
        return false;
      },
      openListing,
    };
  },
});
</script>
