/* eslint-disable @typescript-eslint/no-explicit-any */
import { differenceInDays, format, parseISO } from "date-fns";
import { enUS } from "date-fns/locale";

export const formatDate = (date: Date | null) => {
  return date ? format(date, "yyyy-MM-dd") : "";
};

export const formatTime = (timeString:string) => {
  if (!timeString) {
    return "";
  }

  const time = new Date(`2000-01-01T${timeString}`);
  const formattedTime = format(time, "h:mm");
  const period = time.getHours() < 12 ? "AM" : "PM";

  return `${formattedTime} ${period}`;
};

export const formatDateWithRelativeLabel = (dateString: string) => {
  const date = new Date(dateString);
  const today = new Date();
  const daysDifference = differenceInDays(date, today);

  if (daysDifference === 0) {
    return 'today';
  } else if (daysDifference === 1) {
    return 'tomorrow';
  } else if (daysDifference === -1) {
    return 'yesterday';
  } else if (daysDifference > 0) {
    return `${daysDifference} days from now`;
  } else {
    // If the date is in the past
    return format(date, 'yyyy-MM-dd');
  }
};

export const formatDateToLongFormat = (dateString:any) => {
  const parsedDate = parseISO(dateString);
  const formattedDate = format(parsedDate, "do MMMM, yyyy", { locale: enUS });
  return formattedDate;
};
