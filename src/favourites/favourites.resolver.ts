import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { FavouritesService } from './favourites.service';
import { Favourite } from './entities/favourite.entity';
import { CreateFavouriteInput } from './dto/create-favourite.input';
import { RemoveFromFavouriteInput } from './dto/remove-from-favourite.input';
import { ContextType } from '@nestjs/common';

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

  @Mutation(() => Favourite)
  removeFavourite(@Args('id', { type: () => Int }) id: number) {
    return this.favouritesService.remove(id);
  }
}
