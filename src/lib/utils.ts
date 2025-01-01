import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const formatUrlString = (url: string) => {
  const data = url;

  let urlFormat = '';

  if (data?.includes('list=')) {
    urlFormat = data.split('list=')[1].split('&')[0];
  } else {
    if (data?.length === 34) {
      urlFormat = data;
    }
  }

  return urlFormat;
};

const getRandomItem = (items: string[]): string => {
  if (items.length === 0) {
    return '';
  }

  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
};

export { cn, formatUrlString, getRandomItem };
