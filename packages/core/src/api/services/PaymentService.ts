import type { CancelablePromise } from '../CancelablePromise';
import { OpenAPIConfig } from '../OpenAPI';
import { request as __request } from '../request';
import type { ReceivableResponse } from '../models/ReceivableResponse';
import { PaymentMethodsEnum } from '../models/PaymentMethodsEnum';
import type { PaymentMethodsCalculateFeePayload } from '../models/PaymentMethodsCalculateFeePayload';
import type { PaymentMethodsCalculateFeeResponse } from '../models/PaymentMethodsCalculateFeeResponse';
// import type { PayPaymentLinkPayload } from '../models/PaymentLinkPayload';
import type { PaymentLinkPayResponse } from '../models/PaymentLinkPayResponse';
export default class PaymentService {
  openapiConfig: Partial<OpenAPIConfig>;

  constructor({ config }: { config: Partial<OpenAPIConfig> }) {
    this.openapiConfig = config;
  }
  /**
   * Get Receivable Data by ID
   * @returns ReceivableResponse Successful Response
   * @throws ApiError
   */
  public getPaymentReceivableById(
    id: string
  ): CancelablePromise<ReceivableResponse> {
    return __request(
      {
        method: 'GET',
        url: `/payment_pages?receivable_id=${id}`,
        errors: {
          400: `Bad Request`,
          401: `Unauthorized`,
          403: `Forbidden`,
          404: `Not found`,
          405: `Method Not Allowed`,
          422: `Validation Error`,
          500: `Internal Server Error`,
        },
      },
      this.openapiConfig
    );
  }

  /**
   * Init Payment Link
   * Calculate fee for payment_method from payment_link
   * @param paymentMethod
   * @param requestBody
   * @returns PaymentMethodsCalculateFeeResponse Successful Response
   * @throws ApiError
   */

  public getFeeByPaymentMethod(
    paymentMethod: PaymentMethodsEnum,
    requestBody: PaymentMethodsCalculateFeePayload
  ): CancelablePromise<PaymentMethodsCalculateFeeResponse> {
    return __request(
      {
        method: 'POST',
        url: `/payment_methods/${paymentMethod}/calculate_fee`,
        body: requestBody,
        mediaType: 'application/json',
        errors: {
          400: `Bad Request`,
          401: `Unauthorized`,
          403: `Forbidden`,
          404: `Not found`,
          405: `Method Not Allowed`,
          406: `Not Acceptable`,
          409: `Biz logic error`,
          416: `Requested Range Not Satisfiable`,
          422: `Validation Error`,
          500: `Internal Server Error`,
        },
      },
      this.openapiConfig
    );
  }

  /**
   * Pay Payment Link
   * @param paymentLinkId
   * @param requestBody
   * @returns PaymentLinkPayResponse Successful Response
   * @throws ApiError
   */
  public payByPaymentLinkId(
    paymentLinkId: string,
    requestBody: { payment_method: string }
  ): CancelablePromise<PaymentLinkPayResponse> {
    return __request(
      {
        method: 'POST',
        url: `/payment_links/${paymentLinkId}/pay`,
        body: requestBody,
        mediaType: 'application/json',
        errors: {
          400: `Bad Request`,
          401: `Unauthorized`,
          403: `Forbidden`,
          404: `Not found`,
          405: `Method Not Allowed`,
          406: `Not Acceptable`,
          409: `Biz logic error`,
          416: `Requested Range Not Satisfiable`,
          422: `Validation Error`,
          500: `Internal Server Error`,
        },
      },
      this.openapiConfig
    );
  }
}