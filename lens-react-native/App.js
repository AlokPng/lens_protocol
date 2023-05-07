import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profiles,LensProvider } from '@lens-protocol/react-native-lens-ui-kit'
import ViewFollowing from './ViewFollowing';
import ProfileView from "./ProfileView";
import ViewComments from "./ViewComment";
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <LensProvider theme="dark">
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={ProfileComponent}
            options={{
              title: "Home",
              headerStyle: styles.header,
              headerTitleStyle: styles.headerTitle,
            }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileView}
            options={{
              title: "Profile",
              headerStyle: styles.header,
              headerTitleStyle: styles.headerTitle,
            }}
          />
          <Stack.Screen
            name="ViewFollowing"
            component={ViewFollowing}
            options={{
              title: "Following",
              headerStyle: styles.header,
              headerTitleStyle: styles.headerTitle,
            }}
          />
          <Stack.Screen
            name="ViewComments"
            component={ViewComments}
            options={{
              title: "Comments",
              headerStyle: styles.header,
              headerTitleStyle: styles.headerTitle,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </LensProvider>
  );
}

function ProfileComponent({ navigation }) {
  const handleProfilePress = (profile) => {
    navigation.navigate("Profile", { profile });
  };

  return (
    <Profiles
      onProfilePress={handleProfilePress}
      style={styles.container}
      profileListStyle={styles.profileList}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
  },
  profileList: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  header: {
    backgroundColor: "#008080",
  },
  headerTitle: {
    color: "#fff",
  },
});
