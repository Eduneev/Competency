"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var en_1 = require("faker/locale/en");
var utils_1 = require("./utils"); 
var cohort_id = 0;
var outcomes_list = [];
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function generate_outcomes() {
    var i;
    for (i = 0; i < 10; i++) {
        outcomes_list.push(en_1.random.word());
    }
}
exports.default = (function (db, _a) {
    var serializeDate = _a.serializeDate;
    return Array.from(Array(900).keys()).map(function (id) {
        var department_name = en_1.random.words();
        var code = Math.round(utils_1.randomFloat());
        var accreditation_status = en_1.random.word();
        var start_year = Math.round(randomNumber(2000, 2020));
        var intake = Math.round(utils_1.randomFloat());
        var outcomes= generate_outcomes();
        var first_name = en_1.name.firstName();
        var last_name = en_1.name.lastName();
        var name = first_name.concat(" ", last_name); 
        return {
            id: id,
            cohort_id: cohort_id++, 
            first_name: first_name,
            last_name: last_name,
            name: name,
            department_name: department_name,
            code: code,
            accreditation_status: accreditation_status,
            start_year: start_year,
            intake: intake,
            outcomes: outcomes, 
        };
    });
}); 
