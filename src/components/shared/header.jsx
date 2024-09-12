import {StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const Header = ({leftIcon, rightIcon, title}) => {
  return (
    <View style={styles.main}>
      {leftIcon && <FontAwesome name={leftIcon} size={30} color="black" />}
      {title && <Text style={{color: 'black'}}>{title}</Text>}
      {rightIcon && <FontAwesome name={rightIcon} size={30} color="black" />}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
});
