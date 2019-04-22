const state = {
  i18n: "zh-tw"
};

const mutations = {
  [_M.CHANG_I18N](state, value) {
    state.i18n = value;
  }
};

const getters = {
  i18n: state => state.i18n
};

export default {
  state,
  mutations,
  getters
};
