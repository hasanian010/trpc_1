import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderVariationWhereInput } from './order-variation-where.input';
import { Type } from 'class-transformer';
import { OrderVariationOrderByWithRelationInput } from './order-variation-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { OrderVariationWhereUniqueInput } from './order-variation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OrderVariationScalarFieldEnum } from './order-variation-scalar-field.enum';

@ArgsType()
export class FindFirstOrderVariationOrThrowArgs {

    @Field(() => OrderVariationWhereInput, {nullable:true})
    @Type(() => OrderVariationWhereInput)
    where?: OrderVariationWhereInput;

    @Field(() => [OrderVariationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderVariationOrderByWithRelationInput>;

    @Field(() => OrderVariationWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OrderVariationWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [OrderVariationScalarFieldEnum], {nullable:true})
    distinct?: Array<`${OrderVariationScalarFieldEnum}`>;
}
