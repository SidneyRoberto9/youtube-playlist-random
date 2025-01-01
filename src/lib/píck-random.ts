import { getRandomItem } from '@/lib/utils';
import { getPlaylistItems } from '@/lib/youtube';

const pickRandom = async (id: string) => {
  const videosUrls: string[] = [];

  let total = 0;
  let nextPage = '';

  while (true) {
    const playlistItems = await getPlaylistItems(id, nextPage);

    const nextPageToken = playlistItems.nextPageToken;
    const urlVideoIdList = playlistItems.items.map((item) => item.contentDetails.videoId);

    total += urlVideoIdList.length;

    urlVideoIdList.forEach((url) => videosUrls.push(url));

    if (nextPageToken != null) {
      nextPage = nextPageToken;
    } else {
      return getRandomItem(videosUrls);
    }
  }
};

export { pickRandom };
