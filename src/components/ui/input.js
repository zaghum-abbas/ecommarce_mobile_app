import {StyleSheet, TextInput, View} from 'react-native';

export const Input = ({placeholder, style}) => {
  return (
    <View style={[style, styles.backGroundColor]}>
      <TextInput
        placeholder={placeholder}
        style={[styles.InputStyle]}
        placeholderTextColor="#9B9B9B"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  backGroundColor: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    borderRadius: 4,
  },
  InputStyle: {
    paddingHorizontal: 20,
    paddingVertical: 22,
  },
});
