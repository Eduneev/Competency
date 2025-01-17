import generateCustomers from './customers';
import generateCategories from './categories';
import generateProducts from './products';
import generateCommands from './commands';
import generateInvoices from './invoices';
import generateReviews from './reviews';
import generatePrograms from './programs';
import finalize from './finalize';
import generateInsitutes from './institutes';
import generateCohorts from './cohorts';
import generateProgramOutcomes from './programoutcomes';
import generateCourses from './courses';
import generateCourseOutcomes from './courseoutcomes';

export default (options = { serializeDate: true }) => {
    const db = {};
    db.customers = generateCustomers(db, options);
    db.categories = generateCategories(db, options);
    db.products = generateProducts(db, options);
    db.commands = generateCommands(db, options);
    db.invoices = generateInvoices(db, options);
    db.reviews = generateReviews(db, options);
    db.programs = generatePrograms(db, options);
    db.courses = generateCourses(db, options);
    db.institutes = generateInsitutes(db, options);
    db.cohorts = generateCohorts(db, options);
    db.programoutcomes = generateProgramOutcomes(db, options);
    db.courseoutcomes = generateCourseOutcomes(db, options);
    finalize(db);

    return db;
};
