import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { TracksService } from './tracks.service';
import { Track } from './entities/track.entity';
import { CreateTrackInput } from './dto/create-track.input';
import { UpdateTrackInput } from './dto/update-track.input';
import { ContextType } from '@nestjs/common';

@Resolver(() => Track)
export class TracksResolver {
  constructor(private readonly tracksService: TracksService) {}

  @Mutation(() => Track)
  createTrack(
    @Args('createTrackInput') createTrackInput: CreateTrackInput,
    @Context()
    context: ContextType & { token: string },
  ) {
    return this.tracksService.create(createTrackInput, context.token);
  }

  @Query(() => [Track], { name: 'tracks' })
  findAll() {
    return this.tracksService.findAll();
  }

  @Query(() => Track, { name: 'track' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.tracksService.findOne(id);
  }

  @Mutation(() => Track)
  updateTrack(
    @Args('id', { type: () => String }) id: string,
    @Args('updateTrackInput') updateTrackInput: UpdateTrackInput,
    @Context()
    context: ContextType & { token: string },
  ) {
    return this.tracksService.update(id, updateTrackInput, context.token);
  }

  @Mutation(() => Track)
  removeTrack(@Args('id', { type: () => Int }) id: number) {
    return this.tracksService.remove(id);
  }
}
