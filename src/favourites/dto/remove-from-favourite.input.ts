import { CreateFavouriteInput } from './create-favourite.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class RemoveFromFavouriteInput extends PartialType(
  CreateFavouriteInput,
) {
  @Field(() => String, { nullable: true })
  type: 'bands' | 'genres' | 'artists' | 'tracks';

  @Field(() => String, { nullable: true })
  id: string;
}
