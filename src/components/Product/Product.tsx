// import React from 'react'

import type { IProduct } from "../../interfaces";
import { txtSlice } from "../../utils/functions";
import Button from "../ui/Button";
import Image from "../ui/image/Image";
interface ProductProps {
product : IProduct
}

const Product = ({product} : ProductProps) => {
  const {  title, description, imageURL, price , category } = product;
  return (
    <div className="border-gray-200 justify-between max-w-sm border rounded-md flex flex-col p-2  mx-auto md:mx-0">
      <Image
        className="rounded-md h-52 w-full object-cover lg:object-cover"
        imageURL={imageURL}
        alt={title}
      />
      <h3 className="text-lg font-sm my-1 ">{txtSlice(title , 25)}</h3>
      <p className="text-sm font-sm " >
        {txtSlice(description, 100)}
      </p>

      <div className="flex my-2 space-x-2">
        <span className="w-5 h-5 rounded-full bg-indigo-600 cursor-pointer" />
        <span className="w-5 h-5 rounded-full bg-red-600 cursor-pointer" />
        <span className="w-5 h-5 rounded-full bg-yellow-600 cursor-pointer" />
      </div>
      {/* <img className="rounded-full w-10 h-10 " src="https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}

      <div className="price flex justify-between items-center">
        <span>${price}</span>
        <Image
          className="w-10 h-10 rounded-full cursor-pointer object-cover"
          imageURL={category.imageURL}
          alt={category.name}
        />
      </div>
      <div className="buttons flex space-x-2 mt-2 text-white items-center justify-between">
        <Button className=" bg-red-600" onClick={() => alert('Deleted')} width="w-full">
          Delete
        </Button>
        <Button className=" bg-indigo-600 " onClick={() => alert('Edited')}>
          Edit
        </Button>
        
      </div>
    </div>
  );
};

export default Product;
