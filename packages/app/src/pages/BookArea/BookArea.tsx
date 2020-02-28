import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

import { User } from '../../../../../types';
import { GET_USERS_BOOKS } from '../../hooks/data';
import Loading from '../Loading/Loading';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import Heading from '../../components/Heading/Heading';
import ModalButton from '../../components/ModalButton/ModalButton';

import { BookTile, BookText, BookButtonText, UnstyledLi, UnstyledUl } from './BookArea.style';
import { ModalContent } from './components/NewBookModal';

const BookArea = (): React.ReactElement => {
  const { loading, error, data } = useQuery(GET_USERS_BOOKS, {
    variables: { userId: '0' }, // TODO get userId from cookie
  });

  if (loading) return <Loading />;
  if (error) return <ErrorPage />;

  const { user }: { user: User } = data;
  if (!user.books) return <div>Add a book!</div>;

  return (
    <section>
      <Heading el="h2">{user.username}&apos;s Recipe Books!</Heading>
      <UnstyledUl>
        {user?.books?.map(book => (
          <UnstyledLi key={book?._id}>
            <Link to={`/book/${book?._id}`}>
              <BookTile key={`recipe-${book?._id}`}>
                <BookText>
                  <FontAwesomeIcon icon={faBook} />
                </BookText>
                <BookText>{book?.name}</BookText>
              </BookTile>
            </Link>
          </UnstyledLi>
        ))}
      </UnstyledUl>
      <ModalButton modalContent={ModalContent}>
        <BookButtonText>Create new book</BookButtonText>
      </ModalButton>
    </section>
  );
};

export default BookArea;
