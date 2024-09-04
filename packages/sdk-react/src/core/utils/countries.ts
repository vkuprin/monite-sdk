import { components } from '@/api';
import type { I18n } from '@lingui/core';
import { t } from '@lingui/macro';

export type CountriesType = Record<string, string>;

export type CountryType = {
  code: AllowedCountries;
  label: string;
};

export const checkIfUSEntity = (country: AllowedCountries) => country === 'US';

export const getCountriesArray = (i18n: I18n): CountryType[] =>
  Object.entries(getCountries(i18n)).map(([code, label]) => ({
    code: code as AllowedCountries,
    label,
  }));

export const getCountries = (i18n: I18n): CountriesType => ({
  AF: t(i18n)`Afghanistan`,
  AX: t(i18n)`Aland Islands`,
  AL: t(i18n)`Albania`,
  DZ: t(i18n)`Algeria`,
  AS: t(i18n)`American Samoa`,
  AD: t(i18n)`Andorra`,
  AO: t(i18n)`Angola`,
  AI: t(i18n)`Anguilla`,
  AQ: t(i18n)`Antarctica`,
  AG: t(i18n)`Antigua And Barbuda`,
  AR: t(i18n)`Argentina`,
  AM: t(i18n)`Armenia`,
  AW: t(i18n)`Aruba`,
  AU: t(i18n)`Australia`,
  AT: t(i18n)`Austria`,
  AZ: t(i18n)`Azerbaijan`,
  BS: t(i18n)`Bahamas`,
  BH: t(i18n)`Bahrain`,
  BD: t(i18n)`Bangladesh`,
  BB: t(i18n)`Barbados`,
  BY: t(i18n)`Belarus`,
  BE: t(i18n)`Belgium`,
  BZ: t(i18n)`Belize`,
  BJ: t(i18n)`Benin`,
  BM: t(i18n)`Bermuda`,
  BT: t(i18n)`Bhutan`,
  BO: t(i18n)`Bolivia`,
  BA: t(i18n)`Bosnia And Herzegovina`,
  BW: t(i18n)`Botswana`,
  BV: t(i18n)`Bouvet Island`,
  BR: t(i18n)`Brazil`,
  IO: t(i18n)`British Indian Ocean Territory`,
  BN: t(i18n)`Brunei Darussalam`,
  BG: t(i18n)`Bulgaria`,
  BF: t(i18n)`Burkina Faso`,
  BI: t(i18n)`Burundi`,
  KH: t(i18n)`Cambodia`,
  CM: t(i18n)`Cameroon`,
  CA: t(i18n)`Canada`,
  CV: t(i18n)`Cape Verde`,
  KY: t(i18n)`Cayman Islands`,
  CF: t(i18n)`Central African Republic`,
  TD: t(i18n)`Chad`,
  CL: t(i18n)`Chile`,
  CN: t(i18n)`China`,
  CX: t(i18n)`Christmas Island`,
  CC: t(i18n)`Cocos (Keeling) Islands`,
  CO: t(i18n)`Colombia`,
  KM: t(i18n)`Comoros`,
  CG: t(i18n)`Congo`,
  CD: t(i18n)`Congo, Democratic Republic`,
  CK: t(i18n)`Cook Islands`,
  CR: t(i18n)`Costa Rica`,
  CI: t(i18n)`Cote D"Ivoire`,
  HR: t(i18n)`Croatia`,
  CU: t(i18n)`Cuba`,
  CY: t(i18n)`Cyprus`,
  CZ: t(i18n)`Czech Republic`,
  DK: t(i18n)`Denmark`,
  DJ: t(i18n)`Djibouti`,
  DM: t(i18n)`Dominica`,
  DO: t(i18n)`Dominican Republic`,
  EC: t(i18n)`Ecuador`,
  EG: t(i18n)`Egypt`,
  SV: t(i18n)`El Salvador`,
  GQ: t(i18n)`Equatorial Guinea`,
  ER: t(i18n)`Eritrea`,
  EE: t(i18n)`Estonia`,
  ET: t(i18n)`Ethiopia`,
  FK: t(i18n)`Falkland Islands (Malvinas)`,
  FO: t(i18n)`Faroe Islands`,
  FJ: t(i18n)`Fiji`,
  FI: t(i18n)`Finland`,
  FR: t(i18n)`France`,
  GF: t(i18n)`French Guiana`,
  PF: t(i18n)`French Polynesia`,
  TF: t(i18n)`French Southern Territories`,
  GA: t(i18n)`Gabon`,
  GM: t(i18n)`Gambia`,
  GE: t(i18n)`Georgia`,
  DE: t(i18n)`Germany`,
  GH: t(i18n)`Ghana`,
  GI: t(i18n)`Gibraltar`,
  GR: t(i18n)`Greece`,
  GL: t(i18n)`Greenland`,
  GD: t(i18n)`Grenada`,
  GP: t(i18n)`Guadeloupe`,
  GU: t(i18n)`Guam`,
  GT: t(i18n)`Guatemala`,
  GG: t(i18n)`Guernsey`,
  GN: t(i18n)`Guinea`,
  GW: t(i18n)`Guinea-Bissau`,
  GY: t(i18n)`Guyana`,
  HT: t(i18n)`Haiti`,
  HM: t(i18n)`Heard Island & Mcdonald Islands`,
  VA: t(i18n)`Holy See (Vatican City State)`,
  HN: t(i18n)`Honduras`,
  HK: t(i18n)`Hong Kong`,
  HU: t(i18n)`Hungary`,
  IS: t(i18n)`Iceland`,
  IN: t(i18n)`India`,
  ID: t(i18n)`Indonesia`,
  IR: t(i18n)`Iran, Islamic Republic Of`,
  IQ: t(i18n)`Iraq`,
  IE: t(i18n)`Ireland`,
  IM: t(i18n)`Isle Of Man`,
  IL: t(i18n)`Israel`,
  IT: t(i18n)`Italy`,
  JM: t(i18n)`Jamaica`,
  JP: t(i18n)`Japan`,
  JE: t(i18n)`Jersey`,
  JO: t(i18n)`Jordan`,
  KZ: t(i18n)`Kazakhstan`,
  KE: t(i18n)`Kenya`,
  KI: t(i18n)`Kiribati`,
  KR: t(i18n)`Korea`,
  KP: t(i18n)`North Korea`,
  KW: t(i18n)`Kuwait`,
  KG: t(i18n)`Kyrgyzstan`,
  LA: t(i18n)`Lao People"s Democratic Republic`,
  LV: t(i18n)`Latvia`,
  LB: t(i18n)`Lebanon`,
  LS: t(i18n)`Lesotho`,
  LR: t(i18n)`Liberia`,
  LY: t(i18n)`Libyan Arab Jamahiriya`,
  LI: t(i18n)`Liechtenstein`,
  LT: t(i18n)`Lithuania`,
  LU: t(i18n)`Luxembourg`,
  MO: t(i18n)`Macao`,
  MK: t(i18n)`Macedonia`,
  MG: t(i18n)`Madagascar`,
  MW: t(i18n)`Malawi`,
  MY: t(i18n)`Malaysia`,
  MV: t(i18n)`Maldives`,
  ML: t(i18n)`Mali`,
  MT: t(i18n)`Malta`,
  MH: t(i18n)`Marshall Islands`,
  MQ: t(i18n)`Martinique`,
  MR: t(i18n)`Mauritania`,
  MU: t(i18n)`Mauritius`,
  YT: t(i18n)`Mayotte`,
  MX: t(i18n)`Mexico`,
  FM: t(i18n)`Micronesia, Federated States Of`,
  MD: t(i18n)`Moldova`,
  MC: t(i18n)`Monaco`,
  MN: t(i18n)`Mongolia`,
  MS: t(i18n)`Montserrat`,
  MA: t(i18n)`Morocco`,
  MZ: t(i18n)`Mozambique`,
  MM: t(i18n)`Myanmar`,
  NA: t(i18n)`Namibia`,
  NR: t(i18n)`Nauru`,
  NP: t(i18n)`Nepal`,
  NL: t(i18n)`Netherlands`,
  AN: t(i18n)`Netherlands Antilles`,
  NC: t(i18n)`New Caledonia`,
  NZ: t(i18n)`New Zealand`,
  NI: t(i18n)`Nicaragua`,
  NE: t(i18n)`Niger`,
  NG: t(i18n)`Nigeria`,
  NU: t(i18n)`Niue`,
  NF: t(i18n)`Norfolk Island`,
  MP: t(i18n)`Northern Mariana Islands`,
  NO: t(i18n)`Norway`,
  OM: t(i18n)`Oman`,
  PK: t(i18n)`Pakistan`,
  PW: t(i18n)`Palau`,
  PS: t(i18n)`Palestinian Territory, Occupied`,
  PA: t(i18n)`Panama`,
  PG: t(i18n)`Papua New Guinea`,
  PY: t(i18n)`Paraguay`,
  PE: t(i18n)`Peru`,
  PH: t(i18n)`Philippines`,
  PN: t(i18n)`Pitcairn`,
  PL: t(i18n)`Poland`,
  PT: t(i18n)`Portugal`,
  PR: t(i18n)`Puerto Rico`,
  QA: t(i18n)`Qatar`,
  RE: t(i18n)`Reunion`,
  RO: t(i18n)`Romania`,
  RU: t(i18n)`Russian Federation`,
  RW: t(i18n)`Rwanda`,
  SH: t(i18n)`Saint Helena`,
  KN: t(i18n)`Saint Kitts And Nevis`,
  LC: t(i18n)`Saint Lucia`,
  PM: t(i18n)`Saint Pierre And Miquelon`,
  VC: t(i18n)`Saint Vincent And Grenadines`,
  WS: t(i18n)`Samoa`,
  SM: t(i18n)`San Marino`,
  ST: t(i18n)`Sao Tome And Principe`,
  SA: t(i18n)`Saudi Arabia`,
  CS: t(i18n)`Serbia and Montenegro`,
  SN: t(i18n)`Senegal`,
  SC: t(i18n)`Seychelles`,
  SL: t(i18n)`Sierra Leone`,
  SG: t(i18n)`Singapore`,
  SK: t(i18n)`Slovakia`,
  SI: t(i18n)`Slovenia`,
  SB: t(i18n)`Solomon Islands`,
  SO: t(i18n)`Somalia`,
  ZA: t(i18n)`South Africa`,
  GS: t(i18n)`South Georgia And Sandwich Isl.`,
  ES: t(i18n)`Spain`,
  LK: t(i18n)`Sri Lanka`,
  SD: t(i18n)`Sudan`,
  SR: t(i18n)`Suriname`,
  SJ: t(i18n)`Svalbard And Jan Mayen`,
  SZ: t(i18n)`Swaziland`,
  SE: t(i18n)`Sweden`,
  CH: t(i18n)`Switzerland`,
  SY: t(i18n)`Syrian Arab Republic`,
  TW: t(i18n)`Taiwan`,
  TJ: t(i18n)`Tajikistan`,
  TZ: t(i18n)`Tanzania`,
  TH: t(i18n)`Thailand`,
  TL: t(i18n)`Timor-Leste`,
  TG: t(i18n)`Togo`,
  TK: t(i18n)`Tokelau`,
  TO: t(i18n)`Tonga`,
  TT: t(i18n)`Trinidad And Tobago`,
  TN: t(i18n)`Tunisia`,
  TR: t(i18n)`Turkey`,
  TM: t(i18n)`Turkmenistan`,
  TC: t(i18n)`Turks And Caicos Islands`,
  TV: t(i18n)`Tuvalu`,
  UG: t(i18n)`Uganda`,
  UA: t(i18n)`Ukraine`,
  AE: t(i18n)`United Arab Emirates`,
  GB: t(i18n)`United Kingdom`,
  US: t(i18n)`United States`,
  UM: t(i18n)`United States Outlying Islands`,
  UY: t(i18n)`Uruguay`,
  UZ: t(i18n)`Uzbekistan`,
  VU: t(i18n)`Vanuatu`,
  VE: t(i18n)`Venezuela`,
  VN: t(i18n)`Vietnam`,
  VG: t(i18n)`Virgin Islands, British`,
  VI: t(i18n)`Virgin Islands, U.S.`,
  WF: t(i18n)`Wallis And Futuna`,
  EH: t(i18n)`Western Sahara`,
  YE: t(i18n)`Yemen`,
  ZM: t(i18n)`Zambia`,
  ZW: t(i18n)`Zimbabwe`,
});

type AllowedCountries = components['schemas']['AllowedCountries'];
