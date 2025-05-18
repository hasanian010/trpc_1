import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundableCreateWithoutOrderProductInput } from './refundable-create-without-order-product.input';
import { Type } from 'class-transformer';
import { RefundableCreateOrConnectWithoutOrderProductInput } from './refundable-create-or-connect-without-order-product.input';
import { RefundableCreateManyOrderProductInputEnvelope } from './refundable-create-many-order-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RefundableWhereUniqueInput } from './refundable-where-unique.input';

@InputType()
export class RefundableCreateNestedManyWithoutOrderProductInput {

    @Field(() => [RefundableCreateWithoutOrderProductInput], {nullable:true})
    @Type(() => RefundableCreateWithoutOrderProductInput)
    create?: Array<RefundableCreateWithoutOrderProductInput>;

    @Field(() => [RefundableCreateOrConnectWithoutOrderProductInput], {nullable:true})
    @Type(() => RefundableCreateOrConnectWithoutOrderProductInput)
    connectOrCreate?: Array<RefundableCreateOrConnectWithoutOrderProductInput>;

    @Field(() => RefundableCreateManyOrderProductInputEnvelope, {nullable:true})
    @Type(() => RefundableCreateManyOrderProductInputEnvelope)
    createMany?: RefundableCreateManyOrderProductInputEnvelope;

    @Field(() => [RefundableWhereUniqueInput], {nullable:true})
    @Type(() => RefundableWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>>;
}
