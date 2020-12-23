import React from 'react'
import './CharacterItem.css'
import CharacterInfo from './CharacterInfo'
import { useHistory } from "react-router-dom";

const CharacterItem = ({ item }) => {
    console.log(item);
    const history = useHistory();

    return (
        <div class='card'>

            {/* card--1 */}
            <div class="card-inner">
                <div class="card-front">
                    <img class='card-image' src={item.img} alt="" />
                </div>
                <div class="card-info">
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Actor Name: </strong>{item.portrayed}
                        </li>

                        <li>
                            <strong>Occupation: </strong>{item.occupation}
                        </li>

                        <li>
                            <strong>DOB: </strong>{item.birthday}
                        </li>

                        <li>
                            <strong>Status: </strong>{item.status}
                        </li>
                    </ul>
                    {/* <button class='card-btn' onClick={() => history.push('/characterinfo')} variant="outlined">Information</button>

                    <button class='card-btn' onClick={(item) => (<CharacterInfo key={item.char_id} item={item}></CharacterInfo>)} variant="outlined">Explore</button> */}
                </div>
                <div class="card-quotes">
                    {/* appearence, nickname, portrayed */}
                    <ul>
                        <li><strong>Appearence: </strong>{item.appearance}</li>
                        <li><strong>Nickname: </strong>{item.nickname}</li>
                        <li><strong>Portrayed: </strong>{item.portrayed}</li>
                    </ul>
                </div>
            </div>

        </div>

    );
}
export default CharacterItem
