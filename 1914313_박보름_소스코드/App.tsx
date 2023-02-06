import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useCallback} from 'react';
import MainNavigator from './MainNavigator';
import {makeMember} from './member/makeMember';
import {Provider as ReduxProvider} from "react-redux";
import {AppearanceProvider, useColorScheme} from "react-native-appearance";
import {Provider as PaperProvider} from "react-native-paper";
import {DefaultTheme, DarkTheme} from 'react-native-paper';
import {ToggleProvider} from './ToggleThemeContext';

const member = makeMember();

export default function App(){
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(scheme == "dark" ? DarkTheme: DefaultTheme);

  const toggleTheme = useCallback(() => {
    return setTheme((theme) => theme.dark ? DefaultTheme: DarkTheme);
  }, []);

  return (
    <AppearanceProvider>
      <PaperProvider theme = {theme}>
        <ToggleProvider toggle = {toggleTheme}>
          <ReduxProvider store = {member}>
            <NavigationContainer>
              <MainNavigator/>
            </NavigationContainer>
          </ReduxProvider>
        </ToggleProvider>
      </PaperProvider>
    </AppearanceProvider>
  );
}