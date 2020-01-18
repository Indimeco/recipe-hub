import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';

import { User } from '../../../../../types';
import { GET_USERS_BOOKS } from '../../hooks/data';
import Loading from '../../components/Loading/Loading';
import ErrorPage from '../../components/ErrorPage/ErrorPage';

const RecipeArea = (): React.ReactElement => {
  const { loading, error, data } = useQuery(GET_USERS_BOOKS, {
    variables: { userId: '0' }, // TODO get userId from cookie
  });

  if (loading) return <Loading />;
  if (error) return <ErrorPage />;

  const { user }: { user: User } = data;
  if (!user.books) return <div>Add a book!</div>;

  return (
    <section>
      <h2>Hello {user.username}!</h2>
      <div>Your recipe books</div>
      <div>
        {user?.books?.map(book => (
          <div key={`recipe-${book?._id}`}>
            <Link to={`/book/${book?._id}`}>{book?.name}</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipeArea;
