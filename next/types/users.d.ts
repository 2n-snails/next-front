export type UserType = {
  id: number;
  email: string;
    nickName: string;
    address: string;
  profileImage: string;
};

//* users.json에 저장된 유저 타입
export type StoredUserType = {

    id: number;
  email: string;
  password: string;
  nickName: string;
    profileImage: string;

};
