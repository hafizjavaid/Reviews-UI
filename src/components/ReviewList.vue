<template>
  <p v-if="!reviews || reviews.length === 0">No Reviews Yet</p>
  <div class="reviewList" v-else>
    <review-item
      v-for="(item, i) in reviews"
      :key="i"
      :item="item"
    ></review-item>
  </div>
</template>

<script>
import ReviewItem from "./ReviewItem.vue";
import { mapState } from "vuex";
export default {
  components: { ReviewItem },

  methods: {},
  computed: {
    ...mapState(["reviews"]),
  },
};
</script>

<style></style>
