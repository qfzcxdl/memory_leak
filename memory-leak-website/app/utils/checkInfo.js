export default function jsonObjectIsEmpty(jsonObj) {
  for (let key in jsonObj) {
    let element = jsonObj[key];
    if (typeof element == "object") {
      jsonObjectIsEmpty(element);
    } else if (element == "") {
      throw {some_value_is_empty: true, key: key};
    }
  }
}
