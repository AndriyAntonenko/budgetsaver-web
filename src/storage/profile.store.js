import { makeAutoObservable, observable, action } from "mobx";
import { UserApiService } from "../services/api/user-api.service";

/**
 * @typedef {Object} UserProfile
 * @property {string} email
 * @property {string} userId
 * @property {string} name
 */

export class ProfileStore {
  /**
   * @type {UserProfile}
   */
  profile = null;

  constructor() {
    makeAutoObservable(this, {
      profile: observable,
      setProfile: action,
      fetchProfile: action,
    });
  }

  /**
   * 
   * @param {UserProfile} profile 
   */
  setProfile(profile) {
    this.profile = profile;
  }

  async fetchProfile() {
    try {
      const userProfile = UserApiService.request().me();
      this.setProfile(userProfile);
    } catch (error) {
      console.error(error);
    }
  }
}
