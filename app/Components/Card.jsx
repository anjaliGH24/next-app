import React from "react";

function Card({title, description,price, image, id, setCartItems, cartItems}) {
    // const[add, setAdd]=useState(false);

    // const handleAdd = () => {
    //     setAdd(!add);
    //     if (!add) {
    //       setCartItems([...cartItems, {id, title, description, price, image}]);
    //       console.log('Added items in the Cart');
    //     } else {
    //       setCartItems(cartItems.filter(item => item.title !== title));
    //     }
    // };

    const isAdded = cartItems.some(item => item.id === id); 

    const handleAdd = () => {
        if (!isAdded) {
            setCartItems([...cartItems, { id, title, description, price, image }]);
            console.log('Added items in the Cart');
        } else {
            setCartItems(cartItems.filter(item => item.id !== id));
            console.log('Removed items from the Cart');
        }
    };
    return(
        <div className="w-64 pt-3 shadow-md rounded-md relative border border-zinc-300 bg-zinc-100">
            <div className="h-72 w-60">
                <img className="w-full h-full px-4" src={image} alt="@" />
            </div>

            <div className="px-4 py-3 mt-3 mb-10">
                <h1 className="font-semibold">{title}</h1>
                <p className=" text-sm">{description}</p>
                <h1 className="text-xl mt-2"><span className="text-sm">$</span>{price}</h1>
            </div> 
            {/* <div className="w-full px-4 absolute bottom-7 left-1/2 -translate-x-[50%] translate-y-[50%]">
                <button onClick={()=>handleAdd()} className={`w-full ${add ? 'bg-blue-500 text-white':'bg-yellow-400'}  py-1 text-sm rounded-full`}>{add ? "Added" : "Add to Cart"}</button>             
            </div> */}
            <div className="w-full px-4 absolute bottom-7 left-1/2 -translate-x-[50%] translate-y-[50%]">
                <button onClick={handleAdd} className={`w-full ${isAdded ? 'bg-blue-500 text-white' : 'bg-yellow-400'} py-1 text-sm rounded-full`}>
                    {isAdded ? "Added" : "Add to Cart"}
                </button>
            </div>
        </div>
    )   
}
export default Card;