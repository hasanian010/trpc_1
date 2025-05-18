import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PreorderWhereUniqueInput } from './preorder-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePreorderArgs {

    @Field(() => PreorderWhereUniqueInput, {nullable:false})
    @Type(() => PreorderWhereUniqueInput)
    where!: Prisma.AtLeast<PreorderWhereUniqueInput, 'id'>;
}
