import styled from "styled-components";

const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 36px;

  min-height: 100vh;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 33px;
  margin-bottom: 25px;
`;

export { LoginPage, LoginForm };
