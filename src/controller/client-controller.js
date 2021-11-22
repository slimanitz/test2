const express = require("express");
const router = express.Router();
const Client = require("../database/models/client-model");

router.get("/", async (req, res) => {
  const clients = await Client.findAll();
  res.status(200).json(clients);
});

router.get("/:id", async (req, res) => {
  const client = await Client.findByPk(req.params.id);
  client != null ? res.status(200).json(client) : res.sendStatus(404);
});

router.post("/", async (req, res) => {
  try {
    const newClient = await Client.create(req.body);
    res.status(200).json(newClient);
  } catch (err) {
    res.status(500).json({ error: "error in the request" });
  }
});

router.put("/:id", async (req, res) => {
  const client = await Client.findByPk(req.params.id);
  if (client) {
    try {
      const newClient = await Client.update({
        values: {
          name: req.body.name,
          descriptionMaxSize: req.body.descriptionMaxSize,
          updateDate: new Date(),
        },
      });

      res.status(200).json(newClient);
    } catch (err) {
      res.sendStatus(500);
    }
    res.sendStatus(500);
  }
});

router.delete("/:id", async (req, res) => {
  await Client.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

module.exports = router;
