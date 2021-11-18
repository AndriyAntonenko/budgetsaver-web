import { HttpService } from "../http.service";

/**
  * @typedef {Object} CreateFinanceGroupPayload
  * @property {string} name
  * @property {string} description
 */

export class FinanceGroupApiService {
  static #instance;

  /**
   * 
   * @returns {FinanceGroupApiService}
   */
  static request() {
    if (!FinanceGroupApiService.#instance) {
      FinanceGroupApiService.#instance = new FinanceGroupApiService()
    }
    return FinanceGroupApiService.#instance;
  }

  /**
   * @param {CreateFinanceGroupPayload} payload
   * @returns {import("../http.service").JSONApiResponse}
   */
  createGroup(payload) {
    return HttpService.request().postJSON("/api/finance-group", payload);
  }

  /**
   * 
   * @returns {Array<import("../../storage/finance-group.store").FinanceGroup>} 
   */
  fetchFinanceGroups() {
    return HttpService.request().getJSON("/api/finance-group");
  }
}
