import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
	constructor(private readonly moviesService: MoviesService) {}

	@Get()
	getAll(): Movie[] {
		return this.moviesService.getAll();
	}

	@Get('/:id')
	getOne(@Param('id') movieId: number) {
		return this.moviesService.get(movieId);
	}

	@Post()
	create(@Body() movieData: CreateMovieDto) {
		return this.moviesService.create(movieData);
	}

	@Delete('/:id')
	deleteMovice(@Param('id') movieId: number) {
		return `${movieId} moive deleted`;
	}

	// 모든 리소스 업데이트
	// @Put()

	// 리소스의 특정부분만 업데이트
	@Patch('/:id')
	patchMovie(@Param('id') movieId: number, @Body() movieData) {
		return this.moviesService.update(movieId, movieData);
	}
}
