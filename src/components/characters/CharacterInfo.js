import React from 'react'
import Footer from '../ui/Footer'
import Header from '../ui/Header'
import './CharacterInfo.css'

const CharacterInfo = ({ name, dob, occupation, status, nick, actor, seasons, quotes }) => {
    return (
        <div>
            <Header />
            <h1>This is CharacterInfo Page</h1>
            <div class='section'>
                <div class='section-image'>
                    {/* <img class='section-img' src={item.img} alt="" /> */}
                </div>
                <div className="section-info">
                    <h1>{name}</h1>
                    <ul>
                        {/* <li>
                            <strong>Actor Name: </strong>{item.portrayed}
                        </li>

                        <li>
                            <strong>Occupation: </strong>{item.nickname}
                        </li>

                        <li>
                            <strong>DOB: </strong>{item.birthday}
                        </li>

                        <li>
                            <strong>Status: </strong>{item.status}
                        </li> */}
                    </ul>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default CharacterInfo
