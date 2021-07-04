import axios from "axios";
import { UserType } from "@/types/users.d";

//회원가입 body
interface SignUpAPIBody {
  email: string;
  nickName: string;
  address: string;
  password: string;
}

//회원가입 api
// const { data, error } = useSWR('/api/menus', (url) => {
//   return fetch(url).then((res) => res.json());
// });
// Next JS 공홈에 있는건데 swr을 사용하는건 어떠하실지?..
export const signupAPI = (body: SignUpAPIBody) => {
  axios.post<UserType>("/api/auth/signup", body);
};
