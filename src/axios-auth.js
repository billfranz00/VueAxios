import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://vuejs-axios-1cc2a.firebaseio.com'
});

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;