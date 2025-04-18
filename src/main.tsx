// React and core libraries
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Third-party libraries

// Shared components, hooks, and utilities

// Feature-specific and local imports
import { App } from "./App.tsx";

// Types

// Assets and styles

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
