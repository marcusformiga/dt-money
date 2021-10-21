import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.4rem;
    color: var(--text-title);
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    line-height: 3rem;
  }
  & .deposit {
      color: var(--bg-green);
  }
  & .withdraw {
      color: var(--red);
  }
  & .bg-green {
    background-color: var(--bg-green);
    color: #fff
}
@media(max-width: 800px){
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}

`;