import { ReduxState, Record, Identifier } from 'ra-core';

export type ThemeName = 'light' | 'dark';

export interface AppState extends ReduxState {
    theme: ThemeName;
}

export interface Category extends Record {
    name: string;
}

export interface Product extends Record {
    category_id: Identifier;
    description: string;
    height: number;
    image: string;
    price: number;
    reference: string;
    stock: number;
    thumbnail: string;
    width: number;
}

export interface Organization extends Record {
    name: string;
    Address: string;
    mobile: string;
}

export interface Institute extends Record {
    org_id: Identifier;
    name: string;
    code: string;
    address: string;
    zipcode: string;
    vision: string;
    mission: string;
    contact: Contact;
}

export interface Customer extends Record {
    first_name: string;
    last_name: string;
    address: string;
    city: string;
    zipcode: string;
    avatar: string;
    birthday: string;
    first_seen: string;
    last_seen: string;
    has_ordered: boolean;
    latest_purchase: string;
    has_newsletter: boolean;
    groups: string[];
    nb_commands: number;
    total_spent: number;
}

export interface Order extends Record {
    basket: BasketItem[];
    date: Date;
    total: number;
}

export interface BasketItem {
    product_id: string;
    quantity: number;
}

export interface Contact {
    first_name: string;
    last_name: string;
    designation: string;
    email: string;
    mobile: string;
}

export interface Cohort extends Record {
    institute_id: Identifier;
    name: string;
    start_date: Date;
    end_date: Date;
    num_programs: number;
}

export interface Program extends Record {
    cohort_id: Identifier;
    name: string;
    code: string;
    department_name: string;
    start_year: number;
    intake: number;
    accreditation_status: string;
    outcomes: ProgramOutcome[];
}

export interface Course extends Record {
    program_id: Identifier;
    name: string;
    code: string;
    semester: Semester;
    outcomes: CourseOutcome[];
}

export interface Semester {
    name: string;
}

export interface ProgramOutcome {
    program_id: Identifier;
    description: string;
}

export interface CourseOutcome {
    course_id: Identifier;
    description: string;
}

/**
 * Types to eventually add in react-admin
 */
export interface FieldProps<T extends Record = Record> {
    addLabel?: boolean;
    label?: string;
    record?: T;
    source?: string;
}

export interface Review extends Record {
    customer_id: string;
}
