
const getItemFromLocalStorage =()=>{
    const storedOrder = localStorage.getItem('order');
    if(storedOrder){
        return JSON.parse(storedOrder);
    }
    return [];
}

const addToLS=(name)=>{
    const order = getItemFromLocalStorage();
    order.push(name);

    const stringifyOrder = JSON.stringify(order);
    localStorage.setItem('order',stringifyOrder);
}

export {getItemFromLocalStorage,addToLS};

