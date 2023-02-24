import _ from "lodash";
import moment from "moment";

const linkUrl =
  "https://api.dev.babiuni.com/api/files/aaa34daa-16a3-4fcc-a2ec-c45779cd379e";
const result = _.last(linkUrl.split("/"));

console.log("====result",result);