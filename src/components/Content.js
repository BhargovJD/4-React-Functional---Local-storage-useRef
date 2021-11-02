import React from 'react'
import { useState } from 'react';
import Footer from './Footer';
import Additem from './Additem';


export default function Content() {

    const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));



    // Changing items state when check button clicked and saving items array in  listItems as items
    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);

        setItems(listItems);

        // Saving items array in local storage
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));

    }

    // Delete from items array

    const handleDelete = (id) => {
        // console.log(id);

        const listItems = items.filter((item) => item.id !== id);

        setItems(listItems);

        // Saving items array in local storage
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));



    }

    // ....................................................

    // Creating a new state item
    const [newItem, setNewItem] = useState('')

    // Function to add new item

    const addItem = (item) => {

        const id = items.length ? items[items.length - 1].id + 1 : 1;
        const myNewItem = { id, checked: false, name: item };
        const listItems = [...items, myNewItem];
        console.log(listItems)

        setItems(listItems);

        // Saving items array in local storage
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));

    }

    // new item submit handler

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!newItem) return;
        addItem(newItem);
        setNewItem('');

    }


    // ..........................................................
  






    return (
        <main>
            <h4>Content</h4>

            <Additem newItem={newItem} setNewItem={setNewItem} submit={handleSubmit} />



            {items.length ? (<ul>

                {items.map((item) => (


                    <li key={item.id}>

                        <input onChange={() => handleCheck(item.id)} type="checkbox" checked={item.checked}></input>
                        <label>{item.name}</label>
                        <button onClick={() => handleDelete(item.id)} >Delete</button>

                    </li>


                ))}
            </ul>) : <p>List is empty</p>
            }


            <Footer length={items.length} />







        </main>
    )
}
