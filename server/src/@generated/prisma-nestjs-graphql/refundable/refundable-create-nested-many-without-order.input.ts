import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundableCreateWithoutOrderInput } from './refundable-create-without-order.input';
import { Type } from 'class-transformer';
import { RefundableCreateOrConnectWithoutOrderInput } from './refundable-create-or-connect-without-order.input';
import { RefundableCreateManyOrderInputEnvelope } from './refundable-create-many-order-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RefundableWhereUniqueInput } from './refundable-where-unique.input';

@InputType()
export class RefundableCreateNestedManyWithoutOrderInput {

    @Field(() => [RefundableCreateWithoutOrderInput], {nullable:true})
    @Type(() => RefundableCreateWithoutOrderInput)
    create?: Array<RefundableCreateWithoutOrderInput>;

    @Field(() => [RefundableCreateOrConnectWithoutOrderInput], {nullable:true})
    @Type(() => RefundableCreateOrConnectWithoutOrderInput)
    connectOrCreate?: Array<RefundableCreateOrConnectWithoutOrderInput>;

    @Field(() => RefundableCreateManyOrderInputEnvelope, {nullable:true})
    @Type(() => RefundableCreateManyOrderInputEnvelope)
    createMany?: RefundableCreateManyOrderInputEnvelope;

    @Field(() => [RefundableWhereUniqueInput], {nullable:true})
    @Type(() => RefundableWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>>;
}
