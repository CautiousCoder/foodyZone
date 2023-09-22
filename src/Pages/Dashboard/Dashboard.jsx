import { Box } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import MiddleDashboardView from "./Components/MiddleDashboardView";
import TopDashboardView from "./Components/TopDashboardView";

const Dashboard = ({ props }) => {
  return (
    <DashboardLayout title="Dashboard">
      <Box
        minH={{
          base: "calc(100vh - 84px)",
          md: "calc(100vh - 104px)",
        }}
      >
        <TopDashboardView />
        <MiddleDashboardView />
      </Box>
    </DashboardLayout>
  );
};
export default Dashboard;
