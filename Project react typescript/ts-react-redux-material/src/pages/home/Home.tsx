import { type FC } from 'react';
import { useCustomSelector, useCustomDispatch } from '../../hooks/redux';
import { login } from '../../redux/slices/auth';

export const Home: FC = () => {
  const { accessToken, loading } = useCustomSelector((state) => state.auth);
  const dispatch = useCustomDispatch();
  console.log(accessToken);

  const handleLogin = (): void => {
    login(
      {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      },
      dispatch
    );
  };
  return (
    <>
      <h1>Home</h1>
      <button onClick={handleLogin}>Login</button>
      {accessToken}
      {loading && 'Loading...'}
    </>
  );
};
