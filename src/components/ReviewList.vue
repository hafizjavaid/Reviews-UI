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
import { useStore } from "vuex";
import {computed} from "vue";
export default {
  components: { ReviewItem },
  setup() {
    const store = useStore();
    const reviews = computed(() => store.state.reviews);
    return {
      reviews,
    };
  },
};
</script>

<style></style>
