import { SortOrderEnum } from '@team-monite/ui-kit-react';
import {
  ReceivableCursorFields,
  ReceivablesStatusEnum,
} from '@team-monite/sdk-api';
import {
  FILTER_TYPE_SEARCH,
  FILTER_TYPE_STATUS,
  FILTER_TYPE_CUSTOMER,
} from './consts';

export type FilterTypes = {
  [FILTER_TYPE_SEARCH]?: string | null;
  [FILTER_TYPE_STATUS]?: ReceivablesStatusEnum | null;
  [FILTER_TYPE_CUSTOMER]?: string | null;
};

export type Sort = {
  sort: ReceivableCursorFields;
  order: SortOrderEnum;
};

export type FilterValue = ReceivablesStatusEnum | string | null;
