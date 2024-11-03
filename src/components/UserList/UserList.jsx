import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAsyncUsers } from '../../features/user/userSlice';

const UserList = () => {
  const { loading, data, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAsyncUsers());
  }, [dispatch]);

  if (loading) return <p>loading...</p>;
  return (
    <div>
      {data.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </div>
  );
};

export default UserList;
