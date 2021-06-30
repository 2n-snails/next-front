export type UserType = {
    id : number,
    userEmail: string,
    userTel: string;
    userLevel: number;
    userProfileImage: string;
    userIntro: string;
    userNick: string;
    userProvider: string;
    createdAt: Date;
    updatedAt: Date;
    deleted: string;
};

//* users.json에 저장된 유저 타입
export type StoredUserType = {

    id: number;
  email: string;
  password: string;
  nickName: string;
    profileImage: string;

};
