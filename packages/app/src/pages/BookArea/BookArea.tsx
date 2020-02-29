import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

import { User } from '../../../../../types';
import { GET_USERS_BOOKS } from '../../hooks/data';
import Loading from '../Loading/Loading';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import Heading from '../../components/Heading/Heading';
import ModalButton from '../../components/ModalButton/ModalButton';
import { CREATE_BOOK } from '../../hooks/create';

import { BookTile, BookText, BookButtonText, UnstyledLi, UnstyledUl } from './BookArea.style';
import { ModalContent } from './components/NewBookModal';

const BookArea = (): React.ReactElement => {
  const userId = '746573747573657269644030'; // TODO get userId from cookie
  const [isModalOpen, setModalOpen] = useState(false);
  const { loading: getLoading, error: getError, data } = useQuery(GET_USERS_BOOKS, {
    variables: { userId },
    partialRefetch: true,
  });
  const [addBook, { loading: addLoading, error: addError }] = useMutation(CREATE_BOOK);
  const handleCreation = (bookName: string) => {
    setModalOpen(false);
    addBook({ variables: { userId, bookName } });
  };

  const loading = getLoading || addLoading;
  const error = getError || addError;

  if (loading) return <Loading />;
  if (error) return <ErrorPage />;

  const { user }: { user: User } = data;
  if (!user.books) return <Heading>Add a book!</Heading>;

  return (
    <section>
      <Heading el="h2">{user.username}&apos;s Recipe Books!</Heading>
      <UnstyledUl>
        {user?.books?.map(book => (
          <UnstyledLi key={book?._id}>
            <Link to={`/book/${book?._id}`}>
              <BookTile key={`book-${book?._id}`}>
                <BookText>
                  <FontAwesomeIcon icon={faBook} />
                </BookText>
                <BookText>{book?.meta?.name}</BookText>
              </BookTile>
            </Link>
          </UnstyledLi>
        ))}
      </UnstyledUl>
      <ModalButton
        isOpen={isModalOpen}
        setIsOpen={setModalOpen}
        ModalContent={() => <ModalContent onSubmit={handleCreation} />}
      >
        <BookButtonText>Create new book</BookButtonText>
      </ModalButton>
    </section>
  );
};

export default BookArea;
