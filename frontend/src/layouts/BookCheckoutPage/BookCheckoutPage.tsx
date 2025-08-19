import { useEffect, useState } from 'react';
import BookModel from '../../models/BookModel';
import { useParams } from 'react-router-dom';
import { SpinnerLoading } from '../Utils/SpinnerLoading';
import { StarsReview } from '../Utils/StarsReview';

export const BookCheckoutPage = () => {
  const [book, setBook] = useState<BookModel>();
  const [loading, setLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  const { bookId } = useParams();

  const baseUrl: string = 'http://localhost:8080/api/books';

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true);
      const url: string = `${baseUrl}/${bookId}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const responseJson = await response.json();

      const loadedBook: BookModel = {
        id: responseJson.id,
        title: responseJson.title,
        author: responseJson.author,
        description: responseJson.description,
        copies: responseJson.copies,
        copiesAvailable: responseJson.copiesAvailable,
        category: responseJson.category,
        img: responseJson.img,
      };

      setBook(loadedBook);
      setLoading(false);
    };
    fetchBook().catch((error: any) => {
      setLoading(false);
      setHttpError(error.message);
    });
  }, [bookId]);

  if (loading) {
    return <SpinnerLoading />;
  }

  if (httpError) {
    return (
      <div className="container m-5">
        <p>{httpError}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="container d-none d-lg-block">
        <div className="row mt-5">
          <div className="col-sm-2 col-md-2">
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100px' }}>
              {book?.img ? (
                <img src={book?.img} width="226" height="349" alt="Book" />
              ) : (
                <img
                  src={require('./../../Images/BooksImages/book-luv2code-1000.png')}
                  alt="Book"
                  width="226"
                  height="349"
                />
              )}
            </div>
          </div>
          <div className="col-4 col-md-4 container">
            <div className="ml-2">
              <h3>{book?.title}</h3>
              <h5 className="text-primary">{book?.author}</h5>
              <p className="lead">{book?.description}</p>
              <StarsReview rating={2.5} size={32} />
            </div>
          </div>
        </div>
        <hr />
      </div>

      <div className="container d-lg-none mt-5">
        <div className="d-flex justify-content-center align-items-center">
          {book?.img ? (
            <img src={book?.img} width="226" height="349" alt="Book" />
          ) : (
            <img
              src={require('./../../Images/BooksImages/book-luv2code-1000.png')}
              alt="Book"
              width="226"
              height="349"
            />
          )}
        </div>
        <div className="mt-4">
          <div className="ml-2">
            <h3>{book?.title}</h3>
            <h5 className="text-primary">{book?.author}</h5>
            <p className="lead">{book?.description}</p>
            <StarsReview rating={2.5} size={32} />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};
