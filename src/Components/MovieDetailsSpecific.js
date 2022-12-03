function MovieDetailsSpecific({ data, selectedTitle }) {
  console.log(data);

  return (
    <div>
      {data.map((renderDetails,index) => {
        if (selectedTitle === renderDetails.title) {
          return (
            <div key={index}>
              <h1>{renderDetails.title}</h1>

              <h4>Release Date: {renderDetails.release_date}</h4>

              <p><strong>Description:</strong> {renderDetails.description}</p>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default MovieDetailsSpecific;
