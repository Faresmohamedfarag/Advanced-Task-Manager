import Container from "./container";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { createRoot } from "react-dom/client";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
const root = createRoot(document.getElementById("root"));
root.render(<Container />);
