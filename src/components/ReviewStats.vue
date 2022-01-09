<template>
  <div className="feedback-stats">
    <h4>{{ reviews.length }} Reviews</h4>
    <h4>Average Rating: {{ isNaN(average) ? 0 : average }}</h4>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "ReviewStats",

  setup() {
    const store = useStore();
    const average = computed(() => store.getters["average"]);
    const reviews = computed(() => store.state.reviews);

    return {
      average,
      reviews,
    };
  },
};
</script>

<style></style>
