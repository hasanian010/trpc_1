import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FlashUpdateInput } from './flash-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FlashWhereUniqueInput } from './flash-where-unique.input';

@ArgsType()
export class UpdateOneFlashArgs {

    @Field(() => FlashUpdateInput, {nullable:false})
    @Type(() => FlashUpdateInput)
    data!: FlashUpdateInput;

    @Field(() => FlashWhereUniqueInput, {nullable:false})
    @Type(() => FlashWhereUniqueInput)
    where!: Prisma.AtLeast<FlashWhereUniqueInput, 'id'>;
}
