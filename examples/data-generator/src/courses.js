import { lorem, random } from 'faker/locale/en';
import { weightedArrayElement } from './utils';

export default (db, { serializeDate }) =>
    Array.from(Array(300).keys()).map(id => {
        var name = lorem.words();
        var semester = weightedArrayElement(
            ['Fall', 'Spring', 'Summer'],
            [2, 2, 1]
        );

        const program = random.arrayElement(db.programs);
        return {
            id: id,
            program_id: program.id,
            name: name,
            semester: semester,
        };
    });
