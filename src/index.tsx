import { render } from "react-dom";
import { App } from "./app/App";

import './app/index.scss'


render(<div>
  <App />
</div>, document.getElementById("root") as HTMLElement)