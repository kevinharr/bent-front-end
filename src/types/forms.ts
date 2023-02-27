/* ---------==== custom forms ====--------- */



/* ---------===== auth forms =====--------- */

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  passwordConf: string;
}

export interface ChangePasswordFormData {
  oldPassword: string;
  newPassword: string;
  newPasswordConf: string;
}

export interface PhotoFormData {
  photo: File | null;
}

export interface BentData {
  _id: number;
  profile: { id: number };
  workPreference: string;
  favoriteColor: string;
  favoriteMusic: string;
}
