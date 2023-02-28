/* ---------==== custom forms ====--------- */

export interface EditBentFormData {
  id: number;
  profile: { id: number };
  workPreference: string;
  favoriteColor: string;
  favoriteMusic: string;
}

export interface NewBentFormData {
  id: number | undefined;
  profileId: number | undefined;
  workPreference: string;
  favoriteColor: string;
  favoriteMusic: string;
}

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


