import type from "./actionType";

export const sort = function (fieldName) {
  return { type: type.SORT, fieldName }
}
