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
import { mapState } from "vuex";

export default {
  name: "Home",
  components: { ReviewsForm, ReviewStats, ReviewList },
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapState(["editedData"]),
  },
};
</script>
