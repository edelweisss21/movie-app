import homeIcon from './assets/icons/icon-nav-home.svg';
import movieIcon from './assets/icons/icon-nav-movies.svg';
import tvSeriesIcon from './assets/icons/icon-nav-tv-series.svg';
import bookmarkIcon from './assets/icons/icon-nav-bookmark.svg';

interface INavLink {
	name: string;
	icon: string;
	link: string;
}

export const navLinks: INavLink[] = [
	{
		name: 'Home',
		icon: homeIcon,
		link: '/movie-app/',
	},
	{
		name: 'Movie',
		icon: movieIcon,
		link: '/movie-app/movie',
	},
	{
		name: 'Tv Series',
		icon: tvSeriesIcon,
		link: '/movie-app/tv-series',
	},
	{
		name: 'Bookmark',
		icon: bookmarkIcon,
		link: '/movie-app/bookmark',
	},
];
