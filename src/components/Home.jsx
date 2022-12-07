import * as Icon from "react-bootstrap-icons";

function Home() {
  return (
    <div className="home">
      <span className="logo">
        <Icon.RocketTakeoff color="royalblue" size={50} />
      </span>
      <br />
      <h1>Welcome to Ghibli</h1>
    </div>
  );
}

export default Home;
