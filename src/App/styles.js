/*
 *
 *  Style: `App`.
 *
 */
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.lighter,
    flex: 1,
    width: '100%',
  },
  header: {
    padding: 32,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: '700',
  },
});
export default styles;
