import { Profile } from "@lens-protocol/react-native-lens-ui-kit";

export default function ProfilePage({ route }) {
  return <Profile profile={route.params.profile} />;
}
