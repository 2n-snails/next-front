import { readFileSync } from 'fs';
import { StoredUserType } from '../../types/users';

const getList = () => {
  const usersBuffer = readFileSync('data/user.json');
  const usersString = usersBuffer.toString();

  //파일이 존재하지 않을 경우
  if (!usersString) {
    return [];
  }

  //파일이 전재하는 경우
  const users: StoredUserType[] = JSON.parse(usersString);

  return users;
};

export default { getList };
