import {StyleSheet, Text, TextInput, View} from 'react-native';
import {ThemeColors} from '../../theme/themeColor';
import {height} from '../../utils/constants';

const Input = props => {
  const {title, error} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput {...props} style={styles.input} />
      {error && (
        <Text
          style={{marginTop: 3, color: ThemeColors.RED, fontWeight: 'bold'}}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: ThemeColors.GRAY,
    height: height * 0.1,
    borderRadius: 5,
    padding: 5,
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: '600',
    color: ThemeColors.WHITE,
  },
  input: {
    padding: 10,
    fontSize: 25,
    borderRadius: 5,
    paddingVertical: 15,
    color: ThemeColors.WHITE,
  },
});
