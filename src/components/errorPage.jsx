import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h1>Oops! this page does not exist!</h1>
      <Link to='/'>Come back to safety!</Link>
    </div>
  );
}