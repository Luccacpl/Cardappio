import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-width: 500px;
    border: 1px solid #202020;
    border-radius: 10px;
    margin: auto;
    max-height: 800px;
    background-color: #141414;
    @media screen and (max-width: 500px) {
      box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      height: 100%;
      max-height: 860px;
      margin-top: 0px;
  }
`

const CategoryContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    margin-top: 20px;
`

const Menu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: #202020;
    width: 100%;
    height: 50px;
`


export { Container, Menu, CategoryContainer }



