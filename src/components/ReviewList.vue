<template>
  <p v-if="!reviews || reviews.length === 0">No Reviews Yet</p>
  <div class="reviewList" v-else>
    <review-item
      v-for="(item, i) in reviews"
      :key="i"
      :item="item"
      @deleteReview="deleteReview"
      @editReview="editReview"
    ></review-item>
  </div>
</template>

<script>
import ReviewItem from "./ReviewItem.vue";
export default {
  components: { ReviewItem },
  props: {
    reviews: {
      type: Array,
    },
  },
  methods: {
    editReview(review) {
      this.$emit("editReview", review);
    },
    deleteReview(review) {
      this.$emit("deleteReview", review);
    },
  },
};
</script>

<style></style>
