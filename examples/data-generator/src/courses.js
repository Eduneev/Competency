import { lorem } from 'faker/locale/en';
import { weightedArrayElement, randomInteger } from './utils';

var sem = ['Fall', 'Spring', 'Summer']

export default (db, { serializeDate }) =>
    Array.from(Array(30).keys()).map(id => {
        var name = lorem.words();
        var code = Math.round(randomInteger(10000, 99999));
        var semester = sem[Math.floor(Math.random() * sem.length)]; 
        return {
            id: id,
            program_id: 0,
            name: name,
            code: code,
            semester: semester,
        };
    });