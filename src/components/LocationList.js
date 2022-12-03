export default function LocationList({ locations }) {
  return (
    <ul>
      {locations.map((location) => (
        <li key={location.name}>
          <ul className="details">
            <li>
              <span>Name:</span>
              {location.name}
            </li>
            <li>
              <span>Climate:</span>
              {location.climate}
            </li>
            <li>
              <span>Terrain:</span>
              {location.terrain}
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
}
