/** @format */

export default (bodyObject) => {
  return {
    objectFromFrontend: bodyObject,
    hello: "World",
    array: ["some", 1, "value", { can: "be", array: ["inside", "object", 99] }],
    number: 420,
  };
};
