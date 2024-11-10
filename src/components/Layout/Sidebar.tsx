import React from "react";
import { Stack, Button } from "@fluentui/react-components";
import { useAuth } from "../../contexts/AuthContext";

const Sidebar: React.FC = () => {
  const { logout } = useAuth();

  return (
    <Stack
      style={{
        width: "250px",
        backgroundColor: "#f3f2f1",
        padding: "20px",
        height: "100vh",
      }}
    >
      <h2>Support Dashboard</h2>
      <Stack tokens={{ childrenGap: 10 }}>
        <Button>Calls</Button>
        <Button>Messages</Button>
        <Button>History</Button>
        <Button onClick={logout}>Logout</Button>
      </Stack>
    </Stack>
  );
};

export default Sidebar;
