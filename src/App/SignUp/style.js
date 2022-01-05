import styled from "styled-components";

const SignUpPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 36px;

  min-height: 100vh;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 33px;
  margin-bottom: 25px;

  width: 100%;
`;

export { SignUpPage, SignUpForm };
