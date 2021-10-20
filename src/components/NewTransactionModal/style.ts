import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e7e9;
    margin-top: 1rem;
    margin-left: 1rem;
    cursor: pointer;
  }
  input[type="submit"] {
    width: 100%;
    height: 3rem;
    background: var(--bg-green);
    color: #fff;
    font-size: 1rem;
    border: 0;
    border-radius: 0.4rem;
    text-transform: uppercase;
    transition: 0.2s;
  }
  & :hover {
    filter: brightness(0.6);
  }
  img {
    width: 20px;
  }
  span {
    display: inline-block;
    margin-left: 20px;
    font-size: 1rem;
    color: var(--text-title);
  }
`;

export const TransactionsBtnContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-left: 2rem;
     

`;
interface RadioBoxProps {
  isActive: boolean
}
export const RadioBox = styled.button<RadioBoxProps>`
  height: 3rem;
  border-radius: 0.4rem;
  background: ${(props) => (props.isActive ? "#bbc1c7 " : "#fff")};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20px;
  }
  span {
    display: inline-block;
    margin-left: 20px;
  }
`;
