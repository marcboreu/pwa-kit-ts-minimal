/**
 * [Shopper Customers](https://developer.salesforce.com/docs/commerce/commerce-api/references?meta=shopper-customers:Summary)
 * ==================================
 *
 * *Allow customers to manage their own profiles and product lists.*<br />
 *
 * Simple example:
 *
 * ```typescript
 *   import { ShopperCustomers } from "commerce-sdk-isomorphic";
 *
 *   const clientConfig = {
 *     parameters: {
 *       clientId: "XXXXXX",
 *       organizationId: "XXXX",
 *       shortCode: "XXX",
 *       siteId: "XX"
 *     }
 *   };
 *   const shopperCustomersClient = new ShopperCustomers(clientConfig);
 * ```
 *
 * <span style="font-size:.7em; display:block; text-align: right">
 * API Version: 0.0.43<br />
 * Last Updated: <br />
 * </span>
 
 *
 
 */
declare class ShopperCustomers<
    ConfigParameters extends ShopperCustomersParameters & Record<string, unknown>
> {
    // baseUri is not required on ClientConfig, but we know that we provide one in the class constructor
    clientConfig: ClientConfig<ConfigParameters> & {
        baseUri: string
    }
    static readonly defaultBaseUri =
        'https://{shortCode}.api.commercecloud.salesforce.com/customer/shopper-customers/{version}'
    constructor(config: ClientConfigInit<ConfigParameters>)
    /**
     * Registers a new customer. The mandatory data are the credentials, profile last name, and email. This requires a JSON Web Token (JWT) which needs to be obtained using the POST /customers/auth API with type \"guest\", or from the Shopper Login (SLAS) API.
     *
     * If you would like to get a raw Response object use the other registerCustomer function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param body - The data to send as the request body.
     *
     * @returns A promise of type Customer.
     *
     */
    registerCustomer(
        options: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
            body: CustomerRegistration
        }>
    ): Promise<Customer>
    /**
     * Registers a new customer. The mandatory data are the credentials, profile last name, and email. This requires a JSON Web Token (JWT) which needs to be obtained using the POST /customers/auth API with type \"guest\", or from the Shopper Login (SLAS) API.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param body - The data to send as the request body.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type Customer otherwise.
     *
     */
    registerCustomer<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
            body: CustomerRegistration
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : Customer>
    /**
     * 🚨 **DEPRECATION NOTICE**
     
     To enhance the security and availability of Salesforce services, this endpoint is now **deprecated**, and **we plan to remove it in mid-2022**. This endpoint is not available to new customers, and we discourage existing customers from using it. Instead, we strongly recommend using the endpoints of the [Shopper Login and API Access Service](https://developer.salesforce.com/docs/commerce/commerce-api/references?meta=shopper-login:Summary) (SLAS) because they meet our rigorous standards for security and availability.
     
     ---
     
     Log the user out.
     *
     * If you would like to get a raw Response object use the other invalidateCustomerAuth function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     *
     * @returns A promise of type void.
     *
     */
    invalidateCustomerAuth(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>
    ): Promise<void>
    /**
     * 🚨 **DEPRECATION NOTICE**
     
     To enhance the security and availability of Salesforce services, this endpoint is now **deprecated**, and **we plan to remove it in mid-2022**. This endpoint is not available to new customers, and we discourage existing customers from using it. Instead, we strongly recommend using the endpoints of the [Shopper Login and API Access Service](https://developer.salesforce.com/docs/commerce/commerce-api/references?meta=shopper-login:Summary) (SLAS) because they meet our rigorous standards for security and availability.
     
     ---
     
     Log the user out.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
     *
     */
    invalidateCustomerAuth<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : void>
    /**
     * 🚨 **DEPRECATION NOTICE**
     
     To enhance the security and availability of Salesforce services, this endpoint is now **deprecated**, and **we plan to remove it in mid-2022**. This endpoint is not available to new customers, and we discourage existing customers from using it. Instead, we strongly recommend using the endpoints of the [Shopper Login and API Access Service](https://developer.salesforce.com/docs/commerce/commerce-api/references?meta=shopper-login:Summary) (SLAS) because they meet our rigorous standards for security and availability.
     
     ---
     
     Obtains a new JSON Web Token (JWT) for a guest or registered
     customer. Tokens are returned as an HTTP `Authorization: Bearer` response
     header entry. The following kinds of request are supported, as specified by the
     `type`:
     
     - `\{\"type\": \"guest\"\}` → Creates a guest (non-authenticated) customer and returns a token for the customer.
     - `\{\"type\": \"credentials\"\}` → Authenticates credentials passed in the `HTTP Authorization: Basic` request header and returns a token for a successfully authenticated customer (otherwise, it throws an `AuthenticationFailedException`). This type of request also updates profile attributes for the customer (for example, `last-visited`) and handles the maximum number of failed login attempts.
     - `\{\"type\": \"refresh\"\}` → Examines the token passed in the `HTTP Authorization: Bearer` request header. If valid, a new token is returned with an updated expiry time.
     
     The JWT contains 3 sections:
     
     1. Header: Specifies token type and algorithm used.
     2. Payload: Contains customer information, client ID, issue, and expiration time.
     3. Signature: Records the token signature.
     
     A token is created and returned to the client whenever a registered customer logs in (`credentials` type) or a guest customer requests it (`guest` type). The token is returned in the response header as `Authorization: Bearer --token--`.
     
     The client has to include the token in the request header as `Authorization: Bearer --token--` in any follow-up request. The server declines any follow-up requests without a token. The server declines any requests that cannot be verified based on the token signature or expiration time. A token nearing its expiration time should be exchanged for a new one (`refresh` type).
     *
     * If you would like to get a raw Response object use the other authorizeCustomer function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param clientId - Client ID for application identification
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param body - The data to send as the request body.
     *
     * @returns A promise of type Customer.
     *
     */
    authorizeCustomer(
        options: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    clientId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
            body: AuthRequest
        }>
    ): Promise<Customer>
    /**
     * 🚨 **DEPRECATION NOTICE**
     
     To enhance the security and availability of Salesforce services, this endpoint is now **deprecated**, and **we plan to remove it in mid-2022**. This endpoint is not available to new customers, and we discourage existing customers from using it. Instead, we strongly recommend using the endpoints of the [Shopper Login and API Access Service](https://developer.salesforce.com/docs/commerce/commerce-api/references?meta=shopper-login:Summary) (SLAS) because they meet our rigorous standards for security and availability.
     
     ---
     
     Obtains a new JSON Web Token (JWT) for a guest or registered
     customer. Tokens are returned as an HTTP `Authorization: Bearer` response
     header entry. The following kinds of request are supported, as specified by the
     `type`:
     
     - `\{\"type\": \"guest\"\}` → Creates a guest (non-authenticated) customer and returns a token for the customer.
     - `\{\"type\": \"credentials\"\}` → Authenticates credentials passed in the `HTTP Authorization: Basic` request header and returns a token for a successfully authenticated customer (otherwise, it throws an `AuthenticationFailedException`). This type of request also updates profile attributes for the customer (for example, `last-visited`) and handles the maximum number of failed login attempts.
     - `\{\"type\": \"refresh\"\}` → Examines the token passed in the `HTTP Authorization: Bearer` request header. If valid, a new token is returned with an updated expiry time.
     
     The JWT contains 3 sections:
     
     1. Header: Specifies token type and algorithm used.
     2. Payload: Contains customer information, client ID, issue, and expiration time.
     3. Signature: Records the token signature.
     
     A token is created and returned to the client whenever a registered customer logs in (`credentials` type) or a guest customer requests it (`guest` type). The token is returned in the response header as `Authorization: Bearer --token--`.
     
     The client has to include the token in the request header as `Authorization: Bearer --token--` in any follow-up request. The server declines any follow-up requests without a token. The server declines any requests that cannot be verified based on the token signature or expiration time. A token nearing its expiration time should be exchanged for a new one (`refresh` type).
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param clientId - Client ID for application identification
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param body - The data to send as the request body.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type Customer otherwise.
     *
     */
    authorizeCustomer<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    clientId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
            body: AuthRequest
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : Customer>
    /**
     * 🚨 **DEPRECATION NOTICE**
     
     To enhance the security and availability of Salesforce services, this endpoint is now **deprecated**, and **we plan to remove it in mid-2022**. This endpoint is not available to new customers, and we discourage existing customers from using it. Instead, we strongly recommend using the endpoints of the [Shopper Login and API Access Service](https://developer.salesforce.com/docs/commerce/commerce-api/references?meta=shopper-login:Summary) (SLAS) because they meet our rigorous standards for security and availability.
     
     ---
     
     Obtain the JSON Web Token (JWT) for registered customers whose credentials are stored using a third party system. Accepts `loginId` and
     `clientId`, returns a customer object in the response body and the JWT generated against the `clientId` in the response header.
     *
     * If you would like to get a raw Response object use the other authorizeTrustedSystem function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param body - The data to send as the request body.
     *
     * @returns A promise of type Customer.
     *
     */
    authorizeTrustedSystem(
        options: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
            body: TrustedSystemAuthRequest
        }>
    ): Promise<Customer>
    /**
     * 🚨 **DEPRECATION NOTICE**
     
     To enhance the security and availability of Salesforce services, this endpoint is now **deprecated**, and **we plan to remove it in mid-2022**. This endpoint is not available to new customers, and we discourage existing customers from using it. Instead, we strongly recommend using the endpoints of the [Shopper Login and API Access Service](https://developer.salesforce.com/docs/commerce/commerce-api/references?meta=shopper-login:Summary) (SLAS) because they meet our rigorous standards for security and availability.
     
     ---
     
     Obtain the JSON Web Token (JWT) for registered customers whose credentials are stored using a third party system. Accepts `loginId` and
     `clientId`, returns a customer object in the response body and the JWT generated against the `clientId` in the response header.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param body - The data to send as the request body.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type Customer otherwise.
     *
     */
    authorizeTrustedSystem<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
            body: TrustedSystemAuthRequest
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : Customer>
    /**
     * Reset customer password, after obtaining a reset token. This is the second step in the reset customer password flow, where a customer password is reset by providing the new credentials along with a reset token. This call should be preceded by a call to the /create-reset-token endpoint.
     *
     * If you would like to get a raw Response object use the other resetPassword function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param body - The data to send as the request body.
     *
     * @returns A promise of type void.
     *
     */
    resetPassword(
        options: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
            body: ResetPasswordRequest
        }>
    ): Promise<void>
    /**
     * Reset customer password, after obtaining a reset token. This is the second step in the reset customer password flow, where a customer password is reset by providing the new credentials along with a reset token. This call should be preceded by a call to the /create-reset-token endpoint.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param body - The data to send as the request body.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
     *
     */
    resetPassword<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
            body: ResetPasswordRequest
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : void>
    /**
     * Get reset password token. This is the first step in the reset customer password flow, where a password reset token is requested for future use to reset a customer password. This call should be followed by a call to the /reset endpoint.
     *
     * If you would like to get a raw Response object use the other getResetPasswordToken function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param body - The data to send as the request body.
     *
     * @returns A promise of type ResetPasswordToken.
     *
     */
    getResetPasswordToken(
        options: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
            body: ResetPasswordTokenRequest
        }>
    ): Promise<ResetPasswordToken>
    /**
     * Get reset password token. This is the first step in the reset customer password flow, where a password reset token is requested for future use to reset a customer password. This call should be followed by a call to the /reset endpoint.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param body - The data to send as the request body.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type ResetPasswordToken otherwise.
     *
     */
    getResetPasswordToken<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
            body: ResetPasswordTokenRequest
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : ResetPasswordToken>
    /**
     * Registers a new external profile for a customer. This endpoint accepts a guest customer ShopperToken (JWT) only.
     *
     * If you would like to get a raw Response object use the other registerExternalProfile function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param body - The data to send as the request body.
     *
     * @returns A promise of type CustomerExternalProfile.
     *
     */
    registerExternalProfile(
        options: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
            body: CustomerExtProfileRequest
        }>
    ): Promise<CustomerExternalProfile>
    /**
     * Registers a new external profile for a customer. This endpoint accepts a guest customer ShopperToken (JWT) only.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param body - The data to send as the request body.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type CustomerExternalProfile otherwise.
     *
     */
    registerExternalProfile<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
            body: CustomerExtProfileRequest
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : CustomerExternalProfile>
    /**
     * Gets the new external profile for a customer. This endpoint accepts a registered customer ShopperToken (JWT) only.
     *
     * If you would like to get a raw Response object use the other getExternalProfile function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param externalId - The External ID of the customer.
     * @param authenticationProviderId - The authentication Provider Id.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     *
     * @returns A promise of type CustomerExternalProfile.
     *
     */
    getExternalProfile(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    externalId: string
                    authenticationProviderId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>
    ): Promise<CustomerExternalProfile>
    /**
     * Gets the new external profile for a customer. This endpoint accepts a registered customer ShopperToken (JWT) only.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param externalId - The External ID of the customer.
     * @param authenticationProviderId - The authentication Provider Id.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type CustomerExternalProfile otherwise.
     *
     */
    getExternalProfile<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    externalId: string
                    authenticationProviderId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : CustomerExternalProfile>
    /**
     * Gets a customer with all existing addresses and payment instruments associated with the requested customer. This endpoint accepts a registered customer ShopperToken (JWT) only.
     *
     * If you would like to get a raw Response object use the other getCustomer function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     *
     * @returns A promise of type Customer.
     *
     */
    getCustomer(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>
    ): Promise<Customer>
    /**
     * Gets a customer with all existing addresses and payment instruments associated with the requested customer. This endpoint accepts a registered customer ShopperToken (JWT) only.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type Customer otherwise.
     *
     */
    getCustomer<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : Customer>
    /**
     * Updates a customer. This endpoint accepts a registered customer ShopperToken (JWT) only.
     *
     * If you would like to get a raw Response object use the other updateCustomer function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param body - The data to send as the request body.
     *
     * @returns A promise of type Customer.
     *
     */
    updateCustomer(
        options: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
            body: Customer
        }>
    ): Promise<Customer>
    /**
     * Updates a customer. This endpoint accepts a registered customer ShopperToken (JWT) only.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param body - The data to send as the request body.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type Customer otherwise.
     *
     */
    updateCustomer<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
            body: Customer
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : Customer>
    /**
     * Creates a new address with the given name for the given customer. This endpoint accepts a registered customer ShopperToken (JWT) only.
     *
     * If you would like to get a raw Response object use the other createCustomerAddress function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param body - The data to send as the request body.
     *
     * @returns A promise of type CustomerAddress.
     *
     */
    createCustomerAddress(
        options: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
            body: CustomerAddress
        }>
    ): Promise<CustomerAddress>
    /**
     * Creates a new address with the given name for the given customer. This endpoint accepts a registered customer ShopperToken (JWT) only.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param body - The data to send as the request body.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type CustomerAddress otherwise.
     *
     */
    createCustomerAddress<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
            body: CustomerAddress
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : CustomerAddress>
    /**
     * Retrieves a customer's address by address name. This endpoint accepts a registered customer ShopperToken (JWT) only.
     *
     * If you would like to get a raw Response object use the other getCustomerAddress function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param addressName - The name of the address to update.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     *
     * @returns A promise of type CustomerAddress.
     *
     */
    getCustomerAddress(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    addressName: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>
    ): Promise<CustomerAddress>
    /**
     * Retrieves a customer's address by address name. This endpoint accepts a registered customer ShopperToken (JWT) only.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param addressName - The name of the address to update.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type CustomerAddress otherwise.
     *
     */
    getCustomerAddress<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    addressName: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : CustomerAddress>
    /**
     * Deletes a customer's address by address name. This endpoint accepts a registered customer ShopperToken (JWT) only.
     *
     * If you would like to get a raw Response object use the other removeCustomerAddress function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param addressName - The name of the address to update.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     *
     * @returns A promise of type void.
     *
     */
    removeCustomerAddress(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    addressName: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>
    ): Promise<void>
    /**
     * Deletes a customer's address by address name. This endpoint accepts a registered customer ShopperToken (JWT) only.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param addressName - The name of the address to update.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
     *
     */
    removeCustomerAddress<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    addressName: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : void>
    /**
     * Updates a customer's address by address name. This endpoint accepts a registered customer ShopperToken (JWT) only.
     *
     * If you would like to get a raw Response object use the other updateCustomerAddress function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param addressName - The name of the address to update.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param body - The data to send as the request body.
     *
     * @returns A promise of type CustomerAddress.
     *
     */
    updateCustomerAddress(
        options: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    addressName: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
            body: CustomerAddress
        }>
    ): Promise<CustomerAddress>
    /**
     * Updates a customer's address by address name. This endpoint accepts a registered customer ShopperToken (JWT) only.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param addressName - The name of the address to update.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param body - The data to send as the request body.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type CustomerAddress otherwise.
     *
     */
    updateCustomerAddress<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    addressName: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
            body: CustomerAddress
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : CustomerAddress>
    /**
     * Gets the baskets of a customer. This endpoint accepts a registered customer ShopperToken (JWT) or a guest customer ShopperToken.
     *
     * If you would like to get a raw Response object use the other getCustomerBaskets function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     *
     * @returns A promise of type BasketsResult.
     *
     */
    getCustomerBaskets(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>
    ): Promise<BasketsResult$0>
    /**
     * Gets the baskets of a customer. This endpoint accepts a registered customer ShopperToken (JWT) or a guest customer ShopperToken.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type BasketsResult otherwise.
     *
     */
    getCustomerBaskets<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : BasketsResult$0>
    /**
     * Returns a pageable list of all customer's orders. The default page size is 10. This endpoint accepts a registered customer ShopperToken (JWT) or a guest customer ShopperToken.
     *
     * If you would like to get a raw Response object use the other getCustomerOrders function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param crossSites -
     * @param from -
     * @param until -
     * @param status -
     * @param siteId -
     * @param offset -
     * @param limit - Maximum records to retrieve per request, not to exceed 50. Defaults to 10.
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     *
     * @returns A promise of type CustomerOrderResult.
     *
     */
    getCustomerOrders(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    crossSites?: boolean
                    from?: string
                    until?: string
                    status?: string
                    siteId: string
                    offset?: any
                    limit?: number
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>
    ): Promise<CustomerOrderResult>
    /**
     * Returns a pageable list of all customer's orders. The default page size is 10. This endpoint accepts a registered customer ShopperToken (JWT) or a guest customer ShopperToken.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param crossSites -
     * @param from -
     * @param until -
     * @param status -
     * @param siteId -
     * @param offset -
     * @param limit - Maximum records to retrieve per request, not to exceed 50. Defaults to 10.
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type CustomerOrderResult otherwise.
     *
     */
    getCustomerOrders<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    crossSites?: boolean
                    from?: string
                    until?: string
                    status?: string
                    siteId: string
                    offset?: any
                    limit?: number
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : CustomerOrderResult>
    /**
     * Updates the customer's password. This endpoint accepts a registered customer ShopperToken (JWT) only.
     *
     * If you would like to get a raw Response object use the other updateCustomerPassword function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param body - The data to send as the request body.
     *
     * @returns A promise of type void.
     *
     */
    updateCustomerPassword(
        options: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
            body: PasswordChangeRequest
        }>
    ): Promise<void>
    /**
     * Updates the customer's password. This endpoint accepts a registered customer ShopperToken (JWT) only.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param body - The data to send as the request body.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
     *
     */
    updateCustomerPassword<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
            body: PasswordChangeRequest
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : void>
    /**
     * Adds a payment instrument to the customer information. This endpoint accepts a registered customer ShopperToken (JWT) only.
     *
     * If you would like to get a raw Response object use the other createCustomerPaymentInstrument function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param body - The data to send as the request body.
     *
     * @returns A promise of type CustomerPaymentInstrument.
     *
     */
    createCustomerPaymentInstrument(
        options: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
            body: CustomerPaymentInstrumentRequest
        }>
    ): Promise<CustomerPaymentInstrument>
    /**
     * Adds a payment instrument to the customer information. This endpoint accepts a registered customer ShopperToken (JWT) only.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param body - The data to send as the request body.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type CustomerPaymentInstrument otherwise.
     *
     */
    createCustomerPaymentInstrument<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
            body: CustomerPaymentInstrumentRequest
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : CustomerPaymentInstrument>
    /**
     * Deletes a customer's payment instrument. This endpoint accepts a registered customer ShopperToken (JWT) only.
     *
     * If you would like to get a raw Response object use the other deleteCustomerPaymentInstrument function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param paymentInstrumentId - The ID of the payment instrument to be retrievedCustomer.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     *
     * @returns A promise of type void.
     *
     */
    deleteCustomerPaymentInstrument(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    paymentInstrumentId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>
    ): Promise<void>
    /**
     * Deletes a customer's payment instrument. This endpoint accepts a registered customer ShopperToken (JWT) only.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param paymentInstrumentId - The ID of the payment instrument to be retrievedCustomer.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
     *
     */
    deleteCustomerPaymentInstrument<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    paymentInstrumentId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : void>
    /**
     * Retrieves a customer's payment instrument by its ID. This endpoint accepts a registered customer ShopperToken (JWT) only.
     *
     * If you would like to get a raw Response object use the other getCustomerPaymentInstrument function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param paymentInstrumentId - The ID of the payment instrument to be retrievedCustomer.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     *
     * @returns A promise of type CustomerPaymentInstrument.
     *
     */
    getCustomerPaymentInstrument(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    paymentInstrumentId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>
    ): Promise<CustomerPaymentInstrument>
    /**
     * Retrieves a customer's payment instrument by its ID. This endpoint accepts a registered customer ShopperToken (JWT) only.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param paymentInstrumentId - The ID of the payment instrument to be retrievedCustomer.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type CustomerPaymentInstrument otherwise.
     *
     */
    getCustomerPaymentInstrument<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    paymentInstrumentId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : CustomerPaymentInstrument>
    /**
     * Returns all customer product lists. This endpoint accepts a registered customer ShopperToken (JWT) or a guest customer ShopperToken.
     *
     * If you would like to get a raw Response object use the other getCustomerProductLists function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     *
     * @returns A promise of type CustomerProductListResult.
     *
     */
    getCustomerProductLists(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>
    ): Promise<CustomerProductListResult>
    /**
     * Returns all customer product lists. This endpoint accepts a registered customer ShopperToken (JWT) or a guest customer ShopperToken.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type CustomerProductListResult otherwise.
     *
     */
    getCustomerProductLists<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : CustomerProductListResult>
    /**
     * Creates a customer product list. This endpoint accepts a registered customer ShopperToken (JWT) or a guest customer ShopperToken.
     *
     * If you would like to get a raw Response object use the other createCustomerProductList function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param body - The data to send as the request body.
     *
     * @returns A promise of type CustomerProductList.
     *
     */
    createCustomerProductList(
        options: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
            body: CustomerProductList
        }>
    ): Promise<CustomerProductList>
    /**
     * Creates a customer product list. This endpoint accepts a registered customer ShopperToken (JWT) or a guest customer ShopperToken.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param body - The data to send as the request body.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type CustomerProductList otherwise.
     *
     */
    createCustomerProductList<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
            body: CustomerProductList
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : CustomerProductList>
    /**
     * Deletes a customer product list. This endpoint accepts a registered customer ShopperToken (JWT) or a guest customer  ShopperToken.
     *
     * If you would like to get a raw Response object use the other deleteCustomerProductList function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param listId - The product list ID.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     *
     * @returns A promise of type void.
     *
     */
    deleteCustomerProductList(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    listId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>
    ): Promise<void>
    /**
     * Deletes a customer product list. This endpoint accepts a registered customer ShopperToken (JWT) or a guest customer  ShopperToken.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param listId - The product list ID.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
     *
     */
    deleteCustomerProductList<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    listId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : void>
    /**
     * Returns a customer product list of the given customer and the items in the list. This endpoint accepts a registered customer ShopperToken (JWT) or a guest customer ShopperToken.
     *
     * If you would like to get a raw Response object use the other getCustomerProductList function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param listId - The product list ID.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     *
     * @returns A promise of type CustomerProductList.
     *
     */
    getCustomerProductList(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    listId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>
    ): Promise<CustomerProductList>
    /**
     * Returns a customer product list of the given customer and the items in the list. This endpoint accepts a registered customer ShopperToken (JWT) or a guest customer ShopperToken.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param listId - The product list ID.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type CustomerProductList otherwise.
     *
     */
    getCustomerProductList<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    listId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : CustomerProductList>
    /**
     * Changes a product list. Changeable properties are the name, description, and if the list is public. This endpoint accepts a registered customer ShopperToken (JWT) or a guest customer ShopperToken.
     *
     * If you would like to get a raw Response object use the other updateCustomerProductList function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param listId - The product list ID.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param body - The data to send as the request body.
     *
     * @returns A promise of type CustomerProductList.
     *
     */
    updateCustomerProductList(
        options: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    listId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
            body: CustomerProductList
        }>
    ): Promise<CustomerProductList>
    /**
     * Changes a product list. Changeable properties are the name, description, and if the list is public. This endpoint accepts a registered customer ShopperToken (JWT) or a guest customer ShopperToken.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param listId - The product list ID.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param body - The data to send as the request body.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type CustomerProductList otherwise.
     *
     */
    updateCustomerProductList<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    listId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
            body: CustomerProductList
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : CustomerProductList>
    /**
     * Adds an item to the customer's product list. This endpoint accepts a registered customer ShopperToken (JWT) or a guest customer ShopperToken.
     
     Considered values from the request body are:
     
     - `type` → The type of the item to be added to the customer's product. Must be a valid type. Mandatory.
     list.
     - `priority` → The priority of the item to be added to the customer's product list.
     - `public` → The flag that determines whether the item to be added to the customer's product list is public.
     - `product_id` → The ID (SKU) of the product related to the item to be added to the customer's product list. A valid product ID, used for product item type only. Must be a valid product ID; otherwise, a `ProductListProductIdMissingException` or `ProductListProductNotFoundException` is thrown. Mandatory when item type is `product`.
     - `quantity` → Used for product item type only. This is the quantity of the item to be added to the customer's product list.
     
     You can also use a custom property of the form `c_\<CUSTOM_NAME\>`. The custom property must correspond to a custom attribute (`\<CUSTOM_NAME\>`) that is defined for `ProductListItem`. The value of this property must be valid for the type of custom attribute defined for `ProductListItem`.
     *
     * If you would like to get a raw Response object use the other createCustomerProductListItem function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param listId - The product list ID.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param body - The data to send as the request body.
     *
     * @returns A promise of type CustomerProductListItem.
     *
     */
    createCustomerProductListItem(
        options: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    listId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
            body: CustomerProductListItem
        }>
    ): Promise<CustomerProductListItem>
    /**
     * Adds an item to the customer's product list. This endpoint accepts a registered customer ShopperToken (JWT) or a guest customer ShopperToken.
     
     Considered values from the request body are:
     
     - `type` → The type of the item to be added to the customer's product. Must be a valid type. Mandatory.
     list.
     - `priority` → The priority of the item to be added to the customer's product list.
     - `public` → The flag that determines whether the item to be added to the customer's product list is public.
     - `product_id` → The ID (SKU) of the product related to the item to be added to the customer's product list. A valid product ID, used for product item type only. Must be a valid product ID; otherwise, a `ProductListProductIdMissingException` or `ProductListProductNotFoundException` is thrown. Mandatory when item type is `product`.
     - `quantity` → Used for product item type only. This is the quantity of the item to be added to the customer's product list.
     
     You can also use a custom property of the form `c_\<CUSTOM_NAME\>`. The custom property must correspond to a custom attribute (`\<CUSTOM_NAME\>`) that is defined for `ProductListItem`. The value of this property must be valid for the type of custom attribute defined for `ProductListItem`.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param listId - The product list ID.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param body - The data to send as the request body.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type CustomerProductListItem otherwise.
     *
     */
    createCustomerProductListItem<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    listId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
            body: CustomerProductListItem
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : CustomerProductListItem>
    /**
     * Removes an item from a customer product list. This endpoint accepts a registered customer ShopperToken (JWT) or a guest customer ShopperToken.
     *
     * If you would like to get a raw Response object use the other deleteCustomerProductListItem function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param listId - The product list ID.
     * @param itemId - The ID of the product list item to update.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     *
     * @returns A promise of type void.
     *
     */
    deleteCustomerProductListItem(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    listId: string
                    itemId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>
    ): Promise<void>
    /**
     * Removes an item from a customer product list. This endpoint accepts a registered customer ShopperToken (JWT) or a guest customer ShopperToken.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param listId - The product list ID.
     * @param itemId - The ID of the product list item to update.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
     *
     */
    deleteCustomerProductListItem<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    listId: string
                    itemId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : void>
    /**
     * Returns an item of a customer product list and the actual product details like image, availability and price. This endpoint accepts a registered customer ShopperToken (JWT) or a guest customer ShopperToken.
     *
     * If you would like to get a raw Response object use the other getCustomerProductListItem function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param listId - The product list ID.
     * @param itemId - The ID of the product list item to update.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     *
     * @returns A promise of type CustomerProductListItem.
     *
     */
    getCustomerProductListItem(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    listId: string
                    itemId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>
    ): Promise<CustomerProductListItem>
    /**
     * Returns an item of a customer product list and the actual product details like image, availability and price. This endpoint accepts a registered customer ShopperToken (JWT) or a guest customer ShopperToken.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param listId - The product list ID.
     * @param itemId - The ID of the product list item to update.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type CustomerProductListItem otherwise.
     *
     */
    getCustomerProductListItem<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    listId: string
                    itemId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : CustomerProductListItem>
    /**
     * Updates an item of a customer's product list. This endpoint accepts a registered customer ShopperToken (JWT) or a guest customer ShopperToken.
     Considered values from the request body are:
     
     priority: This is the priority of the customer's product list item.
     public: This is the flag whether the customer's product list item is public.
     quantity: This is the quantity of
     the customer's product list item. Used for product item type only.
     custom properties in the form c_\<CUSTOM_NAME\>: The custom property
     must correspond to a custom attribute (\<CUSTOM_NAME\>) defined for ProductListItem.
     The value of this property must be valid for the type of custom attribute defined for ProductListItem.
     *
     * If you would like to get a raw Response object use the other updateCustomerProductListItem function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param listId - The product list ID.
     * @param itemId - The ID of the product list item to update.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param body - The data to send as the request body.
     *
     * @returns A promise of type CustomerProductListItem.
     *
     */
    updateCustomerProductListItem(
        options: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    listId: string
                    itemId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
            body: CustomerProductListItem
        }>
    ): Promise<CustomerProductListItem>
    /**
     * Updates an item of a customer's product list. This endpoint accepts a registered customer ShopperToken (JWT) or a guest customer ShopperToken.
     Considered values from the request body are:
     
     priority: This is the priority of the customer's product list item.
     public: This is the flag whether the customer's product list item is public.
     quantity: This is the quantity of
     the customer's product list item. Used for product item type only.
     custom properties in the form c_\<CUSTOM_NAME\>: The custom property
     must correspond to a custom attribute (\<CUSTOM_NAME\>) defined for ProductListItem.
     The value of this property must be valid for the type of custom attribute defined for ProductListItem.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param customerId - The customer ID.
     * @param listId - The product list ID.
     * @param itemId - The ID of the product list item to update.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param body - The data to send as the request body.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type CustomerProductListItem otherwise.
     *
     */
    updateCustomerProductListItem<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    customerId: string
                    listId: string
                    itemId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
            body: CustomerProductListItem
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : CustomerProductListItem>
    /**
     * Retrieves all public product lists as defined by the given search term (for example, email OR first name and last name). This endpoint accepts a registered customer ShopperToken (JWT) or a guest customer ShopperToken.
     *
     * If you would like to get a raw Response object use the other getPublicProductListsBySearchTerm function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param email - The email address of the customer the product lists belong to.
     * @param firstName - The first name of the customer the product lists belong to.
     * @param lastName - The last name of the customer the product lists belong to.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     *
     * @returns A promise of type PublicProductListResult.
     *
     */
    getPublicProductListsBySearchTerm(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    email?: string
                    firstName?: string
                    lastName?: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>
    ): Promise<PublicProductListResult>
    /**
     * Retrieves all public product lists as defined by the given search term (for example, email OR first name and last name). This endpoint accepts a registered customer ShopperToken (JWT) or a guest customer ShopperToken.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param email - The email address of the customer the product lists belong to.
     * @param firstName - The first name of the customer the product lists belong to.
     * @param lastName - The last name of the customer the product lists belong to.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type PublicProductListResult otherwise.
     *
     */
    getPublicProductListsBySearchTerm<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    email?: string
                    firstName?: string
                    lastName?: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : PublicProductListResult>
    /**
     * Retrieves a public product list by ID and the items under that product list. This endpoint accepts a registered customer ShopperToken (JWT) or a guest customer ShopperToken.
     *
     * If you would like to get a raw Response object use the other getPublicProductList function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param listId - The ID of the list.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     *
     * @returns A promise of type PublicProductList.
     *
     */
    getPublicProductList(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    listId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>
    ): Promise<PublicProductList>
    /**
     * Retrieves a public product list by ID and the items under that product list. This endpoint accepts a registered customer ShopperToken (JWT) or a guest customer ShopperToken.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param listId - The ID of the list.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type PublicProductList otherwise.
     *
     */
    getPublicProductList<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    listId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : PublicProductList>
    /**
     * Retrieves an item from a public product list and the actual product details like product, image, availability and price. This endpoint accepts a registered customer ShopperToken (JWT) or a guest customer ShopperToken.
     *
     * If you would like to get a raw Response object use the other getProductListItem function.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param listId - The ID of the list.
     * @param itemId - The ID of the item.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     *
     * @returns A promise of type PublicProductListItem.
     *
     */
    getProductListItem(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    listId: string
                    itemId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>
    ): Promise<PublicProductListItem>
    /**
     * Retrieves an item from a public product list and the actual product details like product, image, availability and price. This endpoint accepts a registered customer ShopperToken (JWT) or a guest customer ShopperToken.
     *
     * @param options - An object containing the options for this method.
     * @param parameters - An object containing the parameters for this method.
     * @param organizationId -
     * @param listId - The ID of the list.
     * @param itemId - The ID of the item.
     * @param siteId -
     * @param headers - An object literal of key value pairs of the headers to be
     * sent with this request.
     * @param rawResponse - Set to true to return entire Response object instead of DTO.
     * @returns A promise of type Response if rawResponse is true, a promise of type PublicProductListItem otherwise.
     *
     */
    getProductListItem<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
            parameters?: CompositeParameters<
                {
                    organizationId: string
                    listId: string
                    itemId: string
                    siteId: string
                } & {
                    [key in `c_${string}`]: any
                },
                ConfigParameters
            >
            headers?: {
                [key: string]: string
            }
        }>,
        rawResponse?: T
    ): Promise<T extends true ? Response : PublicProductListItem>
}
