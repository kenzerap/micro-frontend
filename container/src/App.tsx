import { lazy, Suspense } from 'react';
import './App.css';
const ProductApp = lazy(() =>
  import('./components/ProductApp').catch((error) => {
    console.error('Component Failed Loading:', error);
    return { default: () => <div>load error</div> };
  })
);

function App() {
  console.log('ProductApp: ', ProductApp);
  // fetch('http://localhost:4201/assets/remoteEntry.js')
  //   .then(mount(divEle))
  //   .catch((err) => console.log('err: ', err));

  return (
    <>
      <h1>this is container app</h1>
      <Suspense fallback="Loading System">
        {ProductApp ? <ProductApp /> : null}
      </Suspense>
    </>
  );
}

export default App;
