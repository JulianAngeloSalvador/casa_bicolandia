import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const err = useRouteError();
  // console.log(err);

  return (
    <section>
      <h1>{err.status}</h1>
      <p>{err.statusText}</p>
      <p>{err.data}</p>
    </section>
  );
}
