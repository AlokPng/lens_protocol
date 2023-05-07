import { Profile } from "@lens-protocol/react-native-lens-ui-kit";

export default function ProfileView({ route, navigation }) {
  const { profile } = route.params;

  const handleFollowingPress = () => {
    navigation.push("ViewFollowing", {
      ethereumAddress: profile.id,
    });
  };
  

  const handleCommentPress = (publication) => {
    const publicationId = publication.mirrorOf
      ? publication.mirrorOf.id
      : publication.id;
    navigation.push("ViewComments", {
      publicationId,
    });
  };

  const handleProfileImagePress = (publication) => {
    navigation.push("ViewProfile", {
      profile: publication.profile,
    });
  };

  return (
    <Profile
      profile={profile}
      onFollowingPress={handleFollowingPress}
      onCommentPress={handleCommentPress}
      onProfileImagePress={handleProfileImagePress}
    />
  );
}
