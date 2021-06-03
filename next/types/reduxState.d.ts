import { UserType } from "./users.d";
//* 유저 redux state
export type UserState = UserType & {
    isLogged: boolean;
}
