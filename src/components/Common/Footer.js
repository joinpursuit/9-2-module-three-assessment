import "./Footer.css";

const footer_style = {
  display: "flex",
  position: "fixed",
  top: "85%",
  left: "45%",
};

export default function Footer() {
  return (
    <div className="footer" style={footer_style}>
      <p>
        <span> Developed by Anthony Taylor </span>
        <br /> <br />
        Contact Me: <a href="https://github.com/SasukeDaTony">GitHub</a>{" "}
        <a href="https://www.linkedin.com/in/tonytaylor91/">LinkedIn</a>
      </p>
    </div>
  );
}
