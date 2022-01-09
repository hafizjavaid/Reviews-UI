<template>
  <Card>
    <form @submit.prevent="handleSubmit">
      <h2>How would you rate your service with us?</h2>
      <!-- Rating Component -->
      <rating-select @setRating="setRating" :rating="rating" />
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
import { v4 as uuid4 } from "uuid";
import { mapActions } from "vuex";

export default {
  components: { Card, RatingSelect },
  name: "ReviewsForm",
  data() {
    return {
      text: "",
      btnDisabled: true,
      message: "",
      rating: 10,
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
    editedData(newData) {
      if (newData.editable) {
        this.text = newData.item.text;
        this.rating = newData.item.rating;
      }
    },
  },
  props: {
    editedData: {
      type: Object,
    },
  },

  methods: {
    handleSubmit() {
      if (this.text.trim().length > 10) {
        const newReview = {
          text: this.text,
          rating: this.rating,
          id: uuid4(),
        };
        if (!this.editedData.editable) this.addReview(newReview);
        this.updateReview({
          ...newReview,
          id: this.editedData.item.id,
        });
        this.text = "";
        this.rating = 10;
      }
    },
    setRating(rating) {
      this.rating = rating;
    },
    ...mapActions({
      addReview: "addReview",
      updateReview: "updateReview",
    }),
  },
};
</script>

<style scoped>
form h2 {
  margin-bottom: 10px;
}
</style>
