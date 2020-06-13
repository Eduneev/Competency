import { lorem } from 'faker/locale/en';
import { random } from 'faker/locale/en';
import addDays from 'date-fns/add_days';
import isAfter from 'date-fns/is_after';

import { randomDate, randomInteger } from './utils';

export default (db, { serializeDate }) =>
    Array.from(Array(50).keys()).map(id => {
        const today = new Date();
        const institute_id = 0;
        const name = lorem.words();
        const start_date = randomDate();
        const end_date = addDays(start_date, 150); // 5 months ahead
        const status = isAfter(today, end_date) ? false : true;
        const num_programs = randomInteger(3, 30);
        const program = random.arrayElement(
            db.programs.filter(program => program.institute_id === institute_id)
        );

        return {
            id,
            name: name,
            institute_id: institute_id,
            program_id: program.id,
            start_date: serializeDate ? start_date.toISOString() : start_date,
            end_date: serializeDate ? end_date.toISOString() : end_date,
            num_programs: num_programs,
            status: status,
        };
    });
