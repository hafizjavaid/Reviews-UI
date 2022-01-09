<template>
  <Card>
    <form>
      <h2>How would you rate your service with us?</h2>
      <!-- Rating Component -->
      <rating-select />
      <div class="input-group">
        <input type="text" placeholder="Write a review" v-model="text" />
        <button type="submit" class="btn btn-primary" :disabled="btnDisabled">
          Send
        </button>
      </div>
      <div class="message" v-if="message != ''">
        {{ message }}
      </div>
    </form>
  </Card>
</template>

<script>
import RatingSelect from "./RatingSelect.vue";
import Card from "./shared/Card.vue";
export default {
  components: { Card, RatingSelect },
  name: "ReviewsForm",

  data() {
    return {
      text: "",
      btnDisabled: true,
      message: "",
    };
  },
  watch: {
    text(newVal) {
      if (newVal.length <= 10) {
        this.btnDisabled = true;
        this.message = "Text must be at least 10 characters";
      } else {
        (this.btnDisabled = false), (this.message = "");
      }
    },
  },
};
</script>

<style scoped>
form h2 {
  margin-bottom: 10px;
}
</style>
