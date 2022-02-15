import Chance from "chance";
let chance = new Chance
let randomIndex = chance.integer({min:0, max:13})
let randomEmail = chance.email({domain: "test.com"})
export default {randomIndex, randomEmail}