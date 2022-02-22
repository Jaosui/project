import React from 'react'
import ReactDOM from 'react-dom';
import { Card } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';

export default function ContentBoxsecond() {
  const { Meta } = Card;
  
  


  const titleName1 = <div>NEW ALBUM FROM TREASURE <RightCircleOutlined /></div>
  const titleName2 = <div>NEW ALBUM FROM BTS <RightCircleOutlined /></div>
  const titleName3 = <div>NEW ALBUM FROM MAMAMOO <RightCircleOutlined /></div>
  
  

  return (
    
    <div style={{ padding: '12px'}}>
      <Row justify="center">
      <Col xs={{ span: 16, offset: 1 }} lg={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 1 }}><Card  
        hoverable
        style={{ width: 250, borderRadius: '7px',backgroundColor: '#872642',color:'white' }}
        bodyStyle={{padding: '7px 7px', textAlign: 'center'}}
        cover={<img alt="example" src="https://cdn.allfamous.org/group/medium/treasure-oynd-allfamous.org.jpg?v=56" style={{ width: 250, borderRadius: '7px 7px 0 0' }} />}

      >{titleName1}
      </Card></Col>
      <Col  xs={{ span: 16, offset: 1 }} lg={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 1 }}><Card  
        hoverable
        style={{ width: 250, borderRadius: '7px',backgroundColor: '#872642',color:'white' }}
        bodyStyle={{padding: '7px 7px', textAlign: 'center'}}
        cover={<img alt="example" src="https://pbs.twimg.com/media/E5P6iRUVoAk92Ns.jpg" style={{ width: 250, borderRadius: '7px 7px 0 0' }} />}

      >{titleName2}
      </Card>
      </Col>
      <Col  xs={{ span: 16, offset: 1 }} lg={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 1 }}><Card  
        hoverable
        style={{ width: 250, borderRadius: '7px',backgroundColor: '#872642',color:'white' }}
        bodyStyle={{padding: '7px 7px', textAlign: 'center'}}
        cover={<img alt="example" src="https://dudeplace.co/wp-content/uploads/2021/01/mamamoo.jpg" style={{ width: 250, borderRadius: '7px 7px 0 0' }} />}

      >{titleName3}
      </Card></Col>
     
      
    </Row> 
      
      
    </div>

    
  )
}
