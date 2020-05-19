import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;

  @media screen and (max-width: 800px) {
    padding: 0px;
  }
`;
