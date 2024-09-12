import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {Input} from '../ui/input';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Header} from '../shared/header';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
export const SignUp = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Header leftIcon="angle-left" />
      <View style={styles.mainSection}>
        <Text style={styles.header}>SignUp</Text>
        <KeyboardAwareScrollView contentContainerStyle={styles.mainSection}>
          <View>
            <Input placeholder="Name" name="zaghum" style={styles.input} />
            <Input placeholder="Email" name="zaghum" style={styles.input} />
            <Input placeholder="Password" name="zaghum" style={styles.input} />
            <View style={styles.haveAccount}>
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.text}>Already have an account?</Text>
              </TouchableOpacity>
              <FontAwesome name="long-arrow-right" color="#DB3022" size={16} />
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'column',
            }}>
            <Text style={{color: '#222222', alignSelf: 'center'}}>
              Or sign up with social account
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                columnGap: 16,
                marginBottom: 30,
              }}>
              {[
                require('../../assets/images/google.png'),
                require('../../assets/images/fb.png'),
              ].map(image => (
                <View style={styles.SocialIcons} key={image}>
                  <Image source={image} />
                </View>
              ))}
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    fontFamily: 'Metropolis',
    backgroundColor: '#F9F9F9',
    height: '100%',
  },
  mainSection: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    color: '#222222',
    fontSize: 34,
    marginTop: 8,
    marginBottom: 75,
    fontFamily: 'Metropolis-Bold',
  },
  input: {
    marginBottom: 8,
  },
  text: {
    color: '#222222',
  },
  button: {
    backgroundColor: '#DB3022',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },

  SocialIcons: {
    backgroundColor: '#FFFFFF',
    height: 64,
    width: 92,
    borderRadius: 24,
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  haveAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 16,
    marginBottom: 15,
    columnGap: 8,
  },
});
