import ReactTypingEffect from "react-typing-effect";

function Home({ description }) {
  return <ReactTypingEffect text={["This is " + description]} speed={100} eraseDelay={800} eraseSpeed={100} />;
}

export default Home;
