import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateFavouriteInput {
  @Field(() => String, { nullable: true })
  type: 'bands' | 'genres' | 'artists' | 'tracks';

  @Field(() => String, { nullable: true })
  id: string;
}
