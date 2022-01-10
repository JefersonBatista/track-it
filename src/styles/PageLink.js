import { Link } from "react-router-dom";

import styled from "styled-components";

const PageLink = styled(Link)`
  font-family: "Lexend Deca", sans-serif;
  font-size: 14px;
  color: #52b6ff;

  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;

export { PageLink };
