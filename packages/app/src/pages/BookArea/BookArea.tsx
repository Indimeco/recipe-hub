import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faPlus } from '@fortawesome/free-solid-svg-icons';

import { User } from '../../../../../types';
import { GET_USER } from '../../hooks/data';
import { ErrorPage, Heading, ModalButton, Input, Button } from '../../components';
import { Loading } from '../Loading';
import { CREATE_BOOK } from '../../hooks/create';
import { EDIT_BOOKNAME } from '../../hooks/edit';

import { BookInformation } from './components/BookInformation';
import {
  BookAreaLayout,
  BookTile,
  BookText,
  UnstyledLi,
  UnstyledUl,
  BookButtonText,
  ToolsLayout,
  LoadMoreWrapper,
} from './BookArea.style';
import { InputModal } from './components/InputModal';

type PropTypes = {
  setNavLinks: any;
  userId: string;
};
const BookArea: React.FunctionComponent<PropTypes> = ({ userId, setNavLinks }) => {
  const [isNewBookOpen, setNewBookOpen] = useState(false);

  const { loading: getLoading, error: getError, data: userData, fetchMore } = useQuery(GET_USER, {
    variables: { userId, lastBook: null },
    partialRefetch: true,
    notifyOnNetworkStatusChange: true,
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

  const { user }: { user: User } = userData;
  if (!user.books) return <Heading>Add a book!</Heading>;

  return (
    <section>
      <BookAreaLayout>
        <Heading el="h2">{`${user.username}'s Recipe Books!`}</Heading>
        <Input placeholder="Search My Books" />
      </BookAreaLayout>
      <ToolsLayout>
        <BookButtonText htmlFor="BookArea__addButton">Create new book</BookButtonText>
        <ModalButton
          isOpen={isNewBookOpen}
          setIsOpen={setNewBookOpen}
          ModalContent={() => <InputModal label="New book name" button="Create" onSubmit={handleCreation} />}
          id="BookArea__addButton"
        >
          <FontAwesomeIcon icon={faPlus} />
        </ModalButton>
      </ToolsLayout>
      <UnstyledUl>
        {user.books?.map(
          (book) =>
            book && (
              <UnstyledLi key={`book-${book._id}`}>
                <BookTile>
                  <Link to={`/book/${book._id}`}>
                    <BookText>
                      <FontAwesomeIcon icon={faBook} />
                    </BookText>
                    <BookText>{book.name}</BookText>
                  </Link>
                  <BookInformation
                    id={book._id}
                    name={book.name}
                    favorites={book.favorites}
                    views={book.views}
                    onSubmit={handleEditName}
                  />
                </BookTile>
              </UnstyledLi>
            ),
        )}
      </UnstyledUl>
      {user.pagination.hasNext && (
        <LoadMoreWrapper>
          <Button
            size="medium"
            circle={false}
            onClick={() =>
              fetchMore({
                query: GET_USER,
                variables: { userId, lastBook: userData.user.pagination.last },
                updateQuery: (prev, { fetchMoreResult }) => ({
                  user: {
                    ...fetchMoreResult.user,
                    books: [...prev.user.books, ...fetchMoreResult.user.books],
                  },
                }),
              })
            }
          >
            Load more
          </Button>
        </LoadMoreWrapper>
      )}
    </section>
  );
};

export default BookArea;
