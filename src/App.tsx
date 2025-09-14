import { useState } from 'react';
import './App.css';
import Product from './components/Product/Product';
import Modal from './components/ui/Modal';
import { productList } from './data';
import Button from './components/ui/Button';
function App() {
// --------- Rendering Products -----------
const RenderedProducts = productList.map((product) => (
  <Product key={product.id} product={product} />
));

// ----------- State & Handlers --------------
const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

// ------------------------------------------
  return (
    <>
      <div className="container mx-auto">
          <Button className='bg-blue-500 my-5 text-white duration-300 hover:bg-blue-600 z-50 ' onClick={openModal} width='w-fit'>
            Add New Product
          </Button>
        <Modal isOpen={isOpen} closeModal={closeModal} title='ADD NEW PRODUCT' >
          <Button className='bg-gray-200 text-gray-700 hover:bg-gray-300 duration-300'  onClick={closeModal}>
            Cancel
          </Button>
          <Button className='bg-blue-500 text-white duration-300 hover:bg-blue-600' onClick={closeModal}>
            Submit
          </Button>
           </Modal>
      <div className="products-wrapper text-xl   grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 ">
        {RenderedProducts}
      </div>
      </div>
    </>
  );
}

export default App;

// the buttons aren't clickeable anymore why ?

