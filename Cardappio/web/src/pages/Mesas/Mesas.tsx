import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Aside from '../../components/Aside/Aside'
import SubAside from '../../components/SubAside/SubAside'
import Container from '../../components/Container/Container'
import { Grid } from '../../components/Grid/style'
import Button from '../../components/Button/Button'
import { Title } from '../../components/Text/text'
import Loader from "components/Loader";
import DeleteModal from '../../components/DeleteModal/index'

import api from "../../services/api";


import { TableWithTabs, Body } from './style'
import { TrashOutline, CreateOutline } from "react-ionicons";
// import { QRCode } from 'react-qrcode-logo';
import QRCode from 'qrcode.react'

import { LiMenu } from '../../components/SubAside/style'




interface ITable {
  table_id: number,
  table_qrcode: string,
  table_number: number,
  restaurant_id: string
}

interface IDeleteTable {
  table_number: number,
  table_id: number,
  isActive: boolean 
}


const Mesas = () => {

  const history = useHistory()

  const [showDeleteModal, setShowDeleteModal] = useState<IDeleteTable>({ table_id: 0, table_number: 0, isActive: false })

  const [mesas, setMesas] = useState<ITable[]>([])
  const [filteredMesas, setFilteredMesas] = useState<ITable>()
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
          setShowLoader(false)
        })
    } catch (error) {
      console.log("DEU RUIM IRMÃOZINHO")
    }
  }

  function GoToTable({ table_id }: ITable) {
    setShowLoader(true)
    try {
      api
        .get(`/table/${table_id}`, {
          headers: {
            authorization: getTokenFromStorage(),
          },
        })
        .then(response => {
          setFilteredMesas(response.data.content)
          console.log("mesas filtradas: ", filteredMesas)
          setShowLoader(false)
        })
    } catch (error) {
      console.log("DEU: RUIM")
    }
  }

  async function handleDelete(id: number) {
    try {
      await api.delete("/table/" + id, {
        headers: {
          authorization: getTokenFromStorage(),
        },
      });
      GetTables()
      console.log(id);
    } catch (error) {
      return alert("ocorreu algum erro");
    }

    setShowDeleteModal({ table_id: id, table_number: showDeleteModal.table_number, isActive: false })
  }




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
      // items={mesas}
      >
        {mesas.map(mesa => (
          <div key={mesa.table_id}>
            <LiMenu onClick={() => GoToTable(mesa)}>
              <TrashOutline
                color="white"
                width="3rem"
                height="1.5rem"
                onClick={() => setShowDeleteModal({ table_id: mesa.table_id, table_number: mesa.table_number, isActive: true })}
              />
              <CreateOutline
                color="white"
                width="3rem"
                height="1.5rem"
              // onClick={() => handleEditCategory(category)}
              />
              Mesa {mesa.table_number}
            </LiMenu>

            {showDeleteModal.isActive && (
              <DeleteModal
                text={`Deseja excluir a Mesa: ${showDeleteModal.table_number}`}
                clicked={() => handleDelete(showDeleteModal.table_id)}
                closeClicked={() => setShowDeleteModal({ table_id: mesa.table_id, table_number: mesa.table_number, isActive: false })}
              />
            )}
          </div>
        ))}
      </SubAside>
      <Container display="flex" justifyContent="flex-end" padding="110px 6px 0px 55px" height="100vh">
        <Body>
          <TableWithTabs>
            {filteredMesas === undefined
              ?
              <Title color="#B2DA5A" marginBottom="64px">
                Clique na mesa para obter o QR Code!
              </Title>
              :
              (
                <>
                  <Title color="#B2DA5A" marginBottom="64px">
                    Mesa: {filteredMesas.table_number}
                  </Title>
                  <QRCode value={filteredMesas.table_qrcode} size={250} renderAs="svg" includeMargin={true} />
                  <Button content="Imprimir" marginTop="48px" width="20%" />
                </>
              )
            }

          </TableWithTabs>
        </Body>
      </Container>
      {showLoader && <Loader />}
    </Grid>
  )
}

export default Mesas