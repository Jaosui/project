import React from 'react'
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';
import { Button } from 'antd';

export default function ImageLight(){

    
    return (
        <div style={{ padding: '12px'}}>
            <Row justify="center">
            <Col  xs={{ span: 16, offset: 0 }} lg={{ span: 6, offset: 0 }} xl={{ span: 6, offset: 0 }}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>  
                  <img src="https://cf.shopee.co.th/file/a3b133fb29176978f0fb12dfce2c89aa" width="200" height="200" />
                  <br></br>
                  <p style={{color:'white',fontWeight:'bold'}}> YG Entertainment Idol Goods Fan Products </p>
                  <p style={{color:'white',fontWeight:'bold'}}> Select Blankpink official LIGHTSTICK (Lightstick) </p>
                  <Button style={{borderRadius: '10px',backgroundColor:'#F6C026',color:'black',fontWeight:'bold',border:'0'}}type="primary" danger>
                      BUY ON AMEZON
                   </Button>

                </div>
              </Col>
              <Col  xs={{ span: 16, offset: 1 }} lg={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 1 }}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <img src="https://img.priceza.com/img2/314/0736/314-20210215032034-74776102649816075.jpg" width="200" height="200" />
                  <br></br>
                  <p style={{color:'white',fontWeight:'bold'}}> BTS Official Lightstick Map of The Soul Special </p>
                  <p style={{color:'white',fontWeight:'bold'}}> Edition(incl. One Random BTS Transparent Sticker) </p>
                  <Button style={{borderRadius: '10px',backgroundColor:'#F6C026',color:'black',fontWeight:'bold',border:'0'}}type="primary" danger>
                      BUY ON AMEZON
                   </Button>
                </div>
              </Col>
              
              <Col  xs={{ span: 16, offset: 1 }} lg={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 1 }}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <img src="https://my-live-05.slatic.net/p/17f9c7299dbf3d2a1ac042daa5691fbb.jpg_2200x2200q80.jpg_.webp" width="200" height="200" />
                  <br></br>
                  <p style={{color:'white',fontWeight:'bold'}}> NCT Official Lightstick+Celebrate </p>
                  <p style={{color:'white',fontWeight:'bold'}}> STAMPSTICKER Set </p>
                  <Button style={{borderRadius: '10px',backgroundColor:'#F6C026',color:'black',fontWeight:'bold',border:'0'}}type="primary" danger>
                      BUY ON AMEZON
                   </Button>
                </div>
              </Col>
            </Row>
             </div>
        )
      }
     