import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateArtistInput {
  @Field(() => String, { nullable: false })
  firstName: string;

  @Field(() => String, { nullable: false })
  secondName: string;

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
