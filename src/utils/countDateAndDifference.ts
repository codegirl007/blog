import { formatDistanceToNowStrict } from "date-fns";

export const getLocaleTime = (date: string) => {
	const dateFormat = new Date(date);
	const localeDate = new Date(dateFormat.getTime() - dateFormat.getTimezoneOffset() * 60 * 1000);
	return localeDate;
};

export const countTimeDistance = (date: string) => {
	const localeDate = getLocaleTime(date);
	const timeDistance = formatDistanceToNowStrict(localeDate);
	return timeDistance;
};
