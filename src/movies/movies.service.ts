import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
	private movies: Movie[] = [];

	getAll(): Movie[] {
		return this.movies;
	}

	get(id: string): Movie {
		const movie = this.movies.find((movie) => movie.id === +id);
		if (!movie) {
			throw new NotFoundException(
				`Movie with ID ${id} not found`,
			);
		}

		return movie;
	}

	deleteOne(id: string): boolean {
		this.movies = this.movies.filter((movie) => movie.id !== +id);
		return true;
	}

	create(movieData: CreateMovieDto) {
		this.movies.push({
			id: this.movies.length + 1,
			...movieData,
		});
	}

	update(id: string, updateData: any): boolean {
		const movie = this.get(id);
		this.deleteOne(id);
		this.movies.push({ ...movie, ...updateData });
		return true;
	}
}
