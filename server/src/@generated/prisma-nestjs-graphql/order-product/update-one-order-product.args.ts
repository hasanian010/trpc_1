import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderProductUpdateInput } from './order-product-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OrderProductWhereUniqueInput } from './order-product-where-unique.input';

@ArgsType()
export class UpdateOneOrderProductArgs {

    @Field(() => OrderProductUpdateInput, {nullable:false})
    @Type(() => OrderProductUpdateInput)
    data!: OrderProductUpdateInput;

    @Field(() => OrderProductWhereUniqueInput, {nullable:false})
    @Type(() => OrderProductWhereUniqueInput)
    where!: Prisma.AtLeast<OrderProductWhereUniqueInput, 'id'>;
}
