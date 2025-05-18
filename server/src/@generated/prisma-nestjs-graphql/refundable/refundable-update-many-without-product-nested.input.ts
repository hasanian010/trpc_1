import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundableCreateWithoutProductInput } from './refundable-create-without-product.input';
import { Type } from 'class-transformer';
import { RefundableCreateOrConnectWithoutProductInput } from './refundable-create-or-connect-without-product.input';
import { RefundableUpsertWithWhereUniqueWithoutProductInput } from './refundable-upsert-with-where-unique-without-product.input';
import { RefundableCreateManyProductInputEnvelope } from './refundable-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RefundableWhereUniqueInput } from './refundable-where-unique.input';
import { RefundableUpdateWithWhereUniqueWithoutProductInput } from './refundable-update-with-where-unique-without-product.input';
import { RefundableUpdateManyWithWhereWithoutProductInput } from './refundable-update-many-with-where-without-product.input';
import { RefundableScalarWhereInput } from './refundable-scalar-where.input';

@InputType()
export class RefundableUpdateManyWithoutProductNestedInput {

    @Field(() => [RefundableCreateWithoutProductInput], {nullable:true})
    @Type(() => RefundableCreateWithoutProductInput)
    create?: Array<RefundableCreateWithoutProductInput>;

    @Field(() => [RefundableCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => RefundableCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<RefundableCreateOrConnectWithoutProductInput>;

    @Field(() => [RefundableUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => RefundableUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<RefundableUpsertWithWhereUniqueWithoutProductInput>;

    @Field(() => RefundableCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => RefundableCreateManyProductInputEnvelope)
    createMany?: RefundableCreateManyProductInputEnvelope;

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

    @Field(() => [RefundableUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => RefundableUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<RefundableUpdateWithWhereUniqueWithoutProductInput>;

    @Field(() => [RefundableUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => RefundableUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<RefundableUpdateManyWithWhereWithoutProductInput>;

    @Field(() => [RefundableScalarWhereInput], {nullable:true})
    @Type(() => RefundableScalarWhereInput)
    deleteMany?: Array<RefundableScalarWhereInput>;
}
