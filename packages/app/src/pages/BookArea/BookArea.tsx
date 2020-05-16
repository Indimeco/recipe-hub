import React, { useState, useEffect } from 'react';
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
import { EDIT_BOOKNAME } from '../../hooks/edit';

import { BookInformation } from './components/BookInformation';
import { BookTile, BookText, UnstyledLi, UnstyledUl, BookButtonText } from './BookArea.style';
import { InputModal } from './components/InputModal';

type PropTypes = {
  setNavLinks: any;
  userId: string;
};
const BookArea: React.FunctionComponent<PropTypes> = ({ userId, setNavLinks }) => {
  const [isNewBookOpen, setNewBookOpen] = useState(false);

  const { loading: getLoading, error: getError, data } = useQuery(GET_USERS_BOOKS, {
    variables: { userId },
    partialRefetch: true,
  });
  const [addBook, { loading: addLoading, error: addError }] = useMutation(CREATE_BOOK);

  const [editName, { loading: editLoading, error: editError }] = useMutation(EDIT_BOOKNAME);

  const handleCreation = (bookName: string) => {
    setNewBookOpen(false);
    addBook({ variables: { userId, bookName } });
  };

  const handleEditName = ({ bookId, newBookName }: { bookId: string; newBookName: string }) =>
    editName({ variables: { userId, bookId, newBookName } });

  const isLoading = getLoading || addLoading || editLoading;
  const isError = getError || addError || editError;

  useEffect(() => {
    if (!isLoading && !isError) {
      setNavLinks([{ name: 'My Books', path: null }]);
    }
  }, [isError, isLoading, setNavLinks]);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorPage />;

  const { user }: { user: User } = data;
  if (!user.books) return <Heading>Add a book!</Heading>;

  return (
    <section>
      <Heading el="h2">{user.username}&apos;s Recipe Books!</Heading>
      <UnstyledUl>
        {user?.books?.map(book => (
          <UnstyledLi key={book._id}>
            <BookTile key={`book-${book._id}`}>
              <Link to={`/book/${book._id}`}>
                <BookText>
                  <FontAwesomeIcon icon={faBook} />
                </BookText>
                <BookText>{book.meta.name}</BookText>
              </Link>
              <BookInformation
                id={book._id}
                name={book.meta.name}
                favorites={book.meta.favorites}
                views={book.meta.views}
                onSubmit={handleEditName}
              />
            </BookTile>
          </UnstyledLi>
        ))}
      </UnstyledUl>
      <ModalButton
        isOpen={isNewBookOpen}
        setIsOpen={setNewBookOpen}
        ModalContent={() => <InputModal label="New book name" button="Create" onSubmit={handleCreation} />}
        circle={false}
        size="large"
      >
        <BookButtonText>Create new book</BookButtonText>
      </ModalButton>
    </section>
  );
};

export default BookArea;
