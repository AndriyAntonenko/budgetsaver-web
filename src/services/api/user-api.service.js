import { HttpService } from "../http.service";

export class UserApiService {
  static #instance;

  /**
   * 
   * @returns {AuthApiService}
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
   * @returns {any}
   */
  me() {
    return HttpService.request().getJSON("/api/auth/me");
  }
}
