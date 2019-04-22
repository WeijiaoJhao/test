import axios from "axios";

axios.interceptors.request.use(
  config => {
    let isFile = config.params ? config.params.isFile || false : false;
    config.headers = {
      "content-type": "application/json"
    };
    isFile && (config.responseType = "blob");
    // console.log("config", config);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    // console.log("response", response);
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export const Ajax = async (method, url, params) => {
  let input = { method, url };
  let isGet = method.toLowerCase() === "get";
  if (isGet) {
    input.params = params ? params : {};
  } else {
    input.data = params ? params : {};
  }
  console.log("input", JSON.stringify(input));
  const data = await axios(input)
    .then(response => {
      if (response.data instanceof Blob) {
        return response;
      } else {
        return { status: response.status, ...response.data };
      }
    })
    .catch(error => {
      console.log(error);
    });
  return data;
};
