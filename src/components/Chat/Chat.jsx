
import './chat.scss'
import { useState } from 'react';

function Chat(){
    const [chat, setChat] = useState(true);
  return (
    <div className='chat'>
        <div className="messages">
            <h1>Messages</h1>
            <div className="message">
                <img 
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="" />
                <span>Jhon Doe</span>
                <p>Lorem, ipsum dolor sit amet...</p>
            </div>
            <div className="message">
                <img 
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="" />
                <span>Jhon Doe</span>
                <p>Lorem, ipsum dolor sit amet...</p>
            </div>
            <div className="message">
                <img 
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="" />
                <span>Jhon Doe</span>
                <p>Lorem, ipsum dolor sit amet...</p>
            </div>
            <div className="message">
                <img 
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="" />
                <span>Jhon Doe</span>
                <p>Lorem, ipsum dolor sit amet...</p>
            </div>
            <div className="message">
                <img 
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="" />
                <span>Jhon Doe</span>
                <p>Lorem, ipsum dolor sit amet...</p>
            </div>
        </div>
        {chat && (
        <div className="chat-box">
            <div className="top">
                <div className="user">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    Jhon Doe
                </div>
                <span className="close" onClick={()=>setChat(null)}>X</span>
            </div>
            <div className="center">
                <div className="chat-message">
                    <p>Lorem ipsum, dolor sit amet </p>
                    <span>1 hour ago</span>
                </div>
                <div className="chat-message own">
                    <p>Lorem ipsum, dolor sit amet </p>
                    <span>1 hour ago</span>
                </div>
                <div className="chat-message">
                    <p>Lorem ipsum, dolor sit amet </p>
                    <span>1 hour ago</span>
                </div>
                <div className="chat-message own">
                    <p>Lorem ipsum, dolor sit amet </p>
                    <span>1 hour ago</span>
                </div>
                <div className="chat-message">
                    <p>Lorem ipsum, dolor sit amet </p>
                    <span>1 hour ago</span>
                </div>
                <div className="chat-message own">
                    <p>Lorem ipsum, dolor sit amet </p>
                    <span>1 hour ago</span>
                </div>
                <div className="chat-message">
                    <p>Lorem ipsum, dolor sit amet </p>
                    <span>1 hour ago</span>
                </div>
                <div className="chat-message own">
                    <p>Lorem ipsum, dolor sit amet </p>
                    <span>1 hour ago</span>
                </div>
                <div className="chat-message">
                    <p>Lorem ipsum, dolor sit amet </p>
                    <span>1 hour ago</span>
                </div>
                <div className="chat-message own">
                    <p>Lorem ipsum, dolor sit amet </p>
                    <span>1 hour ago</span>
                </div>
                <div className="chat-message">
                    <p>Lorem ipsum, dolor sit amet </p>
                    <span>1 hour ago</span>
                </div>
            </div>
            <div className="bottom">
                <textarea ></textarea>
                <button>Send</button>
            </div>
        </div>
        )}
    </div>
  )
}

export default Chat