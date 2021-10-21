import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --background:#f0ff2f5;
    --red: #e52e4d;
    --blue:#54299c;
    --blue-light:#6933ff;
    --text-title:#364f6f;
    --text-body:#969cb3;
    --shape:#ffffff;
    --bg-green: #33cc95;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: var(--text-body);
    color: #000;
}
html{
    @media(max-width: 1080px){
        font-size: 93.75%;
    }
    @media(max-width: 720px){
        font-size: 87.75%;
    }
    @media(max-width: 860px){
        font-size: 85%;
    }
}

button{
    cursor: pointer;
}
[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}
.react-modal-overlay{
 background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.react-modal-content{
   width: 100%auto;
   max-width: 576px;
   background: var(---background);
   padding: 3rem;
   position: relative;
   border-radius: 0.5rem;
}
.modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border:0;
    background: transparent;
}
`;