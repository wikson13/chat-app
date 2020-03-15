import { all } from 'redux-saga/effects';
import authSagas from '../auth/authSagas';
// import namespacesSagas from '../namespaces/namespacesSagas';

export default function* rootSaga() {
   // yield all([...authSagas, ...namespacesSagas]);
   yield all([...authSagas]);
}
