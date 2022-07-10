import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Band } from 'src/bands/entities/band.entity';

@ObjectType()
export class Artist {
  @Field(() => ID, { description: 'ID of Artist', nullable: false })
  _id: string;

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

  @Field(() => String)
  country?: string;

  @Field(() => [String], { nullable: 'itemsAndList' })
  bandsIds?: string[];

  @Field(() => [Band], { nullable: 'itemsAndList' })
  bands?: Band[];

  @Field(() => [String], { nullable: 'itemsAndList' })
  instruments?: string[];
}
