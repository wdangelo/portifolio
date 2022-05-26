import styled from "styled-components";

export const Container = styled.div`
    margin-top: 15%;
    display: flex;
    flex-direction: column;
    position: fixed;

    button {
 
        border: none;
        height: 50px;
        width: 100px;
        border-radius: 100px;
        transition: transform .5s ease;
    }
    button:hover {
        transform: scale(1.5);
        transition: transform .3s ease;
        width: 110px;

    }
`