/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BankAccount } from './BankAccount';
import type { BusinessProfile } from './BusinessProfile';
import type { Company } from './Company';
import type { Individual } from './Individual';
import type { Person } from './Person';

export type DataPayload = {
    business_profile?: BusinessProfile;
    tos_acceptance_date?: string;
    bank_account?: BankAccount;
    individual?: Individual;
    company?: Company;
    representative?: Person;
    persons?: Array<Person>;
};
