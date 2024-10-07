import { Provider } from 'react-redux';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import axios, { AxiosError } from 'axios';
import { store } from './store/reducers';
import MainLayout from './pages/MainLayout/MainLayout';

axios.defaults.baseURL = 'https://nodejs-todo-9emm.onrender.com';
axios.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json';

  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bear ${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      localStorage.clear();
      window.location.href = '/login';
    }

    throw error.response?.data;
  }
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '',
        async lazy(): Promise<any> {
          const HomePage = (await import('./pages/Home/Home')).default;
          return { Component: HomePage };
        },
      },
      {
        path: 'products',
        async lazy(): Promise<any> {
          const ProductsPage = (await import('./pages/Products/Products'))
            .default;
          return { Component: ProductsPage };
        },
      },
      {
        path: 'products/:productId/view',
        async lazy(): Promise<any> {
          const ProductViewPage = (
            await import('./pages/ProductViewDetail/ProductViewDetail')
          ).default;
          return { Component: ProductViewPage };
        },
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
