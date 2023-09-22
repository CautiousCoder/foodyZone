import { Box } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";

const Support = ({ props }) => {
  return (
    <DashboardLayout title={"support"}>
      <Box
        minH={{
          base: "calc(100vh - 84px)",
          md: "calc(100vh - 104px)",
        }}
      >
        <h1>hi</h1>
      </Box>
    </DashboardLayout>
  );
};
export default Support;
