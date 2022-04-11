// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import helloController from "../../../../backend/src/controllers/hello.controller";

const getAllHello = (req, res) => {
  req.body = { object: "from", frontend: 229300 };
  return helloController.index(req, res);
};

const createHello = (req, res) => {};

const updateHello = (req, res) => {};

const routes = (req, res) => {
  switch (req.method) {
    case "GET":
      return getAllHello(req, res);
  }
};

export default routes;
