import Chat from '../../components/Chat/Chat'
import List from '../../components/List/List'
import './profilePage.scss'

function ProfilePage(){
  return (
    <div className='profile-page'>
        <div className="details">
            <div className="wrapper">
                <div className="title">
                    <h1>User Information</h1>
                    <button>Update Profile</button>
                </div>
                <div className="info">
                    <span>Avatar: 
                        <img 
                        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="" />
                    </span>
                    <span>Username: <b>Jhon Doe</b></span>
                    <span>E-mail: <b>jhon@gmail.com</b></span>

                </div>
                <div className="title">
                    <h1>My List</h1>
                    <button>Create New Post</button>
                </div>
                <List/>
                <div className="title">
                    <h1>Saved List</h1>
                </div>
                <List/>
            </div>
        </div>
        <div className="chat-container">
            <div className="wrapper">
                <Chat/>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage