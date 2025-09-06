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

export type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profilePic: string;
  createdAt: Date;
  updatedAt: Date;
  phoneNumber: string;
};

export type CreateUserInputType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type UpdateUserInputType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profilePic: string;
  phoneNumber: string;
};

export type DeleteUserInputType = {
  id: number;
};

export type UpdateUserPasswordInputType = {
  id: number;
  previousPassword: string;
  newPassword: string;
};
