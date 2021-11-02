import { StorageService, TOKENS_KEY } from "./storage.service";

export class HttpService {
  static #instance;

  /**
   * 
   * @returns {HttpService}
   */
  static request() {
    if (!HttpService.#instance) {
      HttpService.#instance = new HttpService(process.env.REACT_APP_BASE_API_URL)
    }
    return HttpService.#instance;
  }

  #baseUrl = null;

  /**
   * 
   * @param {string} baseUrl 
   */
  constructor(baseUrl) {
    this.#baseUrl = baseUrl;
  }

  /**
   * 
   * @param {string} baseUrl 
   * @returns {HttpService}
   */
  setBaseUrl(baseUrl) {
    this.#baseUrl = baseUrl;
    return this;
  }

  /**
   * 
   * @param {string} path 
   * @param {string} method 
   * @param {Headers} headers 
   * @param {any} body 
   * @returns {Response}
   */
  makeRequest(path, method, headers, body) {
    const url = `${this.#baseUrl}${path}`;
    return fetch(url, { method, headers, body });
  }

  /**
   * 
   * @returns {Headers}
   */
  buildJSONHeaders() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const authorization = StorageService.use().getObj(TOKENS_KEY);
    if (authorization && authorization.accessToken) {
      headers.append("Authorization", `Bearer ${authorization.accessToken}`);
    }
    return headers;
  }

  /**
   * 
   * @param {string} path 
   * @returns {any}
   */
  async getJSON(path) {
    const headers = this.buildJSONHeaders();
    const response = await this.makeRequest(path, "GET", headers);
    return response.json();
  }

  /**
   * 
   * @param {string} path 
   * @param {any} body 
   * @returns {any}
   */
  async postJSON(path, body) {
    const headers = this.buildJSONHeaders();
    const response = await this.makeRequest(path, "POST", headers, JSON.stringify(body));
    return response.json();
  }
}
