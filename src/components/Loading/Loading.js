import React from 'react';
import { Spin, Space } from 'antd';

const Loading = () => {
  return (
    <>
      <div style={{ width: '100wh', height: '100vh', }}>
        <Space align="center">
          <Spin size="large" />
        </Space>
      </div>
    </>
  )
}

export default Loading;