import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { useGlobalState } from '../../store/useGlobalState';
import { useDeviceBack } from '../../hooks/useDeviceBack';
import Header from '../../common/ui/Header';
import { jsonParse, setStorage } from '../../common/common';
import theme from '../../style/theme'

function SignupScreen() {
  const setIsLogined = useGlobalState(state => state.setIsLogined);
  const { isOauth = '0', loginType, snsId, tab = '약관동의' } = useRoute().params;
  const { webviewRef, script, onNavigationStateChange, androidState, onPressHardwareBackButton } = useDeviceBack();

  return (
    <SafeAreaView style={theme.container}>
      <Header title='회원가입' onBackClick={() => onPressHardwareBackButton(true)} />
      <WebView
        ref={webviewRef}
        onNavigationStateChange={onNavigationStateChange}
        source={{
          uri: `http://127.0.0.1:5173/signup?tab=${tab}&isOauth=${isOauth}&loginType=${loginType}&snsId=${snsId}`,
        }}
        originWhitelist={['*']}
        style={{ flex: 1 }}
        allowsBackForwardNavigationGestures
        injectedJavaScript={script}
        onMessage={({ nativeEvent: state }) => {
          androidState(state);
          const data = jsonParse(state?.data);
          console.log(data);
          if (data?.type === 'gotoMain') {
            setStorage('isLogin', 'true');
            setIsLogined('true');
          }
        }}
      />
    </SafeAreaView>
  );
}

export default SignupScreen;
