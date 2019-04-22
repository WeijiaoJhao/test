import { Ajax } from "@/api";
import { API } from "@/api/api";

const actions = {
  async [_M.DOWNLOAD_FILE]({}, params) {
    const data = await Ajax(API.file.method, API.file.url, params);
    if (data && data.status === 200) {
      // console.log("sss", data);
      const blob = new Blob([data.data]);
      let a = document.createElement("a");
      let url = window.URL.createObjectURL(blob);
      // let name = headers["content-disposition"].split("filename=")[1];
      a.href = url;
      // a.download = name;
      a.download = "tryy.zip";
      a.click();
      window.URL.revokeObjectURL(url);
    }
  }
};

export default {
  actions
};
