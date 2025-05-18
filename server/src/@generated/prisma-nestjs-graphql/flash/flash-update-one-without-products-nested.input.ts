import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FlashCreateWithoutProductsInput } from './flash-create-without-products.input';
import { Type } from 'class-transformer';
import { FlashCreateOrConnectWithoutProductsInput } from './flash-create-or-connect-without-products.input';
import { FlashUpsertWithoutProductsInput } from './flash-upsert-without-products.input';
import { FlashWhereInput } from './flash-where.input';
import { Prisma } from '@prisma/client';
import { FlashWhereUniqueInput } from './flash-where-unique.input';
import { FlashUpdateToOneWithWhereWithoutProductsInput } from './flash-update-to-one-with-where-without-products.input';

@InputType()
export class FlashUpdateOneWithoutProductsNestedInput {

    @Field(() => FlashCreateWithoutProductsInput, {nullable:true})
    @Type(() => FlashCreateWithoutProductsInput)
    create?: FlashCreateWithoutProductsInput;

    @Field(() => FlashCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => FlashCreateOrConnectWithoutProductsInput)
    connectOrCreate?: FlashCreateOrConnectWithoutProductsInput;

    @Field(() => FlashUpsertWithoutProductsInput, {nullable:true})
    @Type(() => FlashUpsertWithoutProductsInput)
    upsert?: FlashUpsertWithoutProductsInput;

    @Field(() => FlashWhereInput, {nullable:true})
    @Type(() => FlashWhereInput)
    disconnect?: FlashWhereInput;

    @Field(() => FlashWhereInput, {nullable:true})
    @Type(() => FlashWhereInput)
    delete?: FlashWhereInput;

    @Field(() => FlashWhereUniqueInput, {nullable:true})
    @Type(() => FlashWhereUniqueInput)
    connect?: Prisma.AtLeast<FlashWhereUniqueInput, 'id'>;

    @Field(() => FlashUpdateToOneWithWhereWithoutProductsInput, {nullable:true})
    @Type(() => FlashUpdateToOneWithWhereWithoutProductsInput)
    update?: FlashUpdateToOneWithWhereWithoutProductsInput;
}
