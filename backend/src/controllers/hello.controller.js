/** @format */

import { findWorld, showFullHello } from "../services/hello/index";

export default {
  show: async (req, res) => {
    const payload = await findWorld(req.query.id);

    res.status(200).json(payload);
  },

  index: async (req, res) => {
    const payload = await showFullHello(req.body);

    res.status(200).json(payload);
  },
};
