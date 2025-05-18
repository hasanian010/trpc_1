import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderProductWhereUniqueInput } from './order-product-where-unique.input';
import { Type } from 'class-transformer';
import { OrderProductCreateInput } from './order-product-create.input';
import { OrderProductUpdateInput } from './order-product-update.input';

@ArgsType()
export class UpsertOneOrderProductArgs {

    @Field(() => OrderProductWhereUniqueInput, {nullable:false})
    @Type(() => OrderProductWhereUniqueInput)
    where!: Prisma.AtLeast<OrderProductWhereUniqueInput, 'id'>;

    @Field(() => OrderProductCreateInput, {nullable:false})
    @Type(() => OrderProductCreateInput)
    create!: OrderProductCreateInput;

    @Field(() => OrderProductUpdateInput, {nullable:false})
    @Type(() => OrderProductUpdateInput)
    update!: OrderProductUpdateInput;
}
