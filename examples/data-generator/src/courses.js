import { lorem, random } from 'faker/locale/en';

var sem = ['Fall', 'Spring', 'Summer'];

export default (db, { serializeDate }) =>
    Array.from(Array(300).keys()).map(id => {
        var name = lorem.words();
        var semester = sem[Math.floor(Math.random() * sem.length)];

        const program = random.arrayElement(db.programs);
        return {
            id: id,
            program_id: program.id,
            name: name,
            semester: semester,
        };
    });
