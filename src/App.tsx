import './App.css'
import WorldMap from '../components/WorldMap'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  border: 1px solid black;
  overflow: hidden;
`
const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function App() {
  return (
    <Main>
      <Wrapper>
        <WorldMap />
      </Wrapper>
    </Main>
  )
}

export default App
