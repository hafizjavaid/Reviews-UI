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
export default {
  props: {
    item: {
      type: Object,
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
