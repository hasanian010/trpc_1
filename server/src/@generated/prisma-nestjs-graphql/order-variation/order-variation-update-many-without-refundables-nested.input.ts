import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderVariationCreateWithoutRefundablesInput } from './order-variation-create-without-refundables.input';
import { Type } from 'class-transformer';
import { OrderVariationCreateOrConnectWithoutRefundablesInput } from './order-variation-create-or-connect-without-refundables.input';
import { OrderVariationUpsertWithWhereUniqueWithoutRefundablesInput } from './order-variation-upsert-with-where-unique-without-refundables.input';
import { Prisma } from '@prisma/client';
import { OrderVariationWhereUniqueInput } from './order-variation-where-unique.input';
import { OrderVariationUpdateWithWhereUniqueWithoutRefundablesInput } from './order-variation-update-with-where-unique-without-refundables.input';
import { OrderVariationUpdateManyWithWhereWithoutRefundablesInput } from './order-variation-update-many-with-where-without-refundables.input';
import { OrderVariationScalarWhereInput } from './order-variation-scalar-where.input';

@InputType()
export class OrderVariationUpdateManyWithoutRefundablesNestedInput {

    @Field(() => [OrderVariationCreateWithoutRefundablesInput], {nullable:true})
    @Type(() => OrderVariationCreateWithoutRefundablesInput)
    create?: Array<OrderVariationCreateWithoutRefundablesInput>;

    @Field(() => [OrderVariationCreateOrConnectWithoutRefundablesInput], {nullable:true})
    @Type(() => OrderVariationCreateOrConnectWithoutRefundablesInput)
    connectOrCreate?: Array<OrderVariationCreateOrConnectWithoutRefundablesInput>;

    @Field(() => [OrderVariationUpsertWithWhereUniqueWithoutRefundablesInput], {nullable:true})
    @Type(() => OrderVariationUpsertWithWhereUniqueWithoutRefundablesInput)
    upsert?: Array<OrderVariationUpsertWithWhereUniqueWithoutRefundablesInput>;

    @Field(() => [OrderVariationWhereUniqueInput], {nullable:true})
    @Type(() => OrderVariationWhereUniqueInput)
    set?: Array<Prisma.AtLeast<OrderVariationWhereUniqueInput, 'id'>>;

    @Field(() => [OrderVariationWhereUniqueInput], {nullable:true})
    @Type(() => OrderVariationWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<OrderVariationWhereUniqueInput, 'id'>>;

    @Field(() => [OrderVariationWhereUniqueInput], {nullable:true})
    @Type(() => OrderVariationWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<OrderVariationWhereUniqueInput, 'id'>>;

    @Field(() => [OrderVariationWhereUniqueInput], {nullable:true})
    @Type(() => OrderVariationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderVariationWhereUniqueInput, 'id'>>;

    @Field(() => [OrderVariationUpdateWithWhereUniqueWithoutRefundablesInput], {nullable:true})
    @Type(() => OrderVariationUpdateWithWhereUniqueWithoutRefundablesInput)
    update?: Array<OrderVariationUpdateWithWhereUniqueWithoutRefundablesInput>;

    @Field(() => [OrderVariationUpdateManyWithWhereWithoutRefundablesInput], {nullable:true})
    @Type(() => OrderVariationUpdateManyWithWhereWithoutRefundablesInput)
    updateMany?: Array<OrderVariationUpdateManyWithWhereWithoutRefundablesInput>;

    @Field(() => [OrderVariationScalarWhereInput], {nullable:true})
    @Type(() => OrderVariationScalarWhereInput)
    deleteMany?: Array<OrderVariationScalarWhereInput>;
}
