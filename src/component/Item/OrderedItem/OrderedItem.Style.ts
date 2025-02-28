import styled from "@emotion/styled";

export const OrderedItemWrapper = styled.article`
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #c4c4c4;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);
  & > div {
    display: flex;
    gap: 5px;
    & img {
      max-width: 280px;
      width: 30%;
      aspect-ratio: 1/1;
      object-fit: cover;
      border-radius: 10px;
    }
    & div {
      padding: 20px;
      & p {
        margin-bottom: 15px;
      }
      & span:first-of-type::after {
        content: "/";
      }
    }
    @media (max-width: 897px) {
      padding: 0px 14px;
    }
  }
  @media (min-width: 896px) {
    display: flex;
    height: 300px;
    justify-content: space-between;
    & div {
      flex-grow: 0.7;
      font-size: 32px;
    }
  }
`;

export const OrderedDate = styled.h2`
  border-bottom: 1px solid #767676;
  font-size: 24px;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

export const BtnGroup = styled.section`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  padding-bottom: 10px;
  @media (min-width: 896px) {
    flex-direction: column;
    width: 200px;
    justify-content: space-around;
    height: 150px;
    flex-shrink: 0;
    padding-left: 40px;
  }
`;

export const MoreInfoSection = styled.section`
  width: 100%;
  height: auto;
  border: 2px solid #e0e0e0;
  padding: 20px;
  margin: 10px 0;
  & p {
    font-size: 20px;
  }
  & p:first-of-type::after {
    content: "";
    border-bottom: 2px solid #e0e0e0;
    display: block;
    margin: 5px 0;
  }
`;

export const TotalPrice = styled.p`
  text-align: right;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const OrderNumber = styled.p`
  text-align: right;
  margin-bottom: 10px;
  font-size: 1rem;
`;
