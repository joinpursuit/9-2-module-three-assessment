export default function LocationListing({ location }) {
  return (
    <ul>
      <li>
        <span>Name:</span> {location.name}
      </li>
      <li>
        <span>climate:</span> {location.climate}
      </li>
      <li>
        <span> Terrain: </span> {location.terrain}
      </li>
    </ul>
  );
}
