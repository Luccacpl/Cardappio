import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Aside from '../../components/Aside/Aside'
import SubAside from '../../components/SubAside/SubAside'
import Container from '../../components/Container/Container'
import { Grid } from '../../components/Grid/style'
import Button from '../../components/Button/Button'
import {Title} from '../../components/Text/text'

import api from "../../services/api";


import { TableWithTabs, Body } from './style'
import { TrashOutline, CreateOutline } from "react-ionicons";
// import { QRCode } from 'react-qrcode-logo';
import QRCode from 'qrcode.react'

import { LiMenu } from '../../components/SubAside/style'

interface IMesas {
  id: number,
  name: string,
}

interface ITable {
  id: number,
  table_qrcode: string,
  name: number,
  restaurant_id: string
}


const Mesas = () => {

  const history = useHistory()

  const [mesas, setMesas] = useState<IMesas[]>([])
  const [showLoader, setShowLoader] = useState(false)

  const isUserAuthenticated = () =>
    localStorage.getItem("TOKEN") === null && history.push("/");

  const getTokenFromStorage = (): string =>
    localStorage.getItem("TOKEN") as string;

    function GetTables() {
      setShowLoader(true)
      try {
        api
          .get('/table', {
            headers: {
              authorization: getTokenFromStorage(),
            },
          })
          .then(response => {
            setMesas(response.data.content)
            console.log('mesas: ', mesas)
            setShowLoader(true)
          })
      } catch(error) {
        console.log("DEU RUIM IRMÃOZINHO")
      }
    }

  // function GetTables() {
  //   setShowLoader(true);
  //   try {
  //     api
  //       .get<ITable[]>("/table", {
  //         headers: {
  //           authorization: getTokenFromStorage(),
  //         },
  //       })
  //       .then((response) => {
  //         const categoryData = response.data.map(({ id, name }) => ({
  //           label: name,
  //           value: id,
  //         }))
  //         setCategoryOptions(categoryData)
  //         console.log("opções: ", categoryOptions)
  //         setShowLoader(false);
  //         setCategories(response.data);
  //         console.log(response.data);
  //       });
  //   } catch (error) {
  //     return alert("ocorreu algum erro");
  //   }
  // }

  useEffect(() => {
    GetTables()
  }, [])

  return (
    <Grid>
      <Aside />
      <SubAside
        title="Mesas"
        // clicked={() => newCategoryButton()}
        addButtonText="+ Adicionar nova mesa"
        items={mesas}
      >
        {mesas.map(mesa => (
          <div key={mesa.id}>
            <LiMenu>
              <TrashOutline
                color="white"
                width="3rem"
                height="1.5rem"
              // onClick={() => setShowDeleteModal({ id: category.id, name: category.name, isActive: true })}
              />
              <CreateOutline
                color="white"
                width="3rem"
                height="1.5rem"
              // onClick={() => handleEditCategory(category)}
              />
              {mesa.name}
            </LiMenu>

            {/* {showDeleteModal.isActive && (
              <DeleteModal
                text={`Deseja excluir a categoria ${showDeleteModal.name}`}
                clicked={() => handleDeleteCategory(showDeleteModal.id)}
                closeClicked={() => setShowDeleteModal({ id: category.id, name: category.name, isActive: false })}
              />
            )} */}
          </div>
        ))}
      </SubAside>
      <Container display="flex" justifyContent="flex-end" padding="110px 6px 0px 55px" height="100vh">
        <Body>
          <TableWithTabs>
            <Title color="#B2DA5A" marginBottom="64px">
              Mesa 1
            </Title>
            <QRCode value="bundinha do allan" size={250} renderAs="svg" includeMargin={true} />
            <Button content="Imprimir" marginTop="48px" width="20%"/>
          </TableWithTabs>
        </Body>
      </Container>
    </Grid>
  )
}

export default Mesas