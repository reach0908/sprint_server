import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
	@Get()
	getAll() {
		return 'this will return all movies';
	}

	@Get('/:id')
	getOne(@Param('id') movieId: string) {
		return `${movieId} moive`;
	}

	@Post()
	createMovie() {
		return 'This will create movice';
	}

	@Delete('/:id')
	deleteMovice(@Param('id') movieId: string) {
		return `${movieId} moive deleted`;
	}

	// 모든 리소스 업데이트
	// @Put()

	// 리소스의 특정부분만 업데이트
	@Patch('/:id')
	patchMovie(@Param('id') movieId: string) {
		return `${movieId} moive updated`;
	}
}
