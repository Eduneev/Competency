import { lorem, random } from 'faker/locale/en';

export default (db, { serializeDate }) =>
    Array.from(Array(500).keys()).map(id => {
        const course = random.arrayElement(db.courses);

        var outcome = lorem.sentence();

        return {
            id: id,
            course_id: course.id,
            description: outcome,
        };
    });
