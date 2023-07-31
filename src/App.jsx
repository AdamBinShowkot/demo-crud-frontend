import React from 'react';
import { Col, Layout, Row, Space } from 'antd';
import MainIndex from './component';
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  color: '#000',
  backgroundColor: '#fff',
  minHeight:'50vh'
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
    <Layout style={{minHeight:'100vh'}}>
      <Header style={headerStyle}>Header</Header>
      <Content style={contentStyle}>
        <Row>
          <Col span={24}>
            <MainIndex/>
          </Col>
        </Row>
      </Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  </Space>
);
export default App;