import styled from 'styled-components'

interface GridProps {
    grid?: string
    gridGap?: string
    rowGap?: string
    marginTop?: string
}

const Grid = styled.div<GridProps>`
    display: grid;
    grid: ${props => props.grid || 'auto/ 0.5fr 1.5fr 4fr'};
    grid-gap: ${props => props.gridGap};
    margin-bottom: ${props => props.marginTop};
`

export { Grid }