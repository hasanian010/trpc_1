import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderSellerUpdateInput } from './order-seller-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OrderSellerWhereUniqueInput } from './order-seller-where-unique.input';

@ArgsType()
export class UpdateOneOrderSellerArgs {

    @Field(() => OrderSellerUpdateInput, {nullable:false})
    @Type(() => OrderSellerUpdateInput)
    data!: OrderSellerUpdateInput;

    @Field(() => OrderSellerWhereUniqueInput, {nullable:false})
    @Type(() => OrderSellerWhereUniqueInput)
    where!: Prisma.AtLeast<OrderSellerWhereUniqueInput, 'id'>;
}
