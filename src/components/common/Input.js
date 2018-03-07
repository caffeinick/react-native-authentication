import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const Input = ({ label }) => {
  return (
    <View>
      <Text>{label}</Text>
    </View>
  );
};

Input.propTypes = {
  label: PropTypes.string
}

export { Input };