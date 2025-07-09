const Book = () => {
  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="text-center">
        <img src={require('./../../Images/BooksImages/book-luv2code-1000.png')} alt="book" height={230} width={150} />
        <h6 className="mt-2">Book</h6>
        <p className="mt-1">Luv2Code</p>
        <a className="btn main-color text-white" href="#">
          Reserve
        </a>
      </div>
    </div>
  );
};

export default Book;
