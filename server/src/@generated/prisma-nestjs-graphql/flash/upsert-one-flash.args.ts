import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FlashWhereUniqueInput } from './flash-where-unique.input';
import { Type } from 'class-transformer';
import { FlashCreateInput } from './flash-create.input';
import { FlashUpdateInput } from './flash-update.input';

@ArgsType()
export class UpsertOneFlashArgs {

    @Field(() => FlashWhereUniqueInput, {nullable:false})
    @Type(() => FlashWhereUniqueInput)
    where!: Prisma.AtLeast<FlashWhereUniqueInput, 'id'>;

    @Field(() => FlashCreateInput, {nullable:false})
    @Type(() => FlashCreateInput)
    create!: FlashCreateInput;

    @Field(() => FlashUpdateInput, {nullable:false})
    @Type(() => FlashUpdateInput)
    update!: FlashUpdateInput;
}
