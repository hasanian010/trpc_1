import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundableCreateWithoutProductInput } from './refundable-create-without-product.input';
import { Type } from 'class-transformer';
import { RefundableCreateOrConnectWithoutProductInput } from './refundable-create-or-connect-without-product.input';
import { RefundableCreateManyProductInputEnvelope } from './refundable-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RefundableWhereUniqueInput } from './refundable-where-unique.input';

@InputType()
export class RefundableUncheckedCreateNestedManyWithoutProductInput {

    @Field(() => [RefundableCreateWithoutProductInput], {nullable:true})
    @Type(() => RefundableCreateWithoutProductInput)
    create?: Array<RefundableCreateWithoutProductInput>;

    @Field(() => [RefundableCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => RefundableCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<RefundableCreateOrConnectWithoutProductInput>;

    @Field(() => RefundableCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => RefundableCreateManyProductInputEnvelope)
    createMany?: RefundableCreateManyProductInputEnvelope;

    @Field(() => [RefundableWhereUniqueInput], {nullable:true})
    @Type(() => RefundableWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>>;
}
