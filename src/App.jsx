import { Button, Result } from 'antd'
import { HashRouter } from 'react-router-dom'
import { KeepAliveProvider } from 'keepalive-react-component';

import ErrorBoundary from './components/ErrorBoundary';
import AppLayout from './views/AppLayout';
import { VotingProvider } from './context/Voter';



function App() {

  return (
    <HashRouter>
      <ErrorBoundary fallback={<Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={<Button type="primary">Back Home</Button>}
      />}>
        <KeepAliveProvider>
          <VotingProvider>
            <AppLayout />
          </VotingProvider>
        </KeepAliveProvider>
      </ErrorBoundary>
    </HashRouter >
  );
}

export default App;
