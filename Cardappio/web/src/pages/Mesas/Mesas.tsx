import { useState, useEffect } from 'react'
import Aside from '../../components/Aside/Aside'
import SubAside from '../../components/SubAside/SubAside'
import Container from '../../components/Container/Container'
import { Grid } from '../../components/Grid/style'

interface IMesas {
  name: string,
  id: number
}


function Mesas() {
  const [tables, setTables] = useState<IMesas[]>([])

  const [teste, setTeste] = useState(false)

  useEffect(() => {
    const mesas: IMesas[] = [
      {
        id: 0,
        name: "Mesa 1"
      },
      {
        id: 1,
        name: "Mesa 2"
      },
      {
        id: 2,
        name: "Mesa 3"
      },
      {
        id: 3,
        name: "Mesa 4"
      },
    ]
    setTables(mesas)
  }, [])

  return (
    <Grid>
      <Aside />
      <SubAside 
        items={tables} 
        title="Gerenciamento de mesas" 
        addButtonText="+ Adicionar nova mesa" 
      />
      <Container>
        <Grid grid="auto/ 1.5fr 2fr 2fr 2fr 1.5fr" gridGap="2.5% 2.5%" rowGap="2.5%" marginTop="2%">

        </Grid>
        <Grid grid="auto/ 1.5fr 2fr 2fr 2fr 1.5fr" gridGap="2.5%" rowGap="10px">

        </Grid>
      </Container>
    </Grid>
  );
}

export default Mesas;




