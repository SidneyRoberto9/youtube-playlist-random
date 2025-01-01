'use client';
import axios from 'axios';

import { IPlayListItems } from '@/model/youtube';

const playlistItemsInstance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/playlistItems',
  params: {
    part: 'contentDetails',
    maxResults: 50,
    fields: 'items/contentDetails/videoId,nextPageToken',
    key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
  },
});

const getPlaylistItems = async (playlistId: string, pageToken?: string) => {
  const { data } = await playlistItemsInstance.get<IPlayListItems>('', {
    params: {
      playlistId,
      pageToken,
    },
  });

  return data;
};

export { getPlaylistItems };
