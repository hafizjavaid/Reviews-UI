import { createStore } from "vuex";

export default createStore({
  state: {
    reviews: [
      {
        id: 1,
        rating: 10,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        id: 2,
        rating: 9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
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
    deleteReview({ state, commit }, review) {
      let reviews = state.reviews.filter((rev) => rev.id !== review.id);
      commit("SET_REVIEWS", reviews);
    },
    addReview({ commit }, review) {
      commit("ADD_REVIEW", review);
    },
    editReview({ commit }, review) {
      let editedData = {
        editable: true,
        item: review,
      };
      commit("SET_EDIT_DATA", editedData);
    },
    updateReview({ state, commit }, review) {
      let reviews = state.reviews.map((item) =>
        item.id === review.id ? { ...item, ...review } : item
      );
      commit("SET_REVIEWS", reviews);
      let editedData = {
        editable: false,
        item: {},
      };
      commit("SET_EDIT_DATA", editedData);
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
