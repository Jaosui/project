import React from 'react'
import ReactDOM from 'react-dom';
import { Card } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';

export default function ContentBox() {
  const { Meta } = Card;
  
  


  const titleName1 = <div>NEW ALBUM FROM MARK <RightCircleOutlined /></div>
  const titleName2 = <div>NEW ALBUM FROM LALISA <RightCircleOutlined /></div>
  const titleName3 = <div>NEW ALBUM FROM TAEYEON <RightCircleOutlined /></div>
  
  

  return (
    
    <div style={{ padding: '12px'}}>
      <Row justify="center">
      <Col xs={{ span: 16, offset: 1 }} lg={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 1 }}><Card  
        hoverable
        style={{ width: 250, borderRadius: '7px',backgroundColor: '#872642',color:'white' ,fontWeight:'bold'}}
        bodyStyle={{padding: '7px 7px', textAlign: 'center'}}
        cover={<img alt="example" src="https://cdn.antaranews.com/cache/800x533/2021/10/30/WhatsApp-Image-2021-10-30-at-13.34.41.jpeg" style={{ width: 250, borderRadius: '7px 7px 0 0' }} />}

      >{titleName1}
      </Card></Col>
      <Col  xs={{ span: 16, offset: 1 }} lg={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 1 }}><Card  
        hoverable
        style={{ width: 250, borderRadius: '7px',backgroundColor: '#872642',color:'white',fontWeight:'bold' }}
        bodyStyle={{padding: '7px 7px', textAlign: 'center'}}
        cover={<img alt="example" src="https://www.naewna.com/uploads/news/source/598095.jpg" style={{ width: 250, borderRadius: '7px 7px 0 0' }} />}

      >{titleName2}
      </Card>
      </Col>
      <Col  xs={{ span: 16, offset: 1 }} lg={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 1 }}><Card  
        hoverable
        style={{ width: 250, borderRadius: '7px',backgroundColor: '#872642',color:'white' ,fontWeight:'bold'}}
        bodyStyle={{padding: '7px 7px', textAlign: 'center'}}
        cover={<img alt="example" src="https://cms.dmpcdn.com/musicarticle/2021/07/06/da7acea0-de0b-11eb-ac6a-fb7a0291e89a_original.jpg" style={{ width: 250, borderRadius: '7px 7px 0 0' }} />}

      >{titleName3}
      </Card></Col>
     
      
    </Row> 
      
      
    </div>

    
  )
}
