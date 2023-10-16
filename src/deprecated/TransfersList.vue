<template>
  <template v-if="q.screen.lt.md">
    <template v-for="r in rows" :key="r.id">
      <div v-if="isDifferentDate(r.datetime)" class="q-my-md">
        {{ getDate(new Date(r.datetime)) }}
      </div>
      <transfers-listing-mobile :listing="r" />
    </template>
  </template>
  <template v-else>
    <transfers-list-header-desktop />
    <div v-for="r in rows" :key="r.id">
      <div v-if="isDifferentDate(r.datetime)" class="q-mb-md">
        {{ getDate(new Date(r.datetime)) }}
      </div>
      <transfers-listing-desktop :listing="r" />
    </div>
  </template>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import rows from "../../data/transfers_list.json";
import { getDate, compareDatetimes, areSameDate } from "../../utils";
import TransfersListingDesktop from "./TransfersListingDesktop.vue";
import TransfersListingMobile from "./TransfersListingMobile.vue";
import TransfersListHeaderDesktop from "./TransfersListHeaderDesktop.vue";

export default defineComponent({
  name: "TransfersList",
  components: {
    TransfersListingDesktop,
    TransfersListingMobile,
    TransfersListHeaderDesktop,
  },

  setup() {
    const q = useQuasar();
    let today = new Date();
    rows.sort(
      (a, b) => -compareDatetimes(new Date(a.datetime), new Date(b.datetime))
    );

    return {
      q,
      rows,
      getDate,
      isDifferentDate(date) {
        const newDate = new Date(date);
        if (!areSameDate(today, newDate)) {
          today = newDate;
          return true;
        }
        return false;
      },
    };
  },
});
</script>
