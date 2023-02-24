import _ from "lodash";

const arr = [{ name: "bobby" }, { name: "hadz" }, { name: "com" }];

const modifyData = (data) => {
  const result = [...data];
  result[0] = { ...data[0], isFirst: true };
  const length = data.length;
  result[length - 1] = { ...data[length - 1], isLast: true };
  return result;
};
console.log(modifyData(arr));
console.log(arr);
