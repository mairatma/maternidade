import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {ApolloClient, ApolloProvider, createNetworkInterface} from 'react-apollo';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3000/graphql',
  })
});

ReactDOM.render(
  <ApolloProvider client={client}><App /></ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
