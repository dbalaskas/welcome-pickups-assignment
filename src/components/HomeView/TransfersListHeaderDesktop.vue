<template>
  <div
    class="bg-dark-third text-dark q-px-xs q-py-sm rounded-borders-xs row no-wrap items-center q-mb-sm"
  >
    <div class="text-center text-caption text-weight-bold transfers-width-sm">
      STATUS
    </div>
    <div class="text-left text-caption text-weight-bold transfers-width-lg">
      TRAVELLER
    </div>
    <div class="text-left text-caption text-weight-bold transfers-width-lg">
      ARRIVAL/ DEPARTURE
    </div>
    <div class="text-left text-caption text-weight-bold transfers-width-lg">
      FROM/ TO
    </div>
    <div class="text-left text-caption text-weight-bold transfers-width-md">
      <span> OPPORTUNITIES </span>
      <span
        class="bg-orange-4 text-white q-px-xs q-pt-xxs rounded-borders-xxs text-caption2"
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
