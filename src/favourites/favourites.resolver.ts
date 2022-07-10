import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { FavouritesService } from './favourites.service';
import { Favourite } from './entities/favourite.entity';
import { CreateFavouriteInput } from './dto/create-favourite.input';
import { ContextType } from '@nestjs/common';
import { RemoveFavourite } from './entities/remove.entity';

@Resolver(() => Favourite)
export class FavouritesResolver {
  constructor(private readonly favouritesService: FavouritesService) {}

  @Mutation(() => Favourite)
  addTrackToFavourites(
    @Args('createFavouriteInput') createFavouriteInput: CreateFavouriteInput, // id
    @Context()
    context: ContextType & { token: string },
  ) {
    return this.favouritesService.create(
      'tracks',
      createFavouriteInput,
      context.token,
    );
  }

  @Mutation(() => Favourite)
  addBandToFavourites(
    @Args('createFavouriteInput') createFavouriteInput: CreateFavouriteInput, // id
    @Context()
    context: ContextType & { token: string },
  ) {
    return this.favouritesService.create(
      'bands',
      createFavouriteInput,
      context.token,
    );
  }

  @Mutation(() => Favourite)
  addArtistToFavourites(
    @Args('createFavouriteInput') createFavouriteInput: CreateFavouriteInput, // id
    @Context()
    context: ContextType & { token: string },
  ) {
    return this.favouritesService.create(
      'artists',
      createFavouriteInput,
      context.token,
    );
  }

  @Mutation(() => Favourite)
  addGenreToFavourites(
    @Args('createFavouriteInput') createFavouriteInput: CreateFavouriteInput, // id
    @Context()
    context: ContextType & { token: string },
  ) {
    return this.favouritesService.create(
      'genres',
      createFavouriteInput,
      context.token,
    );
  }

  @Query(() => Favourite, { name: 'favourites' })
  findOne(
    @Context()
    context: ContextType & { token: string },
  ) {
    return this.favouritesService.findOne(context.token);
  }

  @Mutation(() => RemoveFavourite)
  removeFavourite(
    @Args('id', { type: () => String }) id: string,
    @Context()
    context: ContextType & { token: string },
  ) {
    return this.favouritesService.remove(id, context.token);
  }
}
