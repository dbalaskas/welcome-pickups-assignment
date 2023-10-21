<template>
  <div
    class="bg-dark-secondary text-dark q-pa-sm rounded-borders-sm row no-wrap items-center q-mb-md"
  >
    <div class="text-center transfers-width-sm">STATUS</div>
    <div class="text-left transfers-width-lg">TRAVELLER</div>
    <div class="text-left transfers-width-lg">ARRIVAL/ DEPARTURE</div>
    <div class="text-left transfers-width-lg">FROM/ TO</div>
    <div class="text-left transfers-width-md">
      <span> OPPORTUNITIES </span>
      <span
        class="bg-orange-4 text-white q-px-xs q-pt-xxs rounded-borders-xs text-caption"
      >
        New
      </span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TransfersListHeaderDesktop",
});
</script>
