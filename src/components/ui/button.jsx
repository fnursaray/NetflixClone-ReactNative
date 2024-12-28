import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ThemeColors} from '../../theme/themeColor';
import {height} from '../../utils/constants';

const Button = props => {
  const {title, status} = props;
  const setColor = () => {
    switch (status) {
      case 'primary':
        return ThemeColors.RED;
      case 'warning':
        return ThemeColors.WHITE;
      case 'danger':
        return ThemeColors.BLACK;
      default:
        return ThemeColors.RED;
    }
  };
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, {backgroundColor: setColor()}]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: ThemeColors.WHITE,
  },
});
