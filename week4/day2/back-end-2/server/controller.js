
const { response } = require("express");
const { request } = require("http");
const HOUSES = require("./db.json");
let base_id = 4;

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(HOUSES);
    },
    deleteHouse: (req, res) => {
        let index = HOUSES.findIndex( houses => houses.id === +req.params.id);
        HOUSES.splice(index, 1);
        res.status(200).send(HOUSES);
    },
    createHouse: (req, res) => {
    let { address, price, imageURL } = req.body;
    let new_house = {
        id: base_id,
        address,
        price: parseInt(price),
        imageURL
    }
    HOUSES.push(new_house)
    base_id++
    console.log(HOUSES)
    res.status(200).send(HOUSES)
    },
    updateHouse: (req, res) => {
let { id } = req.params;
let { type } = req.body;
let index = HOUSES.findIndex( houses => houses.id === +id);
if(HOUSES[index].price <= 10000 && type === "minus") {
    console.log("Price is too low");
    res.status(405).send(HOUSES);
    return;
}
type === "plus" ? HOUSES[index].price += 10000 : HOUSES[index].price -= 10000
res.status(200).send(HOUSES)
    },
}