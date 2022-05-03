import React from 'react'
import ReactDOM from 'react-dom';
import fetch from 'node-fetch';
import { Card } from 'antd';
//import { RightCircleOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';

export default function ContentBoxprofile() {
  const { Meta } = Card;
  
  


  const titleName1 = <div>BTS (방탄소년단) </div>
  const titleName2 = <div>IU (아이유)</div>
  const titleName3 = <div>ENHYPEN (엔하이펜) </div>
  const titleName4 = <div>EXO (엑소) </div>
  const titleName5 = <div>RED VELVET (빨간 벨벳)</div>
  const titleName6 = <div>AESPA (에스파) </div>
  const titleName7 = <div>NCT DREAM (NCT 드림) </div>
  const titleName8 = <div>BAMBAM (밤밤)</div>
  const titleName9 = <div>CRAVITY (크래비티) </div>
  const titleName10 = <div>BLACKPINK (블랙 핑크) </div>
  const titleName11 = <div>TREASURE (보물)</div>
  const titleName12 = <div>JAYB (제이비) </div>
  const titleName13 = <div>ASTRO (아스트로) </div>
  const titleName14 = <div>STRAYKIDS (스트레이 키즈)</div>
  const titleName15 = <div>TWICE (두 배) </div>

  function testfetch(){
    fetch("https://k-pop-services.herokuapp.com/kpop-profile/getAll").then(res => res.json()).then(response => {console.log(response)})
  }
  /*React.useEffect(async() => {

    const alldata_res  = await fetch("https://k-pop-services.herokuapp.com/kpop-profile/getAll")
    console.log(alldata_res)
     
  });*/
  return (
    
    <div style={{ padding: '12px'}}>
      <Row justify="center">
      <Col xs={{ span: 16, offset: 1 }} lg={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 1 }} ><Card  
        hoverable
        style={{ width: 300, borderRadius: '7px',backgroundColor: '#872642',color:'white',fontWeight:'bold' }}
        cover={<img alt="example" src="https://www.btblackxswan.com/wp-content/uploads/2021/07/86a7d1db-535f-4674-8116-837c11e6f952.jpg" style={{ width: 300, borderRadius: '7px 7px 0 0' }} />}

      >{titleName1}
      </Card></Col>
      
      <Col  xs={{ span: 16, offset: 1 }} lg={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 1 }} onClick={testfetch}><Card  
        hoverable
        style={{ width: 300, borderRadius: '7px',backgroundColor: '#872642',color:'white',fontWeight:'bold'  }}
        bodyStyle={{padding: '7px 7px', textAlign: 'center'}}
        cover={<img alt="example" src="https://i0.wp.com/www.korseries.com/wp-content/uploads/2021/03/IU-HILAC.jpeg?resize=750%2C501&ssl=1" style={{ width: 300, borderRadius: '7px 7px 0 0' }} />}

      >{titleName2}
      </Card>
      </Col>
      <Col  xs={{ span: 16, offset: 1 }} lg={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 1 }}><Card  
        hoverable
        style={{ width: 300, borderRadius: '7px',backgroundColor: '#872642',color:'white',fontWeight:'bold' }}
        bodyStyle={{padding: '7px 7px', textAlign: 'center'}}
        cover={<img alt="example" src="https://dudeplace.co/wp-content/uploads/2021/12/enhypen.jpeg" style={{ width: 300, borderRadius: '7px 7px 0 0' }} />}

      >{titleName3}
      </Card></Col>   
    </Row><br></br><br></br>

    <p>
    <Row justify="center">
      <Col xs={{ span: 16, offset: 1 }} lg={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 1 }}><Card  
        hoverable
        style={{ width: 300, borderRadius: '7px',backgroundColor: '#872642',color:'white' ,fontWeight:'bold'}}
        bodyStyle={{padding: '7px 7px', textAlign: 'center'}}
        cover={<img alt="example" src="https://nineentertain.mcot.net/wp-content/uploads/2021/06/cb53b3ce03f24bffa21686be75772df3.jpg" style={{ width: 300, borderRadius: '7px 7px 0 0' }} />}

      >{titleName4}
      </Card></Col>
      
      <Col  xs={{ span: 16, offset: 1 }} lg={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 1 }}><Card  
        hoverable
        style={{ width: 300, borderRadius: '7px',backgroundColor: '#872642',color:'white',fontWeight:'bold' }}
        bodyStyle={{padding: '7px 7px', textAlign: 'center'}}
        cover={<img alt="example" src="https://s359.kapook.com/pagebuilder/5a0e0045-7612-4d69-84b3-739589eb4546.jpg" style={{ width: 300, borderRadius: '7px 7px 0 0' }} />}

      >{titleName5}
      </Card>
      </Col>
      <Col  xs={{ span: 16, offset: 1 }} lg={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 1 }}><Card  
        hoverable
        style={{ width: 300, borderRadius: '7px',backgroundColor: '#872642',color:'white',fontWeight:'bold' }}
        bodyStyle={{padding: '7px 7px', textAlign: 'center'}}
        cover={<img alt="example" src="https://dudeplace.co/wp-content/uploads/2021/06/2c903db5247a4e5bb49f8a575a3f1edc.jpeg" style={{ width: 300, borderRadius: '7px 7px 0 0' }} />}

      >{titleName6}
      </Card></Col>   
    </Row>
          </p><br></br>
          <p>
    <Row justify="center">
      <Col xs={{ span: 16, offset: 1 }} lg={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 1 }}><Card  
        hoverable
        style={{ width: 300, borderRadius: '7px',backgroundColor: '#872642',color:'white',fontWeight:'bold' }}
        bodyStyle={{padding: '7px 7px', textAlign: 'center'}}
        cover={<img alt="example" src="https://6.viki.io/image/684905da0e384a50b254fccf916b93ec.jpeg?s=900x600&e=t" style={{ width: 300, borderRadius: '7px 7px 0 0' }} />}

      >{titleName7}
      </Card></Col>
      
      <Col  xs={{ span: 16, offset: 1 }} lg={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 1 }}><Card  
        hoverable
        style={{ width: 300, borderRadius: '7px',backgroundColor: '#872642',color:'white',fontWeight:'bold' }}
        bodyStyle={{padding: '7px 7px', textAlign: 'center'}}
        cover={<img alt="example" src="https://cdn.antaranews.com/cache/800x533/2021/06/04/WhatsApp-Image-2021-06-04-at-08.31.55.jpeg" style={{ width: 300, borderRadius: '7px 7px 0 0' }} />}

      >{titleName8}
      </Card>
      </Col>
      <Col  xs={{ span: 16, offset: 1 }} lg={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 1 }}><Card  
        hoverable
        style={{ width: 300, borderRadius: '7px',backgroundColor: '#872642',color:'white',fontWeight:'bold' }}
        bodyStyle={{padding: '7px 7px', textAlign: 'center'}}
        cover={<img alt="example" src="https://6.viki.io/image/10ec12d3c180496182502a0d189e7c9d.jpeg?s=900x600&e=tt" style={{ width: 300,  borderRadius: '7px 7px 0 0' }} />}

      >{titleName9}
      </Card></Col>   
    </Row>
          </p>
          <p><br></br>
    <Row justify="center">
      <Col xs={{ span: 16, offset: 1 }} lg={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 1 }}><Card  
        hoverable
        style={{ width: 300, borderRadius: '7px',backgroundColor: '#872642',color:'white',fontWeight:'bold' }}
        bodyStyle={{padding: '7px 7px', textAlign: 'center'}}
        cover={<img alt="example" src="https://6.viki.io/image/fc999f167ea74e06916604a994e438b0.jpeg?s=900x600&e=t" style={{ width: 300, borderRadius: '7px 7px 0 0' }} />}

      >{titleName10}
      </Card></Col>
      
      <Col  xs={{ span: 16, offset: 1 }} lg={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 1 }}><Card  
        hoverable
        style={{ width: 300, borderRadius: '7px',backgroundColor: '#872642',color:'white',fontWeight:'bold' }}
        bodyStyle={{padding: '7px 7px', textAlign: 'center'}}
        cover={<img alt="example" src="https://s359.kapook.com/pagebuilder/21eb102f-c085-4292-b617-f3e16044a8aa.jpg" style={{ width: 300, borderRadius: '7px 7px 0 0' }} />}

      >{titleName11}
      </Card>
      </Col>
      <Col  xs={{ span: 16, offset: 1 }} lg={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 1 }}><Card  
        hoverable
        style={{ width: 300, borderRadius: '7px',backgroundColor: '#872642',color:'white' ,fontWeight:'bold'}}
        bodyStyle={{padding: '7px 7px', textAlign: 'center'}}
        cover={<img alt="example" src="https://6.viki.io/image/af565cc1ad734aafbc698888064f0f98.jpeg?s=900x600&e=t" style={{ width: 300,  borderRadius: '7px 7px 0 0' }} />}

      >{titleName12}
      </Card></Col>   
    </Row>
          </p>
          <p><br></br>
    <Row justify="center">
      <Col xs={{ span: 16, offset: 1 }} lg={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 1 }}><Card  
        hoverable
        style={{ width: 300, borderRadius: '7px',backgroundColor: '#872642',color:'white',fontWeight:'bold' }}
        bodyStyle={{padding: '7px 7px', textAlign: 'center'}}
        cover={<img alt="example" src="https://1409791524.rsc.cdn77.org/data/images/full/575123/astro.jpeg" style={{ width: 300, borderRadius: '7px 7px 0 0' }} />}

      >{titleName13}
      </Card></Col>
      
      <Col  xs={{ span: 16, offset: 1 }} lg={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 1 }}><Card  
        hoverable
        style={{ width: 300, borderRadius: '7px',backgroundColor: '#872642',color:'white',fontWeight:'bold' }}
        bodyStyle={{padding: '7px 7px', textAlign: 'center'}}
        cover={<img alt="example" src="https://6.viki.io/image/4993ac5fb56443fda3027c224bc06d27.jpeg?s=900x600&e=t" style={{ width: 300, borderRadius: '7px 7px 0 0' }} />}

      >{titleName14}
      </Card>
      </Col>
      <Col  xs={{ span: 16, offset: 1 }} lg={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 1 }}><Card  
        hoverable
        style={{ width: 300, borderRadius: '7px',backgroundColor: '#872642',color:'white' ,fontWeight:'bold'}}
        bodyStyle={{padding: '7px 7px', textAlign: 'center'}}
        cover={<img alt="example" src="https://dudeplace.co/wp-content/uploads/2021/10/dummy-1.jpeg" style={{ width: 300,  borderRadius: '7px 7px 0 0' }} />}

      >{titleName15}
      </Card></Col>   
    </Row></p>
         
          
      
      </div>

    
  )
}
