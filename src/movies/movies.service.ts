import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
	private movies: Movie[] = [];

	getAll(): Movie[] {
		return this.movies;
	}

	get(id: string): Movie {
		return this.movies.find((movie) => movie.id === +id);
	}

	deleteOne(id: string): boolean {
		this.movies.filter((movie) => movie.id !== +id);
		return true;
	}

	create(movieData: any) {
		this.movies.push({
			id: this.movies.length + 1,
			...movieData,
		});
	}
}
