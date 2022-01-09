<template>
  <div className="feedback-stats">
    <h4>{{ reviews.length }} Reviews</h4>
    <h4>Average Rating: {{ isNaN(average) ? 0 : average }}</h4>
  </div>
</template>

<script>
export default {
  name: "ReviewStats",
  data() {
    return {};
  },
  props: {
    reviews: {
      type: Array,
    },
  },
  computed: {
    average() {
      let temp =
        this.reviews.reduce((acc, cur) => {
          return acc + cur.rating;
        }, 0) / this.reviews.length;

      temp = temp.toFixed(1).replace(/[.,]0$/, "");

      return temp;
    },
  },
};
</script>

<style></style>
