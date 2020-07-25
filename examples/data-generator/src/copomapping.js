import { lorem, random } from 'faker/locale/en';

export default (db, { serializeDate }) =>
    Array.from(Array(500).keys()).map(id => {
        // const course = random.arrayElement(db.courses);
        // const program = random.arrayElement(db.programs);
        const courseoutcome = random.arrayElement(db.courseoutcomes);
        const programoutcome = random.arrayElement(db.programoutcomes);

        var correlation = random.number({
            'min': 1,
            'max': 3
        }); 

        return {
            id: id,
            co_id: courseoutcome.id,
            po_id: programoutcome.id,
            correlation: correlation,
        };
    });
