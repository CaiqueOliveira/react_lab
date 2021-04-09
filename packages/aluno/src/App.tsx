import styled from 'styled-components';
import { RootApp } from './components/root/Root.app';
import { UserContext, IUser } from './shared/domains/user.domain';

const AppContainer = styled.div`
  text-align: center;
`;

function App() {
  // Mock de usuário
  const user: IUser = {
    id: '0',
    name: 'Teste',
    token: 'anyToken'
  }

  return (
    <UserContext.Provider value={user}>
      <AppContainer>
        <RootApp />
       </AppContainer>
    </UserContext.Provider>
  );
}

export default App;
