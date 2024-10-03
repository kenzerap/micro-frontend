import { useEffect } from 'react';
import { mount } from 'productApp/ProductApp';

function ProductApp() {
  useEffect(() => {
    const divEle = document.getElementById('product-app');
    console.log('mount: ', mount)

    mount(divEle);
  }, []);

  return <div id="product-app" />;
}

export default ProductApp;
