<template>
  <div
    class="bg-dark-secondary q-pa-md rounded-borders-sm row no-wrap items-center q-mb-md"
  >
    <div class="text-center transfers-width-sm">STATUS</div>
    <div class="text-left transfers-width-lg">TRAVELLER</div>
    <div class="text-center transfers-width-lg">ARRIVAL/ DEPARTURE</div>
    <div class="text-center transfers-width-lg">FROM/ TO</div>
    <div class="text-left transfers-width-md">
      <span> OPPORTUNITIES </span>
      <span
        class="bg-yellow-7 q-pa-xs rounded-borders-xs text-caption text-weight-bold"
      >
        NEW
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
