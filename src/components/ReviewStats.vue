<template>
  <div className="feedback-stats">
    <h4>{{ reviews.length }} Reviews</h4>
    <h4>Average Rating: {{ isNaN(average) ? 0 : average }}</h4>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "ReviewStats",

  computed: {
    ...mapGetters(["average"]),
    ...mapState(["reviews"]),
  },
};
</script>

<style></style>
