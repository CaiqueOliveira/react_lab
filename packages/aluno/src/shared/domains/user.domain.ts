import React from "react";

export interface IUser {
  id: string,
  name: string,
  token: string | null
}

export const UserContext: React.Context<IUser> = React.createContext({} as IUser);