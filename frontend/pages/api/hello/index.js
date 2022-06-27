const route = (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      res.json({ method: "GET", endpoint: "Hello" });
      break;
    case "POST":
      res.json({ method: "POST", endpoint: "Hello" });
      break;
    case "PUT":
      res.json({ method: "PUT", endpoint: "Hello" });
      break;
    case "DELETE":
      res.json({ method: "DELETE", endpoint: "Hello" });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} not allowed`);
      break;
  }
};

export default route;
