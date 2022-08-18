import { BrowserRouter, Outlet, Link } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Bookkeeper!</h1>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
          }}
        >
          <Link to="/invoices">Invoices</Link> |{" "}
          <Link to="/expenses">Expenses</Link>
        </nav>
        <Outlet />
      </div>
    </BrowserRouter>
  );
}
