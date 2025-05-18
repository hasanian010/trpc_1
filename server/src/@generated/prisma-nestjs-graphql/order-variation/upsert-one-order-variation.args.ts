import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderVariationWhereUniqueInput } from './order-variation-where-unique.input';
import { Type } from 'class-transformer';
import { OrderVariationCreateInput } from './order-variation-create.input';
import { OrderVariationUpdateInput } from './order-variation-update.input';

@ArgsType()
export class UpsertOneOrderVariationArgs {

    @Field(() => OrderVariationWhereUniqueInput, {nullable:false})
    @Type(() => OrderVariationWhereUniqueInput)
    where!: Prisma.AtLeast<OrderVariationWhereUniqueInput, 'id'>;

    @Field(() => OrderVariationCreateInput, {nullable:false})
    @Type(() => OrderVariationCreateInput)
    create!: OrderVariationCreateInput;

    @Field(() => OrderVariationUpdateInput, {nullable:false})
    @Type(() => OrderVariationUpdateInput)
    update!: OrderVariationUpdateInput;
}
