import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import Form from './Form';

function LoginIndex() {
  return (
    <View style={[styles.container]}>
      <View style={[styles.logoView]}>
        <Image style={[styles.image]} source={require('../../../assets/logo.png')} contentFit='contain' transition={1000} />
        <Text style={[styles.logoSubTitle]}>간단하게 회원 관리를 시작하세요</Text>
      </View>
      <Form />
    </View>
  );
}

export default LoginIndex;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logoView: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: '10%',
  },
  logoSubTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#262626',
  },
  image: {
    width: '50%',
    height: '60%',
  },
});
