import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { formatDistanceToNow } from 'date-fns';
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(number: number): string {
  if (number < 1000) {
    return number.toString();
  } else if (number >= 1000 && number < 1_000_000) {
    return (number / 1000).toFixed(1) + 'K';
  } else {
    return (number / 1_000_000).toFixed(1) + 'M';
  }
}


export function getTimeStamp(date: Date): string {
  const distance = formatDistanceToNow(date, {
    addSuffix: true,
    includeSeconds: false,
  });
  return distance;
};

export const getJoinedDate = (date: Date): string => {
  // Check if the date is a valid Date object
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return "";
  }

  // Extract the month and year from the Date object
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  // Create the joined date string (e.g., "September 2023")
  const joinedDate = `Joined ${month} ${year}`;

  return joinedDate;
};
