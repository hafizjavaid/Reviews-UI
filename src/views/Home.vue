<template>
  <div class="home">
    <div class="container">
      <reviews-form :editedData="editedData" />
      <review-stats />
      <review-list></review-list>
    </div>
  </div>
</template>

<script>
import ReviewList from "../components/ReviewList.vue";
import ReviewsForm from "../components/ReviewsForm.vue";
import ReviewStats from "../components/ReviewStats.vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Home",
  components: { ReviewsForm, ReviewStats, ReviewList },
  setup() {
    const store = useStore();
    const editedData = computed(() => store.state.editedData);
    store.dispatch("fetchReviews");
    return {
      editedData,
    };
  },
};
</script>
