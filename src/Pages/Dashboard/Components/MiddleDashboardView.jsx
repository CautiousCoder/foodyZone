import { Container, Grid } from "@chakra-ui/react";
import BottomItem from "./BottomItem";
import CurrentPrize from "./CurrentPrize";
import RecentTransaction from "./RecentTransaction";

const MiddleDashboardView = ({ props }) => {
  return (
    <Container maxW="container.lg" mt="6" px="0">
      <Grid
        minH="80"
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={4}
      >
        <CurrentPrize />
        <RecentTransaction />
        <BottomItem btnText={"loans"} inverter={false}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          alias omnis dolore quia eos animi.
        </BottomItem>
        <BottomItem btnText={"contact"} inverter={true}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          alias omnis dolore quia eos animi.
        </BottomItem>
      </Grid>
    </Container>
  );
};
export default MiddleDashboardView;
