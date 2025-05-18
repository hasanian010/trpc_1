import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderVariationWhereUniqueInput } from './order-variation-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueOrderVariationArgs {

    @Field(() => OrderVariationWhereUniqueInput, {nullable:false})
    @Type(() => OrderVariationWhereUniqueInput)
    where!: Prisma.AtLeast<OrderVariationWhereUniqueInput, 'id'>;
}
