/*
 *
 *  Component: `App`.
 *
 */
import React, {useEffect, useCallback, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  ActivityIndicator,
  View,
  Text,
} from 'react-native';

import fetchHolidays from '../utils/fetchHolidays';
import HolidayItem from '../components/HolidayItem';
import styles from './styles';

const App = () => {
  const [holidays, setHolidays] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const loadHolidays = useCallback(async () => {
    const fetchedHolidays = await fetchHolidays();
    setHolidays(fetchedHolidays);
    setLoading(false);
  }, [setHolidays, setLoading]);

  useEffect(() => {
    if (loading) {
      loadHolidays();
    }
  }, [loadHolidays, loading]);

  const renderHolidayItem = useCallback(({item: {start: {date}, summary}}) => {
    return <HolidayItem date={date} summary={summary} />;
  }, []);

  const keyExtractor = useCallback(({id}) => id, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Egypt Holidays</Text>
      </View>
      {loading ? (
        <ActivityIndicator size={60} />
      ) : (
        <SafeAreaView style={styles.body}>
          <FlatList
            style={styles.body}
            data={holidays}
            renderItem={renderHolidayItem}
            keyExtractor={keyExtractor}
          />
        </SafeAreaView>
      )}
    </>
  );
};

export default App;
