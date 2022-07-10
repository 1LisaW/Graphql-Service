import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { FavouritesService } from './favourites.service';
import { Favourite } from './entities/favourite.entity';
import { CreateFavouriteInput } from './dto/create-favourite.input';
import { RemoveFromFavouriteInput } from './dto/remove-from-favourite.input';
import { ContextType } from '@nestjs/common';
import { RemoveFavourite } from './entities/remove.entity';

@Resolver(() => Favourite)
export class FavouritesResolver {
  constructor(private readonly favouritesService: FavouritesService) {}

  @Mutation(() => Favourite)
  createFavourite(
    @Args('createFavouriteInput') createFavouriteInput: CreateFavouriteInput,
    @Context()
    context: ContextType & { token: string },
  ) {
    return this.favouritesService.create(createFavouriteInput, context.token);
  }

  @Query(() => Favourite, { name: 'favourites' })
  findOne(
    @Context()
    context: ContextType & { token: string },
  ) {
    return this.favouritesService.findOne(context.token);
  }

  // @Mutation(() => Favourite)
  // updateFavourite(
  //   @Args('removeFromFavouriteInput')
  //   removeFromFavouriteInput: RemoveFromFavouriteInput,
  // ) {
  //   return this.favouritesService.update(
  //     removeFromFavouriteInput.id,
  //     removeFromFavouriteInput,
  //   );
  // }

  @Mutation(() => RemoveFavourite)
  removeFavourite(
    @Args('id', { type: () => String }) id: string,
    @Context()
    context: ContextType & { token: string },
  ) {
    return this.favouritesService.remove(id, context.token);
  }
}
