import {useState} from "react";
import styled from "styled-components";

const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <a href="#">
            <img src="/logo.svg" alt="logo" />
          </a>
        </div>
        <div className="search">
          <input type="text" placeholder="Search Food" />
        </div>
      </TopContainer>
      <FilterContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>
      <FoodCardContainer>
        <FoodCards></FoodCards>
      </FoodCardContainer>
    </Container>
  );
};

export default App;

const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: #fff;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-bottom: 40px;
`;

const Button = styled.button`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  color: #fff;
`;

const FoodCardContainer = styled.section`
  background-size: cover;
  height: calc(100vh - 210px);
  background-image: url("bg.png");
`;
const FoodCards = styled.div``;

