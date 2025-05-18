import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundableCreateWithoutOrderInput } from './refundable-create-without-order.input';
import { Type } from 'class-transformer';
import { RefundableCreateOrConnectWithoutOrderInput } from './refundable-create-or-connect-without-order.input';
import { RefundableUpsertWithWhereUniqueWithoutOrderInput } from './refundable-upsert-with-where-unique-without-order.input';
import { RefundableCreateManyOrderInputEnvelope } from './refundable-create-many-order-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RefundableWhereUniqueInput } from './refundable-where-unique.input';
import { RefundableUpdateWithWhereUniqueWithoutOrderInput } from './refundable-update-with-where-unique-without-order.input';
import { RefundableUpdateManyWithWhereWithoutOrderInput } from './refundable-update-many-with-where-without-order.input';
import { RefundableScalarWhereInput } from './refundable-scalar-where.input';

@InputType()
export class RefundableUpdateManyWithoutOrderNestedInput {

    @Field(() => [RefundableCreateWithoutOrderInput], {nullable:true})
    @Type(() => RefundableCreateWithoutOrderInput)
    create?: Array<RefundableCreateWithoutOrderInput>;

    @Field(() => [RefundableCreateOrConnectWithoutOrderInput], {nullable:true})
    @Type(() => RefundableCreateOrConnectWithoutOrderInput)
    connectOrCreate?: Array<RefundableCreateOrConnectWithoutOrderInput>;

    @Field(() => [RefundableUpsertWithWhereUniqueWithoutOrderInput], {nullable:true})
    @Type(() => RefundableUpsertWithWhereUniqueWithoutOrderInput)
    upsert?: Array<RefundableUpsertWithWhereUniqueWithoutOrderInput>;

    @Field(() => RefundableCreateManyOrderInputEnvelope, {nullable:true})
    @Type(() => RefundableCreateManyOrderInputEnvelope)
    createMany?: RefundableCreateManyOrderInputEnvelope;

    @Field(() => [RefundableWhereUniqueInput], {nullable:true})
    @Type(() => RefundableWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>>;

    @Field(() => [RefundableWhereUniqueInput], {nullable:true})
    @Type(() => RefundableWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>>;

    @Field(() => [RefundableWhereUniqueInput], {nullable:true})
    @Type(() => RefundableWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>>;

    @Field(() => [RefundableWhereUniqueInput], {nullable:true})
    @Type(() => RefundableWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>>;

    @Field(() => [RefundableUpdateWithWhereUniqueWithoutOrderInput], {nullable:true})
    @Type(() => RefundableUpdateWithWhereUniqueWithoutOrderInput)
    update?: Array<RefundableUpdateWithWhereUniqueWithoutOrderInput>;

    @Field(() => [RefundableUpdateManyWithWhereWithoutOrderInput], {nullable:true})
    @Type(() => RefundableUpdateManyWithWhereWithoutOrderInput)
    updateMany?: Array<RefundableUpdateManyWithWhereWithoutOrderInput>;

    @Field(() => [RefundableScalarWhereInput], {nullable:true})
    @Type(() => RefundableScalarWhereInput)
    deleteMany?: Array<RefundableScalarWhereInput>;
}
