import React from "react";
import { Stack } from "@fluentui/react-components";
import Sidebar from "./Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <Stack horizontal style={{ height: "100vh" }}>
      <Sidebar />
      <Stack.Item grow style={{ padding: "20px", overflow: "auto" }}>
        {children}
      </Stack.Item>
    </Stack>
  );
};

export default DashboardLayout;
