import React, { useEffect, useState } from "react";

const CardsBy = ({ changeState }) => {
  const { showingMoreData, setShowingMoreData } = changeState;

  const [locations, setLocations] = useState([]);
  const [sortedLocations, setSortedLocations] = useState({
    locationsList: [],
    orderBy: "",
  }); //esto lo hacemos con la itencion de que react entienda que ha habido un cambio en el oreden de sus objetos dentro del array.

  // MULTIPLE STATES IMPLEMENTATION
  // const [orderName, setOrderName] = useState([]);
  // const [orderClimate, setOrderClimate] = useState([]);

  /////////////////////////////////////////////////////////////////
  useEffect(() => {
    fetch("locations.json")
      .then((response) => response.json())
      .then((locationsList) => {
        setLocations(locationsList);
      });
  }, []);

  const orderBy = (orderCriteria) => {
    const newLocations = locations.sort((a, b) => {
      if (a[orderCriteria] > b[orderCriteria]) {
        return 1;
      }
      if (a[orderCriteria] < b[orderCriteria]) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });

    setSortedLocations({
      locationsList: newLocations,
      orderBy: orderCriteria,
    });
  };

  // const cardByName = () => {
  //   const newLocations = locations.sort((a, b) => {
  //     if (a.name > b.name) {
  //       return 1;
  //     }
  //     if (a.name < b.name) {
  //       return -1;
  //     }
  //     // a must be equal to b
  //     return 0;
  //   });

  //   setSortedLocations({
  //     locationsList: newLocations,
  //     orderBy: "name",
  //   });
  // };

  // const cardByClimate = () => {
  //   const newClimate = locations.sort((a, b) => {
  //     if (a.climate > b.climate) {
  //       return 1;
  //     }
  //     if (a.climate < b.climate) {
  //       return -1;
  //     }
  //     // a must be equal to b
  //     return 0;
  //   });

  //   setSortedLocations({
  //     locationsList: newClimate,
  //     orderBy: "climate",
  //   });

  return (
    <div>
      <div>
        <button onClick={() => setShowingMoreData(!showingMoreData)}>
          HIDE LOCATIONS
        </button>
        <button onClick={() => orderBy("name")}>SORT BY NAME</button>
        <button onClick={() => orderBy("climate")}>SORT BY CLIMATE</button>
        <button onClick={() => orderBy("terrain")}>SORT BY TERRAIN</button>
      </div>
      <section className="locations">
        <ul>
          {/* MULTIPLE STATES IMPLEMENTATION */}
          {/* {orderName.length > 0
            ? orderName.map((res) => {
                return (
                  <div>
                    <h1>{res.name}</h1>
                    <h5>{res.climate}</h5>
                    <h6>{res.terrain}</h6>
                  </div>
                );
              })
            : orderClimate.map((res) => {
                return (
                  <div>
                    <h1>{res.name}</h1>
                    <h5>{res.climate}</h5>
                    <h6>{res.terrain}</h6>
                  </div>
                );
              })} */}

          {/* <div>Ordered by {sortedLocations.orderBy}</div> */}
          {sortedLocations.locationsList.map((res) => {
            return (
              <li key={res.id}>
                <ul>
                  <li>
                    <span>
                      <strong>Name: </strong>
                      {res.name}
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong>Climate: </strong>
                      {res.climate}
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong>Terrain: </strong>
                      {res.terrain}
                    </span>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default CardsBy;
