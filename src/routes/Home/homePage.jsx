import SearchBar from '../../components/SearchBar/SearchBar'
import './homePage.scss'

function HomePage(){
  return (
    <div className='home-page'>
        <div className="text-container">
            <div className="wrapper">
                <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Exercitationem deserunt ab fugit optio excepturi voluptas qui 
                    ducimus in ea sed perferendis illum esse, repudiandae, 
                    laudantium dolores ad! Mollitia, excepturi velit?
                </p>
                <SearchBar/>
                <div className="boxes">
                    <div className="box">
                        <h1>16+</h1>
                        <h2>Years of Experience</h2>
                    </div>
                    <div className="box">
                        <h1>200</h1>
                        <h2>Award Gained</h2>
                    </div>
                    <div className="box">
                        <h1>2000+</h1>
                        <h2>Property Ready</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="img-container">
            <img src="/bg.png" alt="" />
        </div>
    </div>
  )
}

export default HomePage