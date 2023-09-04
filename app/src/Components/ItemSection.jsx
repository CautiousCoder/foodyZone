/* eslint-disable react/prop-types */
import styled from "styled-components";
import { BASE_URL } from "../App";
const ItemSection = ({ foods }) => {
  return (
    <Section>
      <Container>
        <Spacer></Spacer>
        <Grid>
          {foods.map(({ name, price, text, image }, key) => (
            <Item key={key}>
              <Image>
                <img src={BASE_URL + image} alt="Item Image" />
              </Image>
              <Text>
                <h2>{name}</h2>
                <p>{text}</p>
                <Button>
                  <button type="button">${price.toFixed(2)}</button>
                </Button>
              </Text>
            </Item>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
export default ItemSection;

const Section = styled.section`
  height: calc(100vh - 150px);
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),
    url("./Images/bg.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  /* filter: brightness(40%); */
`;
const Container = styled.div`
  width: 83.33%;
  margin: 0 auto;
`;
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const Spacer = styled.div`
  padding: 40px;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-around;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.1)
  );

  border-radius: 12px !important;
  border: 1px solid #fefefe;
  width: 340px;
  gap: 10px;
`;
const Image = styled.div`
  display: grid;
  place-items: center;
  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    padding-left: 8px;
  }
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    text-transform: uppercase;
    font-size: 14px;
    color: white;
    font-weight: 700;
    margin-bottom: 0;
  }
  p {
    color: white;
    font-weight: 400;
    font-size: small;
    margin-bottom: 0;
  }
`;
const Button = styled.div`
  display: grid;
  place-items: end;
  margin-right: 10px;
  margin-bottom: 10px;
  button {
    padding: 5px 12px;
    background: #f332c9;
    color: white;
    font-weight: 700;
    font-size: small;
    border: 1px solid transparent;
    border-radius: 8px;
    margin-top: 5px;
    &:hover {
      background: white;
      color: #f332c9;
      border: 1px solid #f332c9;
    }
  }
`;
