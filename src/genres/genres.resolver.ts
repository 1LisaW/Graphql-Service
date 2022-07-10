import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { GenresService } from './genres.service';
import { Genre } from './entities/genre.entity';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';
import { ContextType } from '@nestjs/common';

@Resolver(() => Genre)
export class GenresResolver {
  constructor(private readonly genresService: GenresService) {}

  @Mutation(() => Genre)
  createGenre(
    @Args('createGenreInput') createGenreInput: CreateGenreInput,
    @Context()
    context: ContextType & { token: string },
  ) {
    return this.genresService.create(createGenreInput, context.token);
  }

  @Query(() => [Genre], { name: 'genres' })
  findAll() {
    return this.genresService.findAll();
  }

  @Query(() => Genre, { name: 'genre' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.genresService.findOne(id);
  }

  @Mutation(() => Genre)
  updateGenre(
    @Args('id', { type: () => String }) id: string,
    @Args('updateGenreInput') updateGenreInput: UpdateGenreInput,
    @Context()
    context: ContextType & { token: string },
  ) {
    return this.genresService.update(id, updateGenreInput, context.token);
  }

  @Mutation(() => Genre)
  removeGenre(@Args('id', { type: () => String }) id: string) {
    return this.genresService.remove(id);
  }
}
