import logo from './logo.svg';
import './App.css';
import ProductMain from '../ProductMain';
import store from '../store';
import { Provider } from 'react-redux';
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from 'react-query-devtools'


const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>

      <div className="App">
          <ProductMain  />
      </div>
      </Provider>
    </QueryClientProvider>

  );
}

export default App;
