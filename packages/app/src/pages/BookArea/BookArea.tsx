import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faEye, faHeart, faCog } from '@fortawesome/free-solid-svg-icons';

import { User } from '../../../../../types';
import { GET_USERS_BOOKS } from '../../hooks/data';
import Loading from '../Loading/Loading';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import Heading from '../../components/Heading/Heading';
import ModalButton from '../../components/ModalButton/ModalButton';
import Button from '../../components/Button/Button';
import Dropdown from '../../components/Dropdown/Dropdown';
import { CREATE_BOOK } from '../../hooks/create';

import {
  BookTile,
  BookText,
  BookSubText,
  BookButtonText,
  UnstyledLi,
  UnstyledUl,
  BookInformation,
} from './BookArea.style';
import { NewBookModal } from './components/NewBookModal';

const BookArea = (): React.ReactElement => {
  const userId = '746573747573657269644030'; // TODO get userId from cookie

  const [isNewBookOpen, setNewBookOpen] = useState(false);
  const [isBookSettingsOpen, setBookSettingsOpen] = useState(false);

  const { loading: getLoading, error: getError, data } = useQuery(GET_USERS_BOOKS, {
    variables: { userId },
    partialRefetch: true,
  });
  const [addBook, { loading: addLoading, error: addError }] = useMutation(CREATE_BOOK);
  const handleCreation = (bookName: string) => {
    setNewBookOpen(false);
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
            <BookTile key={`book-${book?._id}`}>
              <Link to={`/book/${book?._id}`}>
                <BookText>
                  <FontAwesomeIcon icon={faBook} />
                </BookText>
                <BookText>{book?.meta?.name}</BookText>
              </Link>
              <BookInformation>
                <div>
                  <BookSubText>
                    <FontAwesomeIcon icon={faEye} />
                  </BookSubText>
                  <BookSubText>{book?.meta?.views}</BookSubText>
                </div>
                <div>
                  <BookSubText>
                    <FontAwesomeIcon icon={faHeart} />
                  </BookSubText>
                  <BookSubText>{book?.meta?.favorites}</BookSubText>
                </div>
                <Button onClick={() => setBookSettingsOpen(!isBookSettingsOpen)}>
                  <FontAwesomeIcon icon={faCog} />
                </Button>
                <Dropdown isOpen={isBookSettingsOpen} content={[{ text: 'Change name', to: '/' }]} />
              </BookInformation>
            </BookTile>
          </UnstyledLi>
        ))}
      </UnstyledUl>
      <ModalButton
        isOpen={isNewBookOpen}
        setIsOpen={setNewBookOpen}
        ModalContent={() => <NewBookModal onSubmit={handleCreation} />}
      >
        <BookButtonText>Create new book</BookButtonText>
      </ModalButton>
    </section>
  );
};

export default BookArea;
