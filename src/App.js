import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Pagination from './components/characters/Pagination'
import Footer from './components/ui/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CharacterInfo from './components/characters/CharacterInfo';

const App = () => {

  // Hooks for fetching data
  //items = [], here initially
  const [items, setItems] = useState([]);

  // Hooks to check if data is loading or not
  const [isLoading, setIsLoading] = useState(true);
  //after its loading, set the state to -> {false}

  //Hooks for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  //to make fetch request for API, always apply useEffect() Hooks with axios


  // Base URl : {https://www.breakingbadapi.com/api/}
  // useEffect() executes every time, render updates the component
  useEffect(() => {
    const fetchItems = async () => {
      //result is the promise object
      const result = await axios(`https://www.breakingbadapi.com/api/characters`);

      console.log(result.data);

      //add this data to the [items] of Hooks
      setItems(result.data);
      //this change the state of items ([]->{objects})
      setIsLoading(false);
      //this change the state of isLoading (true->false), cause loading is done

    }

    fetchItems();
  }, [])


  //GET current item
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  /**
   * paginate() method for changing page
   */
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }


  /**
   * Get all characters
    *Endpoint to retrieve information from all characters.
    *  {BaseURL/api/characters}
   */

  /**
   * Get single character
   * Example request by character id.
   * {BaseURL/api/characters/1} /1,/2,/3 are the unique IDs of characters
   */

  return <div className='container'>



    <Header />


    {/* <CharacterInfo items={items} /> */}


    <CharacterGrid isLoading={isLoading} items={currentItems} />

    <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate} />

    <Footer />

  </div>
  //passing isLoading & items as a props
}

export default App;
