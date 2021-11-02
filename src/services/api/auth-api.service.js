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
   * @returns {any}
   */
  signUp(payload) {
    return HttpService.request().postJSON("/api/auth/sign-up", payload);
  }

  login(payload) {
    return HttpService.request().postJSON("/api/auth/login", payload);
  }
}
