import "./App.css";
import { Registry } from "./registration";
import {
  ErrorBoundaryWithFallback,
  initKosProvider,
  LoadingMessage,
} from "@coca-cola/kos-ui-components";
import { KosLog } from "@coca-cola/kos-ui-core";
import React, { Suspense } from "react";
import { DispenserView } from "./components/dispenser";
import { CuiView } from "./components/cui";

KosLog.setLevel("INFO");

const { KosCoreContextProvider } = initKosProvider(Registry);

function App() {
  return (
    <ErrorBoundaryWithFallback>
      <Suspense fallback={<LoadingMessage></LoadingMessage>}>
        <KosCoreContextProvider>
          {/* <DispenserView></DispenserView> */}
          <CuiView></CuiView>
        </KosCoreContextProvider>
      </Suspense>
    </ErrorBoundaryWithFallback>
  );
}

export default App;
