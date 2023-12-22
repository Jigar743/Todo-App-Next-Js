export type CurrentUserType = {
  id: string;
  name: string;
  email: string;
};

export type AuthStateType = {
  isAuthenticated: boolean;
  token: null | string;
  currentUser: CurrentUserType | null;
};

