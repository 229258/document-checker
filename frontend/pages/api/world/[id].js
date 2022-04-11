// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import helloController from "../../../../backend/src/controllers/hello.controller";

const getWorldId = (req, res) => {
  return helloController.show(req, res);
};

export default getWorldId;
