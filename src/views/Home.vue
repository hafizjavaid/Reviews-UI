<template>
  <div class="home">
    <div class="container">
      <reviews-form />
      <review-stats :reviews="reviews" />
      <review-list :reviews="reviews"></review-list>
    </div>
  </div>
</template>

<script>
import ReviewList from "../components/ReviewList.vue";
import ReviewsForm from "../components/ReviewsForm.vue";
import ReviewStats from "../components/ReviewStats.vue";
import reviews from "../data/Reviews";
export default {
  name: "Home",
  components: { ReviewsForm, ReviewStats, ReviewList },
  data() {
    return {
      reviews,
    };
  },
};
</script>
