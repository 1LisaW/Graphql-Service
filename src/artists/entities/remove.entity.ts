import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class RemoveArtist {
  @Field(() => String, { nullable: false })
  acknowledged: boolean;

  @Field(() => Int, { nullable: false })
  deletedCount: number;
}
