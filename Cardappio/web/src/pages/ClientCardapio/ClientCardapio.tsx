import { P } from 'components/Text/text'
import Cards from '../../components/Cards/Cards'
import { Container, Menu, CategoryContainer } from './style'
import FundoMenor from '../../Images/FundoMenor.png';


import { ArrowBackCircleOutline } from 'react-ionicons'

const ClientCardapio = () => {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
    }}>
      <Container>
        <Menu>
          <div style={{
            width: "80%",
            display: 'flex',
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingLeft: "20px"
          }}>
            <P color="#FC8533" fontWeight="Bold" fontSize="18px">Cardappio</P>
          </div>
          <div style={{
            width: "20px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingRight: "20px"
          }}>
            <ArrowBackCircleOutline
              color="#B2DA5A"
              width="30px" height="30px"
              style={{ cursor: "pointer" }}
            />
          </div>
        </Menu>

        <CategoryContainer>
          <P color="#B2DA5A" fontSize="18px">Bebidas</P>
          <div style={{
            marginTop: "12px"
          }}>
            <Cards
              name="teste"
              desc="teste"
              price="24"
              src={FundoMenor}
              bgColor="#202020"
            />
          </div>
        </CategoryContainer>
      </Container>
    </div>
  )
}

export default ClientCardapio