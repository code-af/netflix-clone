import './App.css'
import NavBar from './Components/NavBar/NavBar.jsx'
import Banner from './Components/Banner/Banner.jsx'
import ContentCards from './Components/ContentCards/ContentCards.jsx'
import {originals, actionGenre, comedyGenre, horrorGenre, romanceGenre, documentaries} from './genre_urls.jsx'

function App() {
  return(
    <>
      <NavBar/>
      <Banner/>
      <ContentCards url={originals} title = "Netflix Originals" isOriginal />
      <ContentCards url={actionGenre} title = "Action"/>   
      <ContentCards url={comedyGenre} title = "Comedy"/>   
      <ContentCards url={horrorGenre} title = "Horror"/>   
      <ContentCards url={romanceGenre} title = "Romance"/>   
      <ContentCards url={documentaries} title = "Documentaries"/>   
    </>
  )
}

export default App
