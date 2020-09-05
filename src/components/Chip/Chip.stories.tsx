import { storiesOf } from '@storybook/react';
import React from 'react';
import { Chip } from './Chip';
storiesOf('Chip', module)
  .add('Default', () => {
    return (
      <div>
        <Chip name={'Filter'} /> <Chip name={'Filter 3'} />
        <Chip name={'Filter 1'} /> <Chip name={'Filter 4'} />
        <Chip name={'Filter 2'} /> <Chip name={'Filter 5'} />
      </div>
    );
  })
  .add('Remove Chip', () => {
    const onClick = () => {};
    return (
      <div>
        <Chip name={'Filter'} onRemove={onClick} />
        <Chip name={'Filter 3'} onRemove={onClick} />
        <Chip name={'Filter 1'} onRemove={onClick} />
        <Chip name={'Filter 4'} onRemove={onClick} />
        <Chip name={'Filter 2'} onRemove={onClick} />
        <Chip name={'Filter 5'} onRemove={onClick} />
      </div>
    );
  });
