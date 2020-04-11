import React, { Component } from 'react';
import "./RelatedArtistsContent.css";
import "../../Containers/GenericComponenets/GeneralItem";
import GeneralItem from "../../Containers/GenericComponenets/GeneralItem";
import {connect} from "react-redux";
import {BASEURL} from "../../Constants/baseURL";
import * as itemType from "../../Constants/itemType";

/** Class RelatedArtistsContent 
 * @category RelatedArtistsContent
 * @extends Component
 */
class RelatedArtistsContent extends Component {

  state = {
    /**Array of playlists in the bottom
   * @memberof RelatedArtistsContent
   * @type {Array<artist>}
   */
    artistInfo: [
      // {id : 1, artistName: "Vance Joy", artistPhoto : "https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8"},
      // {id : 1, artistName: "Vance Joy", artistPhoto : "https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8"},
      // {id : 1, artistName: "Vance Joy", artistPhoto : "https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8"},
      // {id : 1, artistName: "Vance Joy", artistPhoto : "https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8"},
      // {id : 1, artistName: "Vance Joy", artistPhoto : "https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8"},
      // {id : 1, artistName: "Vance Joy", artistPhoto : "https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8"},
      // {id : 1, artistName: "Vance Joy", artistPhoto : "https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8"},
      // {id : 1, artistName: "Vance Joy", artistPhoto : "https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8"},
      // {id : 1, artistName: "Vance Joy", artistPhoto : "https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8"},

    ],
  }
   /**A function to show the popping area for creating a new playlist
   * @memberof RelatedArtistsContent
   * @func componentDidMount
   */
  componentDidMount() {
    
    const url = BASEURL + "users/artists/related";

    // const requestOptions = {
    //   method: 'GET',
    //   headers: { 'x-auth':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThhNzAxOTU0ZmU3NTJjMTQ5OGY3MjEiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTg2MTMxOTc0fQ.5CqQJG2E8n_1h8-_XC_tb1HbnVuIXstLQpTyjoWK-Dk" , 'artistId' : "5e8a701954fe752c1498f723" },
    // }

    const requestOptions = {
        method: 'GET',
        headers: { 'x-auth': this.props.userToken , 'artistId' : this.props.id },
      }

    fetch(url,requestOptions)
      .then((response) => {
        console.log(response)
        return response.json();
        
      })
      .then((data) => {
        this.setState({artistInfo: data});
         console.log(data);
      })
      .catch((error)=>{
        console.log(error);

      })
  }

  render(){
    return (

      <div className="related-artists-content">

            {this.state.artistInfo.map((artist,index)=>(   
                <div > 
                  <GeneralItem className="genral-item" image={ BASEURL + "Images/" +artist.imagePath}
                  name={artist.artistName} subname="Artist" type={itemType.ARTIST} roundimage="1" id={artist._id} key={artist._id}></GeneralItem>
                </div>  
            ))}

        {/* <GeneralItem className="genral-item" image="https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8" name="Vance Joy" subname="Artist"
         type="ARTIST" roundimage="1"></GeneralItem> */}

      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    userToken : state.userToken
    //now you have access to the userToken as this.props.userToken inside the class component.
  };

};

export default connect(mapStateToProps)(RelatedArtistsContent);

