<template>
  <div class="home">
    <div class="container">
      <reviews-form
        @addReview="addReview"
        @updateReview="updateReview"
        :editedData="editedData"
      />
      <review-stats :reviews="reviews" />
      <review-list
        :reviews="reviews"
        @deleteReview="deleteReview"
        @editReview="editReview"
      ></review-list>
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

      editedData: {
        editable: false,
        item: {},
      },
    };
  },
  methods: {
    addReview(review) {
      this.reviews = [review, ...this.reviews];
    },
    deleteReview(review) {
      this.reviews = this.reviews.filter((rev) => rev.id !== review.id);
    },
    editReview(review) {
      this.editedData = {
        editable: true,
        item: review,
      };
    },
    updateReview(review) {
      this.reviews = this.reviews.map((item) =>
        item.id === review.id ? { ...item, ...review } : item
      );
      this.editedData = {
        editable: false,
        item: {},
      };
    },
  },
};
</script>
