import React from 'react'
import CharacterItem from './CharacterItem'
import CharacterInfo from './CharacterInfo'
/**
 * you can use (props), but you have to write->props.isLoading & props.items
 * So, you can structure the variable {isLoading, items}, and 
 * it becomes easy to write
 */
const CharacterGrid = ({ isLoading, items }) => {
    // check if, it is still loading
    //if yes, then show a spinner
    return isLoading ? (<h1>Loading...</h1>) : (<section class='cards'>
        {items.map((item) => (<CharacterItem key={item.char_id} item={item}></CharacterItem>))}

    </section>);
}

export default CharacterGrid
