import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export const ArticleTabs = () => {
  return (
    <Tabs>
      <TabItem value="감상" label="감상" default></TabItem>
      <TabItem value="번역" label="번역"></TabItem>
    </Tabs>
  );
};
