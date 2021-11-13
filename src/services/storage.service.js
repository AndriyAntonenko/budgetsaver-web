export const TOKENS_KEY = 'authorization';

export class StorageService {
  static #instance;

  /**
   * 
   * @returns {StorageService}
   */
  static use() {
    if (!this.#instance) {
      this.#instance = new StorageService();
    }
    return this.#instance;
  }

  addItem(key, value) {
    localStorage.setItem(key, value);
  }

  addObj(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }

  getObj(key) {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  }

  getItem(key) {
    return localStorage.getItem(key);
  }

  remove(key) {
    localStorage.removeItem(key)
  }
}
