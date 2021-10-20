import styled from "styled-components";

export const Container = styled.header`
background-color: var(--blue);

`
export const Content = styled.div`
max-width: 1120px;
margin: 0 auto;
padding: 2rem 1rem 12rem;
display: flex;
justify-content: space-between;
text-align: center;
button{
    font-size: 1rem;
    color: #fff;
    background-color: var(--blue-light);
    border: 0;
    border-radius: 0.4rem;
    padding: 0 2rem;
    height: 3rem;
    transition: 0.2s;
    &:hover{
        filter: brightness(0.7);
    }
}
`