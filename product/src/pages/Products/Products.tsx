import React, { Fragment, useEffect, useState } from 'react';
import classes from './Products.module.css';
import { Button } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProducts,
  resetProducts,
  deleteProduct,
} from '../../store/reducers/productSlice';
import * as fromReducer from '../../store/reducers';
import { Product } from '../../models/product.model';
import { Link, useNavigate } from 'react-router-dom';
import { Spinner } from 'flowbite-react';
import { resetLoading } from '../../store/reducers/uiLoadingSlice';
import { addToCart } from '../../store/reducers/cartShoppingSlice';
import DeleteProductModal from '../../components/DeleteProductModal/DeleteProductModal';
import ProductCard from '../../components/ProductCard/ProductCard';

const ProductsPage: React.FC = () => {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [productIdDeleted, setProductIdDeleted] = useState('');

  const products: Product[] = useSelector(fromReducer.selectProducts);
  const isAdmin: boolean = useSelector(fromReducer.selectIsAdmin);

  const productsLoading: boolean = useSelector(fromReducer.selectLoadings)[
    getProducts.type
  ];
  const deleting: boolean = useSelector(fromReducer.selectLoadings)[
    deleteProduct.type
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProducts());

    return () => {
      dispatch(resetLoading());
      dispatch(resetProducts());
    };
  }, [dispatch]);

  const navigateToCreate = () => {
    navigate('/product/create');
  };

  const deleteProductHandler = (productId: string) => {
    setIsShowDeleteModal(true);
    setProductIdDeleted(productId);
  };

  const closeConfirmModalHandeler = (isConfirm: boolean) => {
    if (isConfirm) {
      dispatch(deleteProduct({ productId: productIdDeleted }));
    }

    setIsShowDeleteModal(false);
  };

  const addToCard = (product: Product) => {
    dispatch(addToCart({ item: product }));
  };

  const adminAdtions = (product: Product) => (
    <>
      <Link
        to={`/product/${product.id}`}
        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
      >
        Edit
      </Link>
      <Link
        to={''}
        onClick={() => deleteProductHandler(product.id)}
        className={`font-medium text-cyan-600 hover:underline dark:text-cyan-500 ml-4 ${
          deleting ? classes.disabled : ''
        }`}
      >
        Delete
      </Link>
    </>
  );

  const userAdtions = (product: Product) => (
    <Button onClick={() => addToCard(product)} className="w-max">
      Add to cart
    </Button>
  );

  // const temp = (
  //   <Card className="overflow-x-auto">
  //     {productsLoading ? (
  //       <div className="text-center">
  //         <Spinner aria-label="loading" />
  //       </div>
  //     ) : (
  //       <Table hoverable>
  //         <Table.Head>
  //           <Table.HeadCell>Name</Table.HeadCell>
  //           <Table.HeadCell>Price</Table.HeadCell>
  //           <Table.HeadCell>Image</Table.HeadCell>
  //           <Table.HeadCell>Description</Table.HeadCell>
  //           <Table.HeadCell>
  //             <span className="sr-only">Actions</span>
  //           </Table.HeadCell>
  //         </Table.Head>
  //         <Table.Body className="divide-y">
  //           {(products || []).map((product) => {
  //             return (
  //               <Table.Row
  //                 className="bg-white dark:border-gray-700 dark:bg-gray-800"
  //                 key={product.id}
  //               >
  //                 <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-2xl">
  //                   {product.name}
  //                 </Table.Cell>
  //                 <Table.Cell className="text-red-600 font-bold text-xl">
  //                   {product.price}$
  //                 </Table.Cell>
  //                 <Table.Cell>
  //                   <img
  //                     src={product.imageUrl}
  //                     alt={product.imageUrl}
  //                     className="max-w-60 max-h-60"
  //                   />
  //                 </Table.Cell>
  //                 <Table.Cell>{product.description}</Table.Cell>
  //                 <Table.Cell>
  //                   {isAdmin ? adminAdtions(product) : userAdtions(product)}
  //                 </Table.Cell>
  //               </Table.Row>
  //             );
  //           })}
  //         </Table.Body>
  //       </Table>
  //     )}
  //   </Card>
  // );

  return (
    <Fragment>
      <div className="flex justify-between mb-8">
        <div className="text-2xl font-bold">Product list</div>
        {isAdmin && <Button onClick={navigateToCreate}>Create</Button>}
      </div>

      <div className={classes.productsCardData}>
        {productsLoading ? (
          <div className="text-center">
            <Spinner aria-label="loading" />
          </div>
        ) : (
          (products || []).map((product, index) => {
            return <ProductCard product={product} key={index}></ProductCard>;
          })
        )}
      </div>

      <DeleteProductModal
        isShowDeleteModal={isShowDeleteModal}
        onCloseConfirmModal={closeConfirmModalHandeler}
      ></DeleteProductModal>
    </Fragment>
  );
};

export default ProductsPage;
