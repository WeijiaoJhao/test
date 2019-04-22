<template>
  <div class="home"><button type="button" @click="file">file</button></div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["DOWNLOAD_FILE"]),
    file() {
      this[_M.DOWNLOAD_FILE]({ isFile: true });
    }
  }
};
</script>
