<template>
  <template v-if="isSmallScreen(q.screen.width)">
    <template v-for="(r, index) in transfers" :key="r.id">
      <div
        v-if="isDifferentDate(r.datetime)"
        class="bg-dark-secondary text-dark text-weight-bold q-py-sm q-px-sm q-mb-sm rounded-borders-md row items-center"
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
  <div v-else class="q-pa-sm">
    <div class="text-h5 text-weight-bold q-mb-lg">Tranfers</div>
    <transfers-list-header-desktop />
    <div
      v-for="(r, index) in transfers.slice(
        transfersPerPage * (activePage - 1),
        transfersPerPage * activePage
      )"
      :key="r.id"
    >
      <div
        v-if="isDifferentDate(r.datetime)"
        class="q-mb-sm text-caption text-dark text-weight-bold"
      >
        {{ getDate(new Date(r.datetime)) }}
      </div>
      <transfers-listing-desktop
        :listing="r"
        @open-listing="openListing(index)"
      />
    </div>
    <div class="row justify-center items-center q-mt-md">
      <transfers-pagination
        :active-page="activePage"
        :pages-num="pagesNum"
        @change-page="changePage"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
import transfers from "../data/transfers_list.json";
import details from "../data/transfers_details.json";
import {
  getDate,
  compareDatetimes,
  areSameDate,
  isSmallScreen,
} from "../utils";
import TransfersListingDesktop from "../components/HomeView/TransfersListingDesktop.vue";
import TransfersListingMobile from "../components/HomeView/TransfersListingMobile.vue";
import TransfersListHeaderDesktop from "../components/HomeView/TransfersListHeaderDesktop.vue";
import TransfersDetailsDesktop from "../components/HomeView/TransfersDetailsDesktop.vue";
import TransfersDetailsMobile from "../components/HomeView/TransfersDetailsMobile.vue";
import TransfersPagination from "src/components/HomeView/TransfersPagination.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    TransfersListingDesktop,
    TransfersListingMobile,
    TransfersListHeaderDesktop,
    TransfersPagination,
  },

  setup() {
    const q = useQuasar();
    let today = null;

    const transfersPerPage = 2;
    const activePage = ref(1);
    const pagesNum = ref(Math.ceil(transfers.length / transfersPerPage));

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
      transfersPerPage,
      activePage,
      pagesNum,
      getDate,
      isSmallScreen,
      isDifferentDate(date) {
        const newDate = new Date(date);
        if (!today || !areSameDate(today, newDate)) {
          today = newDate;
          return true;
        }
        return false;
      },
      changePage(page) {
        activePage.value = page;
        today = null;
      },
      openListing,
    };
  },
});
</script>
