import React from 'react'
import Header from '../components/Header'
import ReactDOM from 'react-dom';
//import ContentBox from '../components/ContentBox';
import ContentBoxprofile from '../components/ContentBoxprofile';


export default function kpopprofile() {
    return (
      <div style={{backgroundColor: '#4c4556', height: '100vh'}}>
        <Header/> <br></br>
        {/* <Carousel/> */}
        
        <ContentBoxprofile />
        {/*<ContentBoxprofilemid />*/}
      </div>
    )
  }