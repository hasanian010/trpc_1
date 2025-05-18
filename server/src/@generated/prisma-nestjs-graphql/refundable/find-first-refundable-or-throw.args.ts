import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefundableWhereInput } from './refundable-where.input';
import { Type } from 'class-transformer';
import { RefundableOrderByWithRelationInput } from './refundable-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { RefundableWhereUniqueInput } from './refundable-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RefundableScalarFieldEnum } from './refundable-scalar-field.enum';

@ArgsType()
export class FindFirstRefundableOrThrowArgs {

    @Field(() => RefundableWhereInput, {nullable:true})
    @Type(() => RefundableWhereInput)
    where?: RefundableWhereInput;

    @Field(() => [RefundableOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RefundableOrderByWithRelationInput>;

    @Field(() => RefundableWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RefundableScalarFieldEnum], {nullable:true})
    distinct?: Array<`${RefundableScalarFieldEnum}`>;
}
