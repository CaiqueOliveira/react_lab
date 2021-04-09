import React, { useContext } from 'react';
import { PrivateApp } from '../private/Private.app';
import { PublicApp } from '../public/Public.app';
import { UserContext, IUser } from '../../shared/domains/user.domain';

export const RootApp = () => {
  const user: IUser = useContext(UserContext);
  const isLoggedIn = !!user.token;
  
  if (isLoggedIn) {
    return (
      <PrivateApp />
    )
  }

  return (
    <PublicApp/>
  )
};