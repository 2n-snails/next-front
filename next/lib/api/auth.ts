import axios from "axios";
import { UserType } from "../../types/users.d";

//회원가입 body
interface SignUpAPIBody{
    email: string;
    nickName: string;
    address: string;
    password: string;

}

//회원가입 api
export const signupAPI = (body: SignUpAPIBody) => {
  axios.post<UserType>("/api/auth/signup", body);
};
