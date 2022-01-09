<template>
  <ul class="rating">
    <li v-for="i in 10" :key="`rating-${i}`">
      <input
        type="radio"
        :id="`num${i}`"
        name="rating"
        :value="i"
        :checked="selected === i"
      />
      <label :for="`num${i}`">
        {{ i }}
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  name: "RatingSelect",
  data() {
    return {
      selected: 10,
    };
  },
  watch: {
    selected(n) {
      console.log(n);
    },
  },
};
</script>

<style></style>
