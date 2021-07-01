export const LOAD_USERS_REQUEST = 'LOAD_USERS_REQUEST';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const LOAD_USERS_ERROR = 'LOAD_USERS_ERROR';

export type userAction =
  | typeof LOAD_USERS_REQUEST
  | typeof LOAD_USERS_SUCCESS
  | typeof LOAD_USERS_ERROR;
