import users from '../../test-data/users.json';
import { UserCredentials } from '../types/testTypes';

interface TestUsers {
    validUser: UserCredentials;
    lockedUser: UserCredentials;
    problemUser: UserCredentials;
}

export const testUsers = users as TestUsers;