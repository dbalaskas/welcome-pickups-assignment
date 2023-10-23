<template>
  <q-btn
    dense
    unelevated
    icon="chevron_left"
    class="text-dark bg-white q-mr-sm q-pa-sm"
    :disable="activePage === 1"
    @click="changePage(activePage - 1)"
  />
  <div class="bg-white">
    <q-btn
      v-for="i in [...Array(pagesNum).keys()].map((i) => i + 1)"
      :key="i"
      flat
      dense
      class="q-py-sm q-px-md"
      :class="{ 'bg-primary': activePage === i }"
      @click="changePage(i)"
    >
      {{ i }}
    </q-btn>
  </div>
  <q-btn
    dense
    unelevated
    icon="chevron_right"
    class="text-dark bg-white q-ml-sm q-pa-sm"
    :disable="activePage === pagesNum"
    @click="changePage(activePage + 1)"
  />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TransfersPagination",

  props: {
    activePage: { type: Number, default: 1 },
    pagesNum: { type: Number, default: 1 },
  },

  emits: ["changePage"],

  setup(_, context) {
    return {
      changePage(page) {
        context.emit("changePage", page);
      },
    };
  },
});
</script>
