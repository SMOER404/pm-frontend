/* tslint:disable */
/* eslint-disable */
/**
 * POIZON Market API
 * API документация для маркетплейса POIZON
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { CreateUserContentDto } from '../models';
// @ts-ignore
import type { UserContentDto } from '../models';
/**
 * UserContentApi - axios parameter creator
 * @export
 */
export const UserContentApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Создать новый пользовательский контент
         * @param {CreateUserContentDto} createUserContentDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUserContent: async (createUserContentDto: CreateUserContentDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createUserContentDto' is not null or undefined
            assertParamExists('createUserContent', 'createUserContentDto', createUserContentDto)
            const localVarPath = `/user-content`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createUserContentDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Получить пользовательский контент для продукта
         * @param {string} productId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserContentByProduct: async (productId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'productId' is not null or undefined
            assertParamExists('getUserContentByProduct', 'productId', productId)
            const localVarPath = `/user-content/product/{productId}`
                .replace(`{${"productId"}}`, encodeURIComponent(String(productId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Поставить лайк пользовательскому контенту
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        likeUserContent: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('likeUserContent', 'id', id)
            const localVarPath = `/user-content/{id}/like`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserContentApi - functional programming interface
 * @export
 */
export const UserContentApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserContentApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Создать новый пользовательский контент
         * @param {CreateUserContentDto} createUserContentDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createUserContent(createUserContentDto: CreateUserContentDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserContentDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createUserContent(createUserContentDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserContentApi.createUserContent']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Получить пользовательский контент для продукта
         * @param {string} productId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserContentByProduct(productId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<UserContentDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserContentByProduct(productId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserContentApi.getUserContentByProduct']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Поставить лайк пользовательскому контенту
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async likeUserContent(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserContentDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.likeUserContent(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserContentApi.likeUserContent']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * UserContentApi - factory interface
 * @export
 */
export const UserContentApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserContentApiFp(configuration)
    return {
        /**
         * 
         * @summary Создать новый пользовательский контент
         * @param {CreateUserContentDto} createUserContentDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUserContent(createUserContentDto: CreateUserContentDto, options?: RawAxiosRequestConfig): AxiosPromise<UserContentDto> {
            return localVarFp.createUserContent(createUserContentDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Получить пользовательский контент для продукта
         * @param {string} productId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserContentByProduct(productId: string, options?: RawAxiosRequestConfig): AxiosPromise<Array<UserContentDto>> {
            return localVarFp.getUserContentByProduct(productId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Поставить лайк пользовательскому контенту
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        likeUserContent(id: string, options?: RawAxiosRequestConfig): AxiosPromise<UserContentDto> {
            return localVarFp.likeUserContent(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserContentApi - object-oriented interface
 * @export
 * @class UserContentApi
 * @extends {BaseAPI}
 */
export class UserContentApi extends BaseAPI {
    /**
     * 
     * @summary Создать новый пользовательский контент
     * @param {CreateUserContentDto} createUserContentDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserContentApi
     */
    public createUserContent(createUserContentDto: CreateUserContentDto, options?: RawAxiosRequestConfig) {
        return UserContentApiFp(this.configuration).createUserContent(createUserContentDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Получить пользовательский контент для продукта
     * @param {string} productId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserContentApi
     */
    public getUserContentByProduct(productId: string, options?: RawAxiosRequestConfig) {
        return UserContentApiFp(this.configuration).getUserContentByProduct(productId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Поставить лайк пользовательскому контенту
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserContentApi
     */
    public likeUserContent(id: string, options?: RawAxiosRequestConfig) {
        return UserContentApiFp(this.configuration).likeUserContent(id, options).then((request) => request(this.axios, this.basePath));
    }
}

