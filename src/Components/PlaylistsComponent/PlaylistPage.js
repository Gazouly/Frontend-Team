import React ,{ Component} from 'react';
import './PlaylistPage.css';
  
class PlaylistPage extends Component
{
  DropMenuCard ()
  {
    document.getElementById("DropMenuCard").classList.toggle("show");
  }
  DropMenuSong()
  {
    document.getElementById("DropMenuSong").classList.toggle("show");
  }

  likeSong = e => {
    const {id} = e.target;
    var heart=document.getElementById(id);
    heart.classList.toggle("far");
    heart.classList.toggle("fas");
  }
  playSong = e => {
    const {id} = e.target;
    var play=document.getElementById(id);
    play.classList.toggle("play");
    play.classList.toggle("far fa-pause-circle");
  }
 
  state= 
{ 
    SongInfo: [
      {id : 1, SongName : "Born To Die", Singer: "Lana Del Rey", AlbumName: "Born To Die",Duration : "3:52"},
      {id : 2, SongName : "Love", Singer: "Lana Del Rey", AlbumName: "Love",Duration : "4:15"},
      {id : 3, SongName : "Summertime Sadness", Singer: "Lana Del Rey", AlbumName: "Born To Die", Duration : "2:58"},
      {id : 4, SongName : "Born To Die", Singer: "Lana Del Rey", AlbumName: "Born To Die",Duration : "3:52"},
      {id : 5, SongName : "Love", Singer: "Lana Del Rey", AlbumName: "Love",Duration : "4:15"},
      {id : 6, SongName : "Summertime Sadness", Singer: "Lana Del Rey", AlbumName: "Born To Die", Duration : "2:58"},
      {id : 7, SongName : "Born To Die", Singer: "Lana Del Rey", AlbumName: "Born To Die",Duration : "3:52"},
      {id : 8, SongName : "Love", Singer: "Lana Del Rey", AlbumName: "Love",Duration : "4:15"},
      {id : 9, SongName : "Summertime Sadness", Singer: "Lana Del Rey", AlbumName: "Born To Die", Duration : "2:58"},
      {id : 10, SongName : "Born To Die", Singer: "Lana Del Rey", AlbumName: "Born To Die",Duration : "3:52"},
      {id : 11, SongName : "Love", Singer: "Lana Del Rey", AlbumName: "Love",Duration : "4:15"},
      {id : 12, SongName : "Summertime Sadness", Singer: "Lana Del Rey", AlbumName: "Born To Die", Duration : "2:58"},
      
    ],

    playlistImage: "https://www.udiscovermusic.com/wp-content/uploads/2019/05/Lana-Del-Rey-Born-To-Die-album-cover-web-optimised-820.jpg",
    playlistname: "Born to die",
    playlistCreator: "Lana Del Rey",
    songsNumber: "32 Songs",   
}


  render(){
  return(
  <div className="playlist-page">
      <div className="content-spacing">
        <div className="row" >
          <div className="col-xs-12  col-lg-5 col-xl-4 d-flex justify-content-center " style={{display:"table"}}>
             <ul className="list-unstyled centered-content">
              <li>
              <div class="card ">
              <img src={this.state.playlistImage} class="card-img-top" alt=""/>
              <figure ><button onClick={this.playSong} className="play"></button></figure>
              </div>
              </li>
              

					  <li> <h3> {this.state.playlistname} </h3> </li>
					  <li> <h5> {this.state.playlistCreator} </h5></li>
            <li> <a href="#" className=" btn btn-success rounded-pill text-center px-5 py-2 mt-3 font-weight-bold"> Play</a> </li>
            <li  className="d-flex justify-content-around">
            <button id="like-song" className="far fa-heart" title="Save to your Liked Songs" onClick={this.likeSong}> </button>
             
            
          <div className="dropdown ">
              <a className="card-menu" href="/account" id="Dropdown" data-toggle="dropdown">  ••• </a>
              <div class="dropdown-menu card-dropdown-content ">
              <a class="dropdown-item drop-class" href="#">Save To Library</a>
              <a class="dropdown-item drop-class" href="#">Delete</a>
          </div>

          </div>
            </li>
            <li > <div> {this.state.songsNumber}</div> </li>
					</ul>
          </div>

        <div className="col-xs-12  col-lg-7 col-xl-8">
        <table class="table table-borderless">
          <tbody>
                                             {/* Display Songs */}
           {this.state.SongInfo.map((song,index)=>(
            <tr key={index}>
              <th scope="row" className="music-sign d-flex justify-content-center">	 </th>
              <td className="song-content">
                <ul className="list-unstyled">
                  <li>{song.SongName}</li>
                  <li className="song-info"><a href='/webplayer/artistprofile'>{song.Singer} </a> <span className="font-weight-bold">.</span> <a href='/webplayer/album'>{song.AlbumName} </a></li>
                </ul>
              </td>
              <td>
                <div className="dropdown ">
                <a className="song-menu Menu" href="/account" id="Dropdown" data-toggle="dropdown">  ••• </a>
                  <div class="dropdown-menu song-dropdown-content dropdown-menu-right ">
                    <a class="dropdown-item drop-class" href="#">Add to your liked songs</a>
                    <a class="dropdown-item drop-class" href="#">Add to playlist</a>
                    <a class="dropdown-item drop-class" href="#">Remove from this playlist</a>
                  </div>
                </div>
              </td>
              <td className="duration">{song.Duration}</td>
            </tr>
            ))} 
             
      </tbody>
    </table>
      </div> 
      </div>
      </div>
    </div>
  )
}
}

export default PlaylistPage;