import {
  Resolver,
  Query,
  Mutation,
  Args,
  Context,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { ArtistsService } from './artists.service';
import { Artist } from './entities/artist.entity';
import { CreateArtistInput } from './dto/create-artist.input';
import { UpdateArtistInput } from './dto/update-artist.input';
import { ContextType } from '@nestjs/common';
import { RemoveArtist } from './entities/remove.entity';
import { Band } from 'src/bands/entities/band.entity';
import { BandsService } from 'src/bands/bands.service';

@Resolver(() => Artist)
export class ArtistsResolver {
  constructor(
    private readonly artistsService: ArtistsService,
    private readonly bandsService: BandsService,
  ) {}

  @Mutation(() => Artist)
  createArtist(
    @Args('createArtistInput') createArtistInput: CreateArtistInput,
    @Context()
    context: ContextType & { token: string },
  ) {
    return this.artistsService.create(createArtistInput, context.token);
  }

  @Query(() => [Artist], { name: 'artists', nullable: 'itemsAndList' })
  findAll() {
    console.log('Is Im here?');
    return this.artistsService.findAll();
  }

  @Query(() => Artist, { name: 'artist' })
  findOne(@Args('id') id: string) {
    console.log('Is Im here!');
    return this.artistsService.findOne(id);
  }

  @Mutation(() => Artist)
  updateArtist(
    @Args('id') id: string,
    @Args('updateArtistInput') updateArtistInput: UpdateArtistInput,
    @Context()
    context: ContextType & { token: string },
  ) {
    return this.artistsService.update(id, updateArtistInput, context.token);
  }

  @Mutation(() => RemoveArtist)
  removeArtist(
    @Args('id', { type: () => String }) id: string,
    @Context()
    context: ContextType & { token: string },
  ) {
    return this.artistsService.remove(id, context.token);
  }

  @ResolveField('bands', () => [Band])
  async resolveBands(@Parent() parent: Artist) {
    const { bandsIds } = parent;
    const bands = [];

    for (const id of bandsIds) {
      const band = await this.bandsService.findOne(id);
      if (band) bands.push(band);
    }

    console.log('?', bandsIds, bands);
    return bands;
  }
}
