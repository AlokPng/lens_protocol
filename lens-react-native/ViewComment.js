import { Feed } from '@lens-protocol/react-native-lens-ui-kit'

export default function ViewComments({
  route, navigation
}) {
  const handleCommentPress = (publication) => {
    const publicationId = publication.mirrorOf ? publication.mirrorOf.id : publication.id;
    navigation.push('ViewComments', {
      publicationId
    });
  };

  return (
    <Feed
      query={{
        name: 'getComments',
        publicationId: route.params.publicationId,
      }}
      onCommentPress={handleCommentPress}
    />
  )
}
