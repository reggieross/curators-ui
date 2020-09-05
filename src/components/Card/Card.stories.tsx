import { storiesOf } from '@storybook/react';
import React from 'react';
import { Card } from './Card';
storiesOf('Card', module).add('Default', () => {
  const footer = <div>lowest price</div>;
  const link = <div>view</div>;
  return (
    <div>
      <Card title={'Some article'} footer={footer} subHeader={link} />
    </div>
  );
});
