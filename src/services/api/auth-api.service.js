import { HttpService } from "../http.service";

export class AuthApiService {
  static #instance;

  /**
   * 
   * @returns {AuthApiService}
   */
  static request() {
    if (!AuthApiService.#instance) {
      AuthApiService.#instance = new AuthApiService()
    }
    return AuthApiService.#instance;
  }

  /**
   * 
   * @param {any} payload 
   * @returns {import("../http.service").JSONApiResponse}
   */
  signUp(payload) {
    return HttpService.request().postJSON("/api/auth/sign-up", payload);
  }

  /**
   * 
   * @param {any} payload 
   * @returns {import("../http.service").JSONApiResponse}
   */
  login(payload) {
    return HttpService.request().postJSON("/api/auth/login", payload);
  }

   /**
   * 
   * @returns {import("../http.service").JSONApiResponse}
   */
  checkAuth() {
    return HttpService.request().getJSON("/api/auth/check-auth");
  }
}
