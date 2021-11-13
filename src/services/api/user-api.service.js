import { HttpService } from "../http.service";

export class UserApiService {
  static #instance;

  /**
   * 
   * @returns {UserApiService}
   */
  static request() {
    if (!UserApiService.#instance) {
      UserApiService.#instance = new UserApiService()
    }
    return UserApiService.#instance;
  }

  /**
   * 
   * @param {any} payload 
   * @returns {import("../http.service").JSONApiResponse}
   */
  me() {
    return HttpService.request().getJSON("/api/auth/me");
  }
}
