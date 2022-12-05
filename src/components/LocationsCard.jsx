export default function LocationCard({allLocations}) {
    return (
        <ul className="details">
          {allLocations.map(({ name, climate, terrain, id }) => {
            return (
              <li key={id}>
                <ul>
                  <li>
                    <span>Name:</span>
                    {name}
                  </li>
                  <li>
                    <span>Climate:</span>
                    {climate}
                  </li>
                  <li>
                    <span>Terrain:</span>
                    {terrain}
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
      )
}