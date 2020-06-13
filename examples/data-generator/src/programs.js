import { lorem } from 'faker/locale/en';
import { weightedArrayElement, randomInteger } from './utils';

/*
function generate_outcomes() {
    var array = [];
    for (let i = 0; i < 6; i++) {
        array.push(lorem.sentence());
    }
    return array;
}
*/

export default (db, { serializeDate }) =>
    Array.from(Array(30).keys()).map(id => {
        var department_name = lorem.words();
        var accreditation_status = weightedArrayElement(
            [
                'Applying First Time',
                'Provisional Status for 2-3 years',
                'Granted accreditation for 5/6 years',
                'Not Accredited',
            ],
            [5, 1, 2, 10]
        );
        var start_year = randomInteger(2000, 2019);
        var intake = randomInteger(100, 500);
        var name = lorem.words();

        return {
            id: id,
            institute_id: 0,
            name: name,
            department_name: department_name,
            accreditation_status: accreditation_status,
            start_year: start_year,
            intake: intake,
        };
    });
