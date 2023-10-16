<template>
  <div>
    <div v-if="q.screen.gt.xs" class="text-h5 text-weight-bolder q-mb-md">
      {{ title }}
    </div>
    <slot name="body" />
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent } from "vue";

export default defineComponent({
  name: "DashboardSection",
  props: {
    title: { type: String, default: "" },
  },
  setup() {
    const q = useQuasar();

    return {
      q,
    };
  },
});
</script>
