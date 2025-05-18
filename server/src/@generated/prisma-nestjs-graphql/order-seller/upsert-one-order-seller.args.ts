import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderSellerWhereUniqueInput } from './order-seller-where-unique.input';
import { Type } from 'class-transformer';
import { OrderSellerCreateInput } from './order-seller-create.input';
import { OrderSellerUpdateInput } from './order-seller-update.input';

@ArgsType()
export class UpsertOneOrderSellerArgs {

    @Field(() => OrderSellerWhereUniqueInput, {nullable:false})
    @Type(() => OrderSellerWhereUniqueInput)
    where!: Prisma.AtLeast<OrderSellerWhereUniqueInput, 'id'>;

    @Field(() => OrderSellerCreateInput, {nullable:false})
    @Type(() => OrderSellerCreateInput)
    create!: OrderSellerCreateInput;

    @Field(() => OrderSellerUpdateInput, {nullable:false})
    @Type(() => OrderSellerUpdateInput)
    update!: OrderSellerUpdateInput;
}
