import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { AlbumsService } from './albums.service';
import { Album } from './entities/album.entity';
import { CreateAlbumInput } from './dto/create-album.input';
import { UpdateAlbumInput } from './dto/update-album.input';
import { ContextType } from '@nestjs/common';

@Resolver(() => Album)
export class AlbumsResolver {
  constructor(private readonly albumsService: AlbumsService) {}

  @Mutation(() => Album)
  createAlbum(
    @Args('createAlbumInput') createAlbumInput: CreateAlbumInput,
    @Context() context: ContextType & { token: string },
  ) {
    return this.albumsService.create(createAlbumInput, context.token);
  }

  @Query(() => [Album], { name: 'albums' })
  findAll() {
    return this.albumsService.findAll();
  }

  @Query(() => Album, { name: 'album' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.albumsService.findOne(id);
  }

  // @Mutation(() => Album)
  // updateAlbum(@Args('updateAlbumInput') updateAlbumInput: UpdateAlbumInput) {
  //   return this.albumsService.update(updateAlbumInput.id, updateAlbumInput);
  // }

  @Mutation(() => Album)
  removeAlbum(@Args('id', { type: () => Int }) id: number) {
    return this.albumsService.remove(id);
  }
}
