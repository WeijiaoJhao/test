import { app } from "@/main";

//預清除的store list
let removeStoreList = ["test"];

let initValue = value => {
  switch (`${typeof value}_${Array.isArray(value)}`) {
    case "string_false":
      return "";
    case "boolean_false":
      return false;
    case "object_true":
      return [];
    case "object_false":
      return {};
  }
};

const actions = {
  [_M.REMOVE_DATA]({ rootState }) {
    let newObj = {};
    Object.keys(rootState).forEach(i => {
      let isRemove = removeStoreList.indexOf(i) !== -1;
      isRemove &&
        (newObj[i] = {}) &&
        Object.keys(rootState[i]).forEach(j => {
          newObj[i][j] = initValue(rootState[i][j]);
        });
    });
    let newStore = Object.assign({}, rootState, newObj);
    app.$store.replaceState(newStore);
    // removeAllStorage();
  }
};

export default {
  actions
};
