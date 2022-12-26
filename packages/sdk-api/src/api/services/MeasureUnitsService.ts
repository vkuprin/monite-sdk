import { OpenAPIConfig } from '../OpenAPI';
import { CancelablePromise } from '../CancelablePromise';
import { ReceivablesUnitListResponse } from '../models/ReceivablesUnitListResponse';
import { request as __request } from '../request';

export default class ProductsService {
  openapiConfig: Partial<OpenAPIConfig>;

  constructor({ config }: { config: Partial<OpenAPIConfig> }) {
    this.openapiConfig = config;
  }

  /**
   * Get Units
   * @param xMoniteEntityId The ID of the entity that owns the requested resource.
   * @returns ReceivablesUnitListResponse Successful Response
   * @throws ApiError
   */
  public getUnits(
    xMoniteEntityId: string
  ): CancelablePromise<ReceivablesUnitListResponse> {
    return __request(
      {
        method: 'GET',
        url: '/measure_units',
        headers: {
          'x-monite-entity-id': xMoniteEntityId,
        },
        errors: {
          400: `Bad Request`,
          401: `Unauthorized`,
          403: `Forbidden`,
          405: `Method Not Allowed`,
          422: `Validation Error`,
          500: `Internal Server Error`,
        },
      },
      this.openapiConfig
    );
  }
}
