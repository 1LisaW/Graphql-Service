import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { BandsService } from './bands.service';
import { Band } from './entities/band.entity';
import { CreateBandInput } from './dto/create-band.input';
import { UpdateBandInput } from './dto/update-band.input';
import { ContextType } from '@nestjs/common';

@Resolver(() => Band)
export class BandsResolver {
  constructor(private readonly bandsService: BandsService) {}

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

  // @Mutation(() => Band)
  // updateBand(@Args('updateBandInput') updateBandInput: UpdateBandInput) {
  //   return this.bandsService.update(updateBandInput.id, updateBandInput);
  // }

  @Mutation(() => Band)
  removeBand(@Args('id', { type: () => Int }) id: number) {
    return this.bandsService.remove(id);
  }
}
