import { Box } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import Transactions from "./Component/Transactions";

const Transaction = ({ props }) => {
  return (
    <>
      <DashboardLayout title={"Transactions"}>
        <Box
          minH={{
            base: "calc(100vh - 84px)",
            md: "calc(100vh - 104px)",
          }}
        >
          <Transactions />
        </Box>
      </DashboardLayout>
    </>
  );
};
export default Transaction;
