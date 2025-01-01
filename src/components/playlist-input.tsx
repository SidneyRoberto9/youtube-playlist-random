'use client';

import Link from 'next/link';
import { Fragment, useRef, useState } from 'react';

import { pickRandom } from '@/lib/píck-random';
import { formatUrlString } from '@/lib/utils';

const PlaylistInput = () => {
  const [randomVideo, setRandomVideo] = useState<string | null>(null);
  const playListUrlRef = useRef<HTMLInputElement>(null);

  const handleFind = async () => {
    const urlFormatted = formatUrlString(playListUrlRef.current?.value || '');

    if (urlFormatted != '') {
      const estimatedTime = await pickRandom(urlFormatted);

      setRandomVideo(estimatedTime);

      if (playListUrlRef.current) {
        playListUrlRef.current.value = '';
      }
    }
  };

  const handleClear = () => {
    if (playListUrlRef.current) {
      playListUrlRef.current.value = '';
      setRandomVideo(null);
    }
  };

  return (
    <Fragment>
      <div className="flex sm:flex-row flex-col items-center justify-center max-w-2xl w-full gap-4 m-auto sm:px-2  px-4">
        <input
          ref={playListUrlRef}
          type="text"
          className="w-full p-2 px-4 border-2 rounded-xl border-stone-900 placeholder:text-stone-900 placeholder:opacity-75 dark:placeholder:text-stone-300
      "
          placeholder="youtube.com/playlist?list=ID"
        />
        <div className="flex items-center justify-around sm:w-36 w-full">
          <button
            onClick={handleFind}
            className="w-36 p-2 px-4 border-2 rounded-xl border-stone-900 dark:border-stone-50"
          >
            Find
          </button>

          <button
            onClick={handleClear}
            className="sm:hidden block w-36 p-2 px-4 border-2 rounded-xl border-stone-900 dark:border-stone-50"
          >
            Clear
          </button>
        </div>
      </div>
      <div className="my-2 sm:max-w-xl max-w-sm text-sm p-4 text-center flex flex-col items-center justify-center m-auto">
        <p>You can enter a playlist link, playlist ID or even a video link from the playlist!</p>
        <p>This only works with playlists with upto 500 videos.</p>
      </div>

      {randomVideo && (
        <Fragment>
          <hr className="sm:my-8 my-4 h-0.5 border-t-0 bg-stone-900 opacity-100 dark:bg-stone-100  sm:max-w-lg max-w-xs m-auto" />
          <div className="my-2 flex flex-col gap-2 items-center justify-center m-auto">
            <Link
              href={`https://www.youtube.com/watch?v=${randomVideo}`}
              target="_blank"
              className=" p-2 px-4 border-2 rounded-xl border-stone-900 dark:border-stone-50"
            >
              For access video click Here
            </Link>
            <iframe
              width="1366"
              height="768"
              src={`https://www.youtube.com/embed/${randomVideo}`}
            />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default PlaylistInput;
