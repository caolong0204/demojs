const str = "Ngày có khả <b>năng</b> thụ thai cao nhất";

function splitStringByTag(content, tag = "") {
  if (!tag) {
    return [{ content: content, type: "OUT_TAG" }];
  }
  const openTag = `<${tag}>`;
  const closeTag = `</${tag}>`;
  const arrayStr = content.split(openTag);
  const result = [];
  arrayStr.forEach((item) => {
    if (item.includes(closeTag)) {
      const resultBold = {
        content: item.substring(0, item.indexOf(closeTag)),
        type: "IN_TAG",
      };
      result.push(resultBold);
      const resultNormal = {
        content: item.substring(item.indexOf(closeTag) + 4),
        type: "OUT_TAG",
      };
      result.push(resultNormal);
    } else {
      result.push({
        content: item,
        type: "OUT_TAG",
      });
    }
  });
  return result;
}
console.log("=======Input:", str);
console.log("=======Output:", splitStringByTag(str, "b"));
