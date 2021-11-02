import { makeAutoObservable, observable, action } from "mobx";
import { StorageService, TOKENS_KEY } from "../services/storage.service";
import { AuthApiService } from "../services/api/auth-api.service";

export class AuthStore {
  isAuthenticationChecked = false;
  isAuthenticated = false;

  constructor() {
    makeAutoObservable(this, {
      isAuthenticated: observable,
      isAuthenticationChecked: observable,
      applyAuthData: action,
      setIsAuthenticated: action,
      signUp: action,
      login: action,
      logout: action,
      checkIsAuth: action,
    });
  }

  setIsAuthenticated(isAuthenticated) {
    this.isAuthenticated = isAuthenticated;
  }

  /**
   * 
   * @param {*} payload 
   * @returns {boolean}
   */
  async login(payload) {
    try {
      const authData = await AuthApiService.request().login(payload);
      this.applyAuthData(authData);
      return true;   
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  /**
   * 
   * @param {*} payload 
   * @returns {boolean}
   */
  async signUp(payload) {
    try {
      const authData = await AuthApiService.request().signUp(payload);
      this.applyAuthData(authData);
      return true;    
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  applyAuthData(authData) {
    StorageService.use().addObj(TOKENS_KEY, authData);
    this.setIsAuthenticated(true);
  }

  logout() {
    StorageService.use().remove(TOKENS_KEY);
    this.setIsAuthenticated(false);
  }

  /**
   * 
   * @returns {boolean}
   */
  checkIsAuth() {
    const authData = StorageService.use().getObj(TOKENS_KEY);
    const isAuthenticated = !!authData;
    this.setIsAuthenticated(isAuthenticated);
    this.isAuthenticationChecked = true;
    return isAuthenticated;
  }
}
