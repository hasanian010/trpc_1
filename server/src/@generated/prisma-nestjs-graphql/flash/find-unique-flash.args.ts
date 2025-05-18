import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FlashWhereUniqueInput } from './flash-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueFlashArgs {

    @Field(() => FlashWhereUniqueInput, {nullable:false})
    @Type(() => FlashWhereUniqueInput)
    where!: Prisma.AtLeast<FlashWhereUniqueInput, 'id'>;
}
