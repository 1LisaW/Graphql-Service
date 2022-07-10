import { CreateGenreInput } from './create-genre.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGenreInput extends PartialType(CreateGenreInput) {
  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  description: string;

  @Field(() => String, { nullable: true })
  country: string;

  @Field(() => Int, { nullable: true })
  year: string;
}
