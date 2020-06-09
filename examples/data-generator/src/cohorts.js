import { lorem } from 'faker/locale/en';
import addDays from 'date-fns/sub_days';
import isAfter from 'date-fns/is_after';

import { randomDate, randomFloat } from './utils';

export default (db, { serializeDate }) => {
    Array.from(Array(50).keys()).map(id => {
        const today = new Date();
        const institute_id = 0;
        const name = lorem.words();
        const start_date = randomDate();
        const end_date = addDays(start_date, 90); // 3 months ahead
        const status = 'InActive' ? isAfter(today, end_date) : 'Active';
        const num_programs = randomFloat(3, 30);

        return {
            id,
            name: name,
            institute_id: institute_id,
            start_date: serializeDate ? start_date.toISOString() : start_date,
            end_date: serializeDate ? end_date.toISOString() : end_date,
            num_programs: num_programs,
            status: status,
        };
    });
};
