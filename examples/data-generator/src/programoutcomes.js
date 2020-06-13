import { lorem, random } from 'faker/locale/en';

export default (db, { serializeDate }) =>
    Array.from(Array(300).keys()).map(id => {
        const program = random.arrayElement(db.programs);

        var outcome = lorem.sentence();

        return {
            id: id,
            program_id: program.id,
            description: outcome,
        };
    });
