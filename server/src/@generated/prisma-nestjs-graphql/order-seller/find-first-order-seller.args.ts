import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderSellerWhereInput } from './order-seller-where.input';
import { Type } from 'class-transformer';
import { OrderSellerOrderByWithRelationInput } from './order-seller-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { OrderSellerWhereUniqueInput } from './order-seller-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OrderSellerScalarFieldEnum } from './order-seller-scalar-field.enum';

@ArgsType()
export class FindFirstOrderSellerArgs {

    @Field(() => OrderSellerWhereInput, {nullable:true})
    @Type(() => OrderSellerWhereInput)
    where?: OrderSellerWhereInput;

    @Field(() => [OrderSellerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderSellerOrderByWithRelationInput>;

    @Field(() => OrderSellerWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OrderSellerWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [OrderSellerScalarFieldEnum], {nullable:true})
    distinct?: Array<`${OrderSellerScalarFieldEnum}`>;
}
