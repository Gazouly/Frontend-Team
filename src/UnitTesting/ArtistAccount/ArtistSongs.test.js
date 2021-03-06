//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import {ArtistSongs} from "@/Containers/ArtistAccount/ArtistSongs";

 //CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 




describe("ArtistSongs Render test", ()=>{

  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<ArtistSongs /> ); 
  });

  
  it("Should have 1 button", ()=>{
    const buttons=wrapper.find("button");
    expect(buttons).toHaveLength(1);
  })
  
  it("Should have 1 table", ()=>{
    const tables=wrapper.find("table");
    expect(tables).toHaveLength(1);
  })

  it("Should have 1 header", ()=>{
    const headers=wrapper.find("h1");
    expect(headers).toHaveLength(2);
  })
})

 

describe("Artist Songs componentDidMount test", ()=>{

  it('calls componentDidMount', () => {
    jest.spyOn(ArtistSongs.prototype, 'componentDidMount')
    const wrapper = shallow(<ArtistSongs />)
    expect(ArtistSongs.prototype.componentDidMount.mock.calls.length).toBe(1)
  })

})
  



   
    
  

  


