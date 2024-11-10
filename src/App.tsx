import { BrowserRouter } from "react-router-dom";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { msalConfig } from "./config/authConfig";
import { AuthProvider } from "./contexts/AuthContext";
import DashboardLayout from "./components/Layout/DashboardLayout";

const msalInstance = new PublicClientApplication(msalConfig);

function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <FluentProvider theme={webLightTheme}>
        <BrowserRouter>
          <AuthProvider>
            <DashboardLayout>
              {/* Your routes will go here */}
              <h1>Welcome to Support Dashboard</h1>
            </DashboardLayout>
          </AuthProvider>
        </BrowserRouter>
      </FluentProvider>
    </MsalProvider>
  );
}

export default App;
