import React, {useEffect, useState} from 'react'
import accLogo from './media/acc-logo.svg'
import greyLogo from './media/Grey-long-logo.svg'
import addFriend from './media/add-user.svg'
import sendArrow from './media/send-arrow-green.svg'
import './friends.css'
import { useLocation } from 'react-router-dom'
//imports


export default function Friends() {

     //array for friend users info
    let usernames = [
        {nameID: 1,
        username: "Bypod",
        game: "F1 2021",
        profilePic:"https://technotrenz.com/wp-content/uploads/2021/12/1_Fernando-Alonsos-reaction-to-Max-Verstappen-crash-caught-on-camera-in-new-footage-780x470.jpg"
        },
        {nameID: 2,
        username: "Alan52",
        game: "Valorant",
        profilePic:"https://i.pinimg.com/originals/b1/92/4d/b1924dce177345b5485bb5490ab3441f.jpg"}
    ]

    //useStates for changing components on the page

    const [messageBoxText, setMessageBoxText] = useState("");
    const [messageHistory, setMessageHistory] = useState([]); //[<p id="messages-start-text">Welcome to the start of your messages with {usernames[0].username}!</p>]
    const [oldMessagesPrint, setOldMessagesPrint] = useState([])

    let oldMessagesUpdated = (e)=>{
        let oldMessages = JSON.parse(localStorage.getItem('OldSavedMessages'))

        if (oldMessages ==null){
            oldMessages = []
            oldMessages.map((message)=>{
                return setOldMessagesPrint(message)
            })} else{
                oldMessages.map((message)=>{
                    return setOldMessagesPrint(message)})
        }


        // setOldMessagesPrint(oldMessages)

        //method #1 that failed
        // for (let i = 0; i <= oldMessages.length -1; i++) {
        //     setOldMessagesPrint([oldMessagesPrint, oldMessages[i]])
        // }
       
        //method #2 that failed
        // oldMessages.forEach((e)=>{
        //     setOldMessagesPrint(e)
        // })
    }
    
    

    let messageBoxTextUpdated = (e) => {
        setMessageBoxText(e.target.value)
    }

    let onClick = (e) => {
            //We add the new p tag with the message box text into the array using the "spread" syntax!
        setMessageHistory([...messageHistory, <p  class="new-message">{messageBoxText}</p>]);
        setMessageBoxText("")
        storeMessageHistory();
    }

    let handleEnterClick = (e) =>{
        if (e.code === "Enter") {
            onClick();
            console.log("enter has been pressed")
          }
    }
    
    let MyInfo =
        {
            username: "jimmy the explorer",
            password: "john123"
        }
    

    //let messageHistoryArray = []//get old saved messages at start... if null empty array

    let storeMessageHistory = ()=>{
        // var newMessages = JSON.parse(localStorage.getItem('SavedMessageHistory'))
        // var oldMessages = JSON.parse(localStorage.getItem('OldSavedMessages'))
        
        // if(newMessages == null){
        //     newMessages = []
        // } else {
        //     let newMessageArray = []
        //     messageHistory.forEach((e)=>{
        //         var msgChild = e.props.children;
        //         newMessageArray.push(msgChild)
        //     })
    
        //     localStorage.setItem('SavedMessageHistory', JSON.stringify(newMessageArray))
        // }
        let newMessageArray = []
            messageHistory.forEach((e)=>{
                var msgChild = e.props.children;
                newMessageArray.push(msgChild)
            })
    
            localStorage.setItem('SavedMessageHistory', JSON.stringify(newMessageArray))
        
    }

    window.onload = ()=>{
        var newMessages = JSON.parse(localStorage.getItem('SavedMessageHistory'))
        var oldMessages = JSON.parse(localStorage.getItem('OldSavedMessages'))

        if(oldMessages == null){
            localStorage.setItem('OldSavedMessages', JSON.stringify(newMessages))
            localStorage.setItem('SavedMessageHistory', [])   
        } else {
            newMessages.forEach((e)=>{
                oldMessages.push(e)
            })

            localStorage.setItem('OldSavedMessages', JSON.stringify(oldMessages))
            localStorage.setItem('SavedMessageHistory', JSON.stringify([]))         
        }

        oldMessagesUpdated()
    }

    // storeMessageHistory()

    return (
        <div class="friends-container">
            <header>
                <nav class="home-navbar">
                    <div className="nav-left">
                        <a href="/home"><img src={greyLogo} alt="" /></a>
                    </div>
                    <div className="nav-right">
                        <a href="">friends</a>
                        <a href="">library</a>
                        {/* <img src={bPlus} alt="" /> */}
                        <h2 id="my-username-header">{MyInfo.username}</h2>
                        <img src={accLogo} alt="" id="acc-badge"/>
                    </div>
                </nav>
            </header>
            <main>
                <div className="friends-inner-container">
                    <div className="friends-list">
                        <div className="friends-list-header">
                            <h1>Friends</h1>
                            <a href=""><img src={addFriend} alt="add friends button" /></a>
                        </div>
                        <div className="friends-list-names">
                            <div className="friend-info">
                                <div className="friend-name-left">
                                    <img src={usernames[0].profilePic} alt="" class="friend-profile-pic"/>
                                    <h2>{usernames[0].username}</h2>
                                </div>
                                <div className="friend-name-right">
                                    <h4>{usernames[0].game}</h4>
                                </div>
                            </div>
                            <div className="friend-info">
                                <div className="friend-name-left">
                                    <img src={usernames[1].profilePic} alt="" class="friend-profile-pic"/>
                                    <h2>{usernames[1].username}</h2>
                                </div>
                                <div className="friend-name-right">
                                    <h4>{usernames[1].game}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="friends-messages">
                        <div className="friends-messages-sent"><p id="messages-start-text">Welcome to the start of your messages with {usernames[0].username}!</p>{oldMessagesPrint}{messageHistory}</div> {/*insert innerHTML here for when message is sent*/}
                        <div className="friend-messages-box">
                            <input 
                            type="text" 
                            placeholder="say something..." 
                            id="message-box"
                            onChange={messageBoxTextUpdated}
                            value={messageBoxText}
                            onKeyPress={handleEnterClick}
                            set autocomplete="off"
                            />
                            <button onClick={onClick} id="message-button" type="submit"><img src={sendArrow} alt="" /></button>
                            
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
