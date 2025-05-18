import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RefundableWhereUniqueInput } from './refundable-where-unique.input';
import { Type } from 'class-transformer';
import { RefundableCreateWithoutProductInput } from './refundable-create-without-product.input';

@InputType()
export class RefundableCreateOrConnectWithoutProductInput {

    @Field(() => RefundableWhereUniqueInput, {nullable:false})
    @Type(() => RefundableWhereUniqueInput)
    where!: Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>;

    @Field(() => RefundableCreateWithoutProductInput, {nullable:false})
    @Type(() => RefundableCreateWithoutProductInput)
    create!: RefundableCreateWithoutProductInput;
}
