import { Profiles } from '@lens-protocol/react-native-lens-ui-kit'

export default function ViewFollowing({ route, navigation }) {
  const handleProfilePress = (profile) => {
    navigation.push("Profile", { profile });
  };

  return (
    <Profiles
    query={{
        name: 'getFollowing',
        ethereumAddress: route.params.ethereumAddress
      }}
      
      onProfilePress={handleProfilePress}
    />
  );
}
