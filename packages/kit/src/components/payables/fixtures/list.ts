import {
  ReceivableResponse,
  QuoteResponsePayload,
  CurrencyEnum,
  AllowedCountriesCodes,
  EntityOrganization,
  CounterpartType,
  ReceivablesStatusEnum,
} from '@monite/js-sdk';

const data: ReceivableResponse[] = [
  {
    type: QuoteResponsePayload.type.QUOTE,
    expiry_date: '2022-08-10T11:37:07.069Z',
    id: 'string',
    created_at: '2022-08-10T11:37:07.069Z',
    updated_at: '2022-08-10T11:37:07.069Z',
    document_id: 'string',
    currency: CurrencyEnum.USD,
    total_amount: 0,
    line_items: [
      {
        quantity: 0,
        product: {
          name: 'string',
          description: 'string',
          price: {
            currency: CurrencyEnum.USD,
            value: 0,
          },
          measure_unit_id: 'string',
          vat_classes: ['string'],
          smallest_amount: 0,
          id: 'string',
          entity_id: 'string',
          entity_user_id: 'string',
          created_at: '2022-08-10T11:37:07.070Z',
          updated_at: '2022-08-10T11:37:07.070Z',
          vat_class: {
            value: 10000,
            country: AllowedCountriesCodes.AF,
            id: 'string',
            created_at: '2022-08-10T11:37:07.070Z',
            updated_at: '2022-08-10T11:37:07.070Z',
          },
          measure_unit: {
            name: 'string',
            description: 'string',
            id: 'string',
            created_at: '2022-08-10T11:37:07.070Z',
            updated_at: '2022-08-10T11:37:07.070Z',
          },
        },
      },
    ],
    entity_address: {
      country: AllowedCountriesCodes.DE,
      city: 'string',
      postal_code: 'string',
      state: 'string',
      line1: 'string',
      line2: 'string',
    },
    entity: {
      phone: 'string',
      logo: 'string',
      email: 'user@example.com',
      name: 'string',
      vat_id: 'string',
      type: EntityOrganization.type.ORGANIZATION,
    },
    entity_user_id: 'string',
    counterpart_id: 'string',
    counterpart_type: CounterpartType.INDIVIDUAL,
    counterpart_address: {
      country: AllowedCountriesCodes.DE,
      city: 'Berlin',
      postal_code: '10115',
      state: 'string',
      line1: 'Flughafenstrasse 52',
      line2: 'string',
    },
    counterpart_contact: {
      first_name: 'Marge',
      last_name: 'Smith',
      email: 'marge@example.org',
      phone: '55512378654',
      title: 'Dr.',
    },
    counterpart_name: 'string',
    file_url: 'string',
    commercial_condition_description: 'string',
    status: ReceivablesStatusEnum.DRAFT,
    total_vat_amount: 'string',
    entity_bank_account: {
      iban: 'string',
      bic: 'string',
      bank_name: 'string',
      display_name: 'string',
    },
    vat_exempt: true,
    vat_exemption_rationale: 'string',
    based_on: 'string',
    memo: 'string',
    payment_reminder_id: 'string',
    recurrence_id: 'string',
  },
  {
    type: QuoteResponsePayload.type.QUOTE,
    id: 'string',
    created_at: '2022-08-10T11:37:07.070Z',
    updated_at: '2022-08-10T11:37:07.070Z',
    document_id: 'string',
    currency: CurrencyEnum.USD,
    total_amount: 0,
    line_items: [
      {
        quantity: 0,
        product: {
          name: 'string',
          description: 'string',
          price: {
            currency: CurrencyEnum.USD,
            value: 0,
          },
          measure_unit_id: 'string',
          vat_classes: ['string'],
          smallest_amount: 0,
          id: 'string',
          entity_id: 'string',
          entity_user_id: 'string',
          created_at: '2022-08-10T11:37:07.070Z',
          updated_at: '2022-08-10T11:37:07.070Z',
          vat_class: {
            value: 10000,
            country: AllowedCountriesCodes.AF,
            id: 'string',
            created_at: '2022-08-10T11:37:07.070Z',
            updated_at: '2022-08-10T11:37:07.070Z',
          },
          measure_unit: {
            name: 'string',
            description: 'string',
            id: 'string',
            created_at: '2022-08-10T11:37:07.070Z',
            updated_at: '2022-08-10T11:37:07.070Z',
          },
        },
      },
    ],
    entity_address: {
      country: AllowedCountriesCodes.DE,
      city: 'string',
      postal_code: 'string',
      state: 'string',
      line1: 'string',
      line2: 'string',
    },
    entity: {
      phone: 'string',
      logo: 'string',
      email: 'user@example.com',
      name: 'string',
      vat_id: 'string',
      type: EntityOrganization.type.ORGANIZATION,
    },
    entity_user_id: 'string',
    counterpart_id: 'string',
    counterpart_type: CounterpartType.INDIVIDUAL,
    counterpart_address: {
      country: AllowedCountriesCodes.DE,
      city: 'Berlin',
      postal_code: '10115',
      state: 'string',
      line1: 'Flughafenstrasse 52',
      line2: 'string',
    },
    counterpart_contact: {
      first_name: 'Marge',
      last_name: 'Smith',
      email: 'marge@example.org',
      phone: '55512378654',
      title: 'Dr.',
    },
    counterpart_name: 'string',
    file_url: 'string',
    commercial_condition_description: 'string',
    status: ReceivablesStatusEnum.DRAFT,
    total_vat_amount: 'string',
    entity_bank_account: {
      iban: 'string',
      bic: 'string',
      bank_name: 'string',
      display_name: 'string',
    },
    vat_exempt: true,
    vat_exemption_rationale: 'string',
    based_on: 'string',
    memo: 'string',
    payment_reminder_id: 'string',
    recurrence_id: 'string',
    // payment_terms: {
    //   id: 'string',
    //   name: 'string',
    //   term_final: {
    //     number_of_days: 10000,
    //     end_date: '2022-08-10',
    //   },
    //   term_1: {
    //     number_of_days: 10000,
    //     discount: 10000,
    //     end_date: '2022-08-10',
    //   },
    //   term_2: {
    //     number_of_days: 10000,
    //     discount: 10000,
    //     end_date: '2022-08-10',
    //   },
    // },
  },
];

export default data;
