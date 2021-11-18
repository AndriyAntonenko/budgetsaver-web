import { makeAutoObservable, observable, action } from "mobx";
import { FinanceGroupApiService } from "../services/api/finance-group-api.service";

/**
 * @typedef {Object} FinanceGroup
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {number} membersCount
 */

export class FinanceGroupStore {
  /**
   * @type {Array<FinanceGroup>}
   */
  groups = [];

  constructor() {
    makeAutoObservable(this, {
      groups: observable,
      setGroups: action,
      addGroup: action,
      fetchGroups: action,
      createFinanceGroup: action
    });
  }

  /**
   * 
   * @param {Array<FinanceGroup>} groups 
   */
  setGroups(groups) {
    this.groups = groups;
  }

  /**
   * 
   * @param {FinanceGroup} newGroup 
   */
  addGroup(newGroup) {
    this.setGroups([...this.groups, newGroup]);
  }
  
  /**
   * 
   * @returns {boolean}
   */
  async fetchGroups() {
    try {
      const { payload } = await FinanceGroupApiService.request().fetchFinanceGroups();
      this.setGroups(payload);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  /**
   * 
   * @param {import("../services/api/finance-group-api.service").CreateFinanceGroupPayload} payload 
   * @returns {Promise<boolean>}
   */
  async createFinanceGroup(newGroup) {
    try {
      const { payload } = await FinanceGroupApiService.request().createGroup(newGroup);
      this.addGroup(payload);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
