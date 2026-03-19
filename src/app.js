const express = require("express");
const app = express();
const port = 8080;

const knex = require("knex")(require("../knexfile.js")["development"]);

app.use(express.json());

// GET all makes
app.get("/makes", async (req, res) => {
    try {
        const data = await knex("makes").select("*");
        const makes = data.map((make) => ({
            id: make.id,
            make: make.name,
        }));
        res.status(200).send(makes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/makes/models", async (req, res) => {
    try {
        const data = await knex("models").select("*");
        const models = data.map((model) => ({
            id: model.id,
            model: model.name,
        }));
        res.status(200).send(models);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/makes/:make', async (req, res) => {
    try{
        const param = req.params.make;
        const paramUpper = param.charAt(0).toUpperCase() + param.slice(1);
        const data = await knex("models").where("makes_id",
            knex("makes").select("id").where("name", paramUpper)).select("*");
        const models = data.map(model => ({
            id: model.id,
            model: model.name
        }));
        res.status(200).send(models);
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

app.get("/makes/vehicles", async (req, res) => {
    try {
        const data = await knex("vehicles")
            .join("models", "vehicles.models_id", "models.id")
            .join("makes", "models.makes_id", "makes.id")
            .select(
            "vehicles.*",
            "models.name as model_name",
            "makes.name as make_name"
            );
        const vehicles = data.map((vehicles) => ({
            id: vehicles.id,
            model: vehicles.name,
            vin: vehicles.vin,
            year: vehicles.year,
            horse_power: vehicles.horse_power,
            color: vehicles.color,
            mpg: vehicles.mpg,
        }));
        res.status(200).send(vehicles);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// _________________________________________

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});