import {
  Resolver,
  Query,
  Mutation,
  Args,
  Context,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { BandsService } from './bands.service';
import { Band } from './entities/band.entity';
import { CreateBandInput } from './dto/create-band.input';
import { UpdateBandInput } from './dto/update-band.input';
import { ContextType } from '@nestjs/common';
import { RemoveBand } from './entities/remove.entity';
import { Genre } from 'src/genres/entities/genre.entity';
import { GenresService } from 'src/genres/genres.service';

@Resolver(() => Band)
export class BandsResolver {
  constructor(
    private readonly bandsService: BandsService,
    private readonly genresService: GenresService,
  ) {}

  @Mutation(() => Band)
  createBand(
    @Args('createBandInput') createBandInput: CreateBandInput,
    @Context()
    context: ContextType & { token: string },
  ) {
    return this.bandsService.create(createBandInput, context.token);
  }

  @Query(() => [Band], { name: 'bands' })
  findAll() {
    return this.bandsService.findAll();
  }

  @Query(() => Band, { name: 'band' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.bandsService.findOne(id);
  }

  @Mutation(() => Band)
  updateBand(
    @Args('id', { type: () => String }) id: string,
    @Args('updateBandInput')
    updateBandInput: UpdateBandInput,
    @Context()
    context: ContextType & { token: string },
  ) {
    return this.bandsService.update(id, updateBandInput, context.token);
  }

  @Mutation(() => RemoveBand)
  removeBand(
    @Args('id', { type: () => String }) id: string,
    @Context()
    context: ContextType & { token: string },
  ) {
    return this.bandsService.remove(id, context.token);
  }

  @ResolveField('genres', () => [Genre])
  async resolveBands(@Parent() parent: Band) {
    const { genresIds } = parent;
    const genres = [];

    for (const id of genresIds) {
      const genre = await this.genresService.findOne(id);
      if (genre) genres.push(genre);
    }

    console.log('?', genresIds, genres);
    return genres;
  }
}
