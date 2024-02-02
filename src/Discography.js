import Albums from "./Albums";
import PageBtn from "./PageBtn";

const albumData = [
    {
        albumPhoto: "images/STAR.jpg",
        title: '"樂-STAR"',
        date: "2023-11-10"
    },

    {
        albumPhoto: "images/5-STAR.jpg",
        title: '"★★★★★ (5-STAR)"',
        date: "2023-06-02"
    },

    {
        albumPhoto: "images/SKZ-REPLAY.jpg",
        title: '"SKZ-REPLAY"',
        date: "2022-12-21"
    },

    {
        albumPhoto: "images/MAXIDENT.jpg",
        title: '"MAXIDENT"',
        date: "2022-10-07"
    },

    {
        albumPhoto: "images/Mixtape-TimeOut.jpg",
        title: '"Mixtape: TimeOut"',
        date: "2022-08-01"
    },

    {
        albumPhoto: "images/Oddinary.jpg",
        title: '"ODDINARY"',
        date: "2022-03-18"
    }
]

function Discogrophy(){
    return(
      <div className='container'>
        <div class="cont discography_view">
          <div className='title'>DISCOGRAPHY</div>
          <div className='new_release_list'>
            {albumData.map((album) => (
                <Albums albumObj = {album} key = {album.title}/>
            ))}
          </div>
        </div>
        <PageBtn/>
      </div>
      
  
  
    );
  }

  export default Discogrophy;