import { Card } from 'antd';
import React from 'react';

const ClientCard = ({ client }) => {
  return (
    <Card
      title={client.name}
      extra={<a href="#">More</a>}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  );
}

export default ClientCard;