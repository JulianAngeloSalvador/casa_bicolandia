import "./Auth.css";
import Login from "./Login";

export default function Authentication() {
  return (
    <section className="auth-page">
      <Login />
      <Signup />
    </section>
  );
}
