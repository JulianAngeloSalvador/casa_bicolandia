import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Title from "../components/Title/Title";
import "./app.css";

export default function App() {
  return (
    <section>
      <Navbar />
      <Hero/>
      <div>
        <Title subTitle="Best Choices" title="Choose your room"/>

      </div>
    </section>
  );
}
