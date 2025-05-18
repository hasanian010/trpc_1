import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderProductWhereInput } from './order-product-where.input';
import { Type } from 'class-transformer';
import { OrderProductOrderByWithRelationInput } from './order-product-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { OrderProductWhereUniqueInput } from './order-product-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OrderProductScalarFieldEnum } from './order-product-scalar-field.enum';

@ArgsType()
export class FindFirstOrderProductArgs {

    @Field(() => OrderProductWhereInput, {nullable:true})
    @Type(() => OrderProductWhereInput)
    where?: OrderProductWhereInput;

    @Field(() => [OrderProductOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderProductOrderByWithRelationInput>;

    @Field(() => OrderProductWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OrderProductWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [OrderProductScalarFieldEnum], {nullable:true})
    distinct?: Array<`${OrderProductScalarFieldEnum}`>;
}
