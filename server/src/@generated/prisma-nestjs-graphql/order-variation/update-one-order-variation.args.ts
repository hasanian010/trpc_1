import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderVariationUpdateInput } from './order-variation-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OrderVariationWhereUniqueInput } from './order-variation-where-unique.input';

@ArgsType()
export class UpdateOneOrderVariationArgs {

    @Field(() => OrderVariationUpdateInput, {nullable:false})
    @Type(() => OrderVariationUpdateInput)
    data!: OrderVariationUpdateInput;

    @Field(() => OrderVariationWhereUniqueInput, {nullable:false})
    @Type(() => OrderVariationWhereUniqueInput)
    where!: Prisma.AtLeast<OrderVariationWhereUniqueInput, 'id'>;
}
