import styled from "@emotion/styled";
import { OutlinedInput, InputAdornment } from "@mui/material";

export const WarningSection = styled.aside`
  margin-top: 10px;
  width: 20rem;
  flex-shrink: 0;
  max-height: 21.625rem;
  & article {
    background: #ffefe8;
    margin-top: 10px;
    padding: 1.25rem;
  }
  & li {
    list-style-type: "-";
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    padding-left: 5px;
  }
  @media (max-width: 896px) {
    width: 100%;
  }
`;
export const MainSection = styled.main`
  padding-top: 2.75rem;
  margin-bottom: 96px;
  max-width: 110%;
  margin: 0 auto;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 110%;
  & h2 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 2.625rem;
  }
  & small {
    color: #eb5757;
    font-size: 16px;
    font-weight: 500;
  }
  @media (max-width: 896px) {
    padding: 30px 10px;
  }
`;
export const FormSection = styled.form`
  float: right;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2.5rem;
  & > div:not(:last-of-type) {
    display: flex;
    gap: 40px;
    @media (max-width: 896px) {
      flex-direction: column;
    }
  }
`;
export const MainContent = styled.section`
  width: 100%;
  display: flex;
  gap: 5rem;
  @media (max-width: 896px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const UploadImg = styled.div`
  width: 28.375rem;
  height: 30.25rem;
  aspect-ratio: 1/1;
  background: #c4c4c4;
`;

export const UploadProductInfo = styled.div`
  color: #767676;
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  & div:not(:nth-of-type(3)) {
    margin-bottom: 0.5625rem;
  }
  & div:not(:nth-of-type(1), :nth-of-type(3)) {
    width: 220px;
  }
  & h5 {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 0.625rem;
  }
`;

export const UploadProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  & textarea {
    width: 100%;
  }
`;

export const Input = styled(OutlinedInput)`
  width: 100%;
  margin-top: 0.625rem;
  border-radius: 0.3125rem;
  position: relative;
`;
export const Sufix = styled(InputAdornment)`
  background-color: #c4c4c4;
  width: 54px;
  max-height: 56px;
  height: 60px;
  padding: 10px 0;
  position: absolute;
  right: -8px;
  top: 0;
  border-radius: 0 5px 5px 0;
  & p {
    color: #fff;
    margin: 0 auto;
  }
`;
export const NameSufix = styled(InputAdornment)`
  width: 54px;
  max-height: 56px;
  height: 60px;
  padding: 10px 0;
  position: absolute;
  right: -2px;
  top: 0;
  border-radius: 0 5px 5px 0;
  & p {
    color: #c4c4c4;
    margin: 0 auto;
  }
`;

export const ButtonGroup = styled.div`
  margin: 10px 0 8.5rem auto;
  display: flex;
  gap: 14px;
  width: 100%;
  justify-content: end;
  @media (max-width: 896px) {
    width: 100%;
    flex-direction: row;
  }
`;
export const ProductImgInput = styled.input`
  display: none;
`;
export const ProductImg = styled.img`
  width: 28.375rem;
  aspect-ratio: 1/1;
  object-fit: cover;
  border: 0.5px solid #dbdbdb;
  border-radius: 10px;
`;
export const EmptyBox = styled.div`
  margin-top: 5px;
  max-width: 454px;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 10px;
  background: #c4c4c4;
`;
export const ProductImgWrapper = styled.div`
  max-width: 28.375rem;
  width: 100%;
  aspect-ratio: 1/1;
  margin-bottom: 10px;
  position: relative;
  & h5 {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 0.625rem;
  }
`;
export const ImgWrapper = styled.div`
  margin-top: 5px;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 10px;
  background: #c4c4c4;
  overflow: hidden;
`;
export const ProductIconWrapper = styled.label`
  display: inline-block;
  cursor: pointer;
  position: absolute;
  width: 100%;
  aspect-ratio: 1/1;
`;
export const ProductImgIcon = styled.img`
  object-fit: contain;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const ShippingBtn = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  height: 3.375rem;
  margin-bottom: 1rem;
  & button {
    border: 1px solid #c4c4c4;
    &:hover {
      border: 1px solid #c4c4c4;
    }
  }
`;
export const DesktopWarning = styled.small`
  @media (max-width: 896px) {
    display: none;
    & + article {
      display: none;
    }
  }
`;
export const MobileWarning = styled.small`
  @media (min-width: 897px) {
    display: none;
  }
`;
// export const MethodBtn = styled(ButtonStyle)`
//   &:active,
//   &.active {
//     background-color: #21bf48;
//     color: white;
//   }
// `;
