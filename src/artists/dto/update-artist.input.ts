import { CreateArtistInput } from './create-artist.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateArtistInput extends PartialType(CreateArtistInput) {
  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  secondName?: string;

  @Field(() => String, { nullable: true })
  middleName?: string;

  @Field(() => String, { nullable: true })
  birthDate?: string;

  @Field(() => String, { nullable: true })
  birthPlace?: string;

  @Field(() => String, { nullable: true })
  country?: string;

  @Field(() => [String], { nullable: 'itemsAndList' })
  bandsIds?: string[];

  @Field(() => [String], { nullable: 'itemsAndList' })
  instruments?: string[];
}
