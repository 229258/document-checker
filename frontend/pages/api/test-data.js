const testData = {
  stringProperty: "helloWorldString",
  numberProperty: 420,
  objectProperty: {
    hello: "World",
  },
  arrayProperty: [1, 2, "some", "array", { even: "with", object: "inside" }],
};

const TestDataFunction = (req, res) => {
  res.status(200).json(testData);
};

export default TestDataFunction;
