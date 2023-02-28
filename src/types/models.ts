/* ---------===== custom props ====--------- */

export interface Bent {
  id: number;
  profileId: number;
  workPreference: string;
  favoriteColor: string;
  favoriteMusic: string;
  createdAt: string;
  updatedAt: string;
}

/* ---------===== auth models =====--------- */

export interface Profile {
  name: string;
  photo?: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  name: string;
  email: string;
  profile: { id: number };
  id: number;
  createdAt: string;
  updatedAt: string;
}


