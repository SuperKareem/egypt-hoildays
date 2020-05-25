/*
 *
 *  Component: `HolidayItem`.
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import {View, Text} from 'react-native';

const HolidayItem = ({date, summary}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{date}</Text>
      <Text style={styles.sectionDescription}>{summary}</Text>
    </View>
  );
};

HolidayItem.propTypes = {
  date: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default HolidayItem;
