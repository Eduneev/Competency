import generateCustomers from './customers';
import generateCategories from './categories';
import generateProducts from './products';
import generateCommands from './commands';
import generateInvoices from './invoices';
import generateReviews from './reviews';
<<<<<<< HEAD
import generatePrograms from './programs';
import finalize from './finalize'; 
=======
import finalize from './finalize';
import generateInsitutes from './institutes';
import generateCohorts from './cohorts';
>>>>>>> 7fc003b8c7b4ba6fbfec69d6ddc7bea1ede4c6b5

export default (options = { serializeDate: true }) => {
    const db = {};
    db.customers = generateCustomers(db, options);
    db.categories = generateCategories(db, options);
    db.products = generateProducts(db, options);
    db.commands = generateCommands(db, options);
    db.invoices = generateInvoices(db, options);
    db.reviews = generateReviews(db, options);
<<<<<<< HEAD
    db.programs = generatePrograms(db, options);
=======
    db.institutes = generateInsitutes(db, options);
    db.cohorts = generateCohorts(db, options);
>>>>>>> 7fc003b8c7b4ba6fbfec69d6ddc7bea1ede4c6b5
    finalize(db);

    return db;
};
