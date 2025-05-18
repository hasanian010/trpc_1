import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundableCreateWithoutRefundsInput } from './refundable-create-without-refunds.input';
import { Type } from 'class-transformer';
import { RefundableCreateOrConnectWithoutRefundsInput } from './refundable-create-or-connect-without-refunds.input';
import { RefundableUpsertWithoutRefundsInput } from './refundable-upsert-without-refunds.input';
import { Prisma } from '@prisma/client';
import { RefundableWhereUniqueInput } from './refundable-where-unique.input';
import { RefundableUpdateToOneWithWhereWithoutRefundsInput } from './refundable-update-to-one-with-where-without-refunds.input';

@InputType()
export class RefundableUpdateOneRequiredWithoutRefundsNestedInput {

    @Field(() => RefundableCreateWithoutRefundsInput, {nullable:true})
    @Type(() => RefundableCreateWithoutRefundsInput)
    create?: RefundableCreateWithoutRefundsInput;

    @Field(() => RefundableCreateOrConnectWithoutRefundsInput, {nullable:true})
    @Type(() => RefundableCreateOrConnectWithoutRefundsInput)
    connectOrCreate?: RefundableCreateOrConnectWithoutRefundsInput;

    @Field(() => RefundableUpsertWithoutRefundsInput, {nullable:true})
    @Type(() => RefundableUpsertWithoutRefundsInput)
    upsert?: RefundableUpsertWithoutRefundsInput;

    @Field(() => RefundableWhereUniqueInput, {nullable:true})
    @Type(() => RefundableWhereUniqueInput)
    connect?: Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>;

    @Field(() => RefundableUpdateToOneWithWhereWithoutRefundsInput, {nullable:true})
    @Type(() => RefundableUpdateToOneWithWhereWithoutRefundsInput)
    update?: RefundableUpdateToOneWithWhereWithoutRefundsInput;
}
