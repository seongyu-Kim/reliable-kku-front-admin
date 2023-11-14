import React from 'react';
import {View} from 'react-native';

type MarginProps = {
  height: number;
  width: number;
};

export default ({width, height}: MarginProps) => {
  return <View style={{height: height, width: width}} />;
};
