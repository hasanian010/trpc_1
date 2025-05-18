import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundableCreateWithoutVariationsInput } from './refundable-create-without-variations.input';
import { Type } from 'class-transformer';
import { RefundableCreateOrConnectWithoutVariationsInput } from './refundable-create-or-connect-without-variations.input';
import { RefundableUpsertWithWhereUniqueWithoutVariationsInput } from './refundable-upsert-with-where-unique-without-variations.input';
import { Prisma } from '@prisma/client';
import { RefundableWhereUniqueInput } from './refundable-where-unique.input';
import { RefundableUpdateWithWhereUniqueWithoutVariationsInput } from './refundable-update-with-where-unique-without-variations.input';
import { RefundableUpdateManyWithWhereWithoutVariationsInput } from './refundable-update-many-with-where-without-variations.input';
import { RefundableScalarWhereInput } from './refundable-scalar-where.input';

@InputType()
export class RefundableUpdateManyWithoutVariationsNestedInput {

    @Field(() => [RefundableCreateWithoutVariationsInput], {nullable:true})
    @Type(() => RefundableCreateWithoutVariationsInput)
    create?: Array<RefundableCreateWithoutVariationsInput>;

    @Field(() => [RefundableCreateOrConnectWithoutVariationsInput], {nullable:true})
    @Type(() => RefundableCreateOrConnectWithoutVariationsInput)
    connectOrCreate?: Array<RefundableCreateOrConnectWithoutVariationsInput>;

    @Field(() => [RefundableUpsertWithWhereUniqueWithoutVariationsInput], {nullable:true})
    @Type(() => RefundableUpsertWithWhereUniqueWithoutVariationsInput)
    upsert?: Array<RefundableUpsertWithWhereUniqueWithoutVariationsInput>;

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

    @Field(() => [RefundableUpdateWithWhereUniqueWithoutVariationsInput], {nullable:true})
    @Type(() => RefundableUpdateWithWhereUniqueWithoutVariationsInput)
    update?: Array<RefundableUpdateWithWhereUniqueWithoutVariationsInput>;

    @Field(() => [RefundableUpdateManyWithWhereWithoutVariationsInput], {nullable:true})
    @Type(() => RefundableUpdateManyWithWhereWithoutVariationsInput)
    updateMany?: Array<RefundableUpdateManyWithWhereWithoutVariationsInput>;

    @Field(() => [RefundableScalarWhereInput], {nullable:true})
    @Type(() => RefundableScalarWhereInput)
    deleteMany?: Array<RefundableScalarWhereInput>;
}
