const someData = [
  { id: 1, data: "Tricky data for ID 1" },
  { id: 2, data: ["This", "time", "its", "array"] },
  {
    id: 3,
    data: {
      now: "Its object",
    },
  },
];

const errorObject = {
  status: 404,
  message: "Data not found",
};

const helloWorldFunctionWithId = (req, res) => {
  const {
    query: { id },
  } = req;

  const queryId = parseInt(id);

  const foundData = someData.find(
    (singleObject) => singleObject.id === queryId
  );

  if (!foundData) {
    return res.status(404).json(errorObject);
  }

  res.json(foundData);
};

export default helloWorldFunctionWithId;
