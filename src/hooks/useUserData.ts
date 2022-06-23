import axios from 'axios';
import { useQuery } from 'react-query';

export const fetchUserDatas = async () => {
    const { data } = await axios.get('http://localhost:5000/api/user');
    return data;
};

export function useUserData() {
    return useQuery('user', fetchUserDatas);
}
