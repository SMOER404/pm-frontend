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
/**
 * SearchApi - axios parameter creator
 * @export
 */
export const SearchApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get search suggestions
         * @param {string} term 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSearchSuggestions: async (term: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'term' is not null or undefined
            assertParamExists('getSearchSuggestions', 'term', term)
            const localVarPath = `/search/autocomplete`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (term !== undefined) {
                localVarQueryParameter['term'] = term;
            }


    
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
         * @summary Search products
         * @param {string} query 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchProducts: async (query: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'query' is not null or undefined
            assertParamExists('searchProducts', 'query', query)
            const localVarPath = `/search`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (query !== undefined) {
                localVarQueryParameter['query'] = query;
            }


    
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
 * SearchApi - functional programming interface
 * @export
 */
export const SearchApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SearchApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get search suggestions
         * @param {string} term 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSearchSuggestions(term: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSearchSuggestions(term, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SearchApi.getSearchSuggestions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Search products
         * @param {string} query 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async searchProducts(query: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.searchProducts(query, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SearchApi.searchProducts']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SearchApi - factory interface
 * @export
 */
export const SearchApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SearchApiFp(configuration)
    return {
        /**
         * 
         * @summary Get search suggestions
         * @param {string} term 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSearchSuggestions(term: string, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.getSearchSuggestions(term, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Search products
         * @param {string} query 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchProducts(query: string, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.searchProducts(query, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SearchApi - object-oriented interface
 * @export
 * @class SearchApi
 * @extends {BaseAPI}
 */
export class SearchApi extends BaseAPI {
    /**
     * 
     * @summary Get search suggestions
     * @param {string} term 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */
    public getSearchSuggestions(term: string, options?: RawAxiosRequestConfig) {
        return SearchApiFp(this.configuration).getSearchSuggestions(term, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Search products
     * @param {string} query 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */
    public searchProducts(query: string, options?: RawAxiosRequestConfig) {
        return SearchApiFp(this.configuration).searchProducts(query, options).then((request) => request(this.axios, this.basePath));
    }
}

