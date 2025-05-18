import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FlashCreateWithoutProductsInput } from './flash-create-without-products.input';
import { Type } from 'class-transformer';
import { FlashCreateOrConnectWithoutProductsInput } from './flash-create-or-connect-without-products.input';
import { Prisma } from '@prisma/client';
import { FlashWhereUniqueInput } from './flash-where-unique.input';

@InputType()
export class FlashCreateNestedOneWithoutProductsInput {

    @Field(() => FlashCreateWithoutProductsInput, {nullable:true})
    @Type(() => FlashCreateWithoutProductsInput)
    create?: FlashCreateWithoutProductsInput;

    @Field(() => FlashCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => FlashCreateOrConnectWithoutProductsInput)
    connectOrCreate?: FlashCreateOrConnectWithoutProductsInput;

    @Field(() => FlashWhereUniqueInput, {nullable:true})
    @Type(() => FlashWhereUniqueInput)
    connect?: Prisma.AtLeast<FlashWhereUniqueInput, 'id'>;
}
