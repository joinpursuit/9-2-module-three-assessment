function PeopleDetailsSpecific({ data, people }) {
    console.log(data);
  
    return (
      <div>
        {data.map((renderDetails,index) => {
          if ((people.toLowerCase()).includes(((renderDetails.name).toLowerCase()))) {
            return (
              <div key={index}>
                <h1>{renderDetails.name}</h1>
  
                <h4>GENDER: {renderDetails.gender}</h4>
  
                <p><strong>AGE:</strong> {renderDetails.age}</p>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  }
  
  export default PeopleDetailsSpecific;
  