import { date, name, lorem, random } from 'faker/locale/en'; 
import { randomFloat, weightedBoolean } from './utils'; 
var cohort_id = 0;
var array = [];
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function generate_outcomes() {
    var i;
    for (i = 0; i < 10; i++) {
        array.push(random.word());
    }
} 
export default (function (db, _a) {
    var serializeDate = _a.serializeDate;
    return Array.from(Array(900).keys()).map(function (id) {
        var department_name = lorem.text();
        var code = Math.round(randomFloat());
        var accreditation_status = random.words();
        var start_year = randomNumber(2000, 2020);
        var intake = Math.round(randomFloat());
        var outcomes= generate_outcomes();
        var first_name = name.firstName();
        var last_name = name.lastName();
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