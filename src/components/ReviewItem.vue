<template>
  <div className="card">
    <button class="close" @click="deleteReview(item)">
      <i class="fas fa-times"></i>
    </button>
    <button class="edit" @click="editReview(item)">
      <i class="fas fa-edit"></i>
    </button>
    <div className="num-display">{{ item.rating }}</div>
    <div className="text-display">{{ item.text }}</div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  props: {
    item: {
      type: Object,
    },
  },

  setup() {
    const store = useStore();
    const deleteReview = (review) => {
      store.dispatch("deleteReview", review);
    };
    const editReview = (review) => {
      store.dispatch("editReview", review);
    };
    return {
      deleteReview,
      editReview,
    };
  },
};
</script>

<style></style>
