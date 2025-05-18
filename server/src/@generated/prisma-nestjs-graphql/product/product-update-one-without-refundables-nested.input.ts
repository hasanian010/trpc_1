import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutRefundablesInput } from './product-create-without-refundables.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutRefundablesInput } from './product-create-or-connect-without-refundables.input';
import { ProductUpsertWithoutRefundablesInput } from './product-upsert-without-refundables.input';
import { ProductWhereInput } from './product-where.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateToOneWithWhereWithoutRefundablesInput } from './product-update-to-one-with-where-without-refundables.input';

@InputType()
export class ProductUpdateOneWithoutRefundablesNestedInput {

    @Field(() => ProductCreateWithoutRefundablesInput, {nullable:true})
    @Type(() => ProductCreateWithoutRefundablesInput)
    create?: ProductCreateWithoutRefundablesInput;

    @Field(() => ProductCreateOrConnectWithoutRefundablesInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutRefundablesInput)
    connectOrCreate?: ProductCreateOrConnectWithoutRefundablesInput;

    @Field(() => ProductUpsertWithoutRefundablesInput, {nullable:true})
    @Type(() => ProductUpsertWithoutRefundablesInput)
    upsert?: ProductUpsertWithoutRefundablesInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    disconnect?: ProductWhereInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    delete?: ProductWhereInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateToOneWithWhereWithoutRefundablesInput, {nullable:true})
    @Type(() => ProductUpdateToOneWithWhereWithoutRefundablesInput)
    update?: ProductUpdateToOneWithWhereWithoutRefundablesInput;
}
