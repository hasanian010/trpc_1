import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundableCreateWithoutRefundsInput } from './refundable-create-without-refunds.input';
import { Type } from 'class-transformer';
import { RefundableCreateOrConnectWithoutRefundsInput } from './refundable-create-or-connect-without-refunds.input';
import { Prisma } from '@prisma/client';
import { RefundableWhereUniqueInput } from './refundable-where-unique.input';

@InputType()
export class RefundableCreateNestedOneWithoutRefundsInput {

    @Field(() => RefundableCreateWithoutRefundsInput, {nullable:true})
    @Type(() => RefundableCreateWithoutRefundsInput)
    create?: RefundableCreateWithoutRefundsInput;

    @Field(() => RefundableCreateOrConnectWithoutRefundsInput, {nullable:true})
    @Type(() => RefundableCreateOrConnectWithoutRefundsInput)
    connectOrCreate?: RefundableCreateOrConnectWithoutRefundsInput;

    @Field(() => RefundableWhereUniqueInput, {nullable:true})
    @Type(() => RefundableWhereUniqueInput)
    connect?: Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>;
}
