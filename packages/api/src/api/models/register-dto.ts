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



/**
 * 
 * @export
 * @interface RegisterDto
 */
export interface RegisterDto {
    /**
     * Email пользователя
     * @type {string}
     * @memberof RegisterDto
     */
    'email': string;
    /**
     * Пароль пользователя (минимум 6 символов)
     * @type {string}
     * @memberof RegisterDto
     */
    'password': string;
    /**
     * Имя пользователя (минимум 2 символа)
     * @type {string}
     * @memberof RegisterDto
     */
    'username': string;
    /**
     * Полное имя пользователя (минимум 2 символа)
     * @type {string}
     * @memberof RegisterDto
     */
    'name': string;
}

