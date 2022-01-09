import { createStore } from "vuex";

export default createStore({
  state: {
    reviews: [],
    editedData: {
      editable: false,
      item: {},
    },
  },
  mutations: {
    SET_REVIEWS(state, payload) {
      state.reviews = payload;
    },
    ADD_REVIEW(state, payload) {
      state.reviews = [payload, ...state.reviews];
    },
    SET_EDIT_DATA(state, payload) {
      state.editedData = payload;
    },
  },
  actions: {
    async deleteReview({ state, commit, dispatch }, review) {
      await fetch(`http://localhost:5000/reviews/${review.id}`, {
        method: "DELETE",
      });
      let reviews = state.reviews.filter((rev) => rev.id !== review.id);
      commit("SET_REVIEWS", reviews);
      dispatch("fetchReviews");
    },
    async addReview({ commit, dispatch }, review) {
      const response = await fetch(`http://localhost:5000/reviews/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      });

      const newReview = await response.json();
      commit("ADD_REVIEW", newReview);
      dispatch("fetchReviews");
    },
    editReview({ commit }, review) {
      let editedData = {
        editable: true,
        item: review,
      };
      commit("SET_EDIT_DATA", editedData);
    },
    async updateReview({ state, commit, dispatch }, review) {
      const response = await fetch(
        `http://localhost:5000/reviews/${review.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(review),
        }
      );

      const updatedReview = await response.json();
      let reviews = state.reviews.map((item) =>
        item.id === review.id ? { ...item, ...updatedReview } : item
      );
      commit("SET_REVIEWS", reviews);
      dispatch("fetchReviews");
      let editedData = {
        editable: false,
        item: {},
      };
      commit("SET_EDIT_DATA", editedData);
    },
    async fetchReviews({ commit }) {
      try {
        const reviews = await fetch(
          `http://localhost:5000/reviews?_sort=id&_order=desc`
        );
        const data = await reviews.json();
        commit("SET_REVIEWS", data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  modules: {},
  getters: {
    average: (state) => {
      let temp =
        state.reviews.reduce((acc, cur) => {
          return acc + cur.rating;
        }, 0) / state.reviews.length;

      temp = temp.toFixed(1).replace(/[.,]0$/, "");

      return temp;
    },
  },
});
