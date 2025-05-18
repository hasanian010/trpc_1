import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FlashWhereUniqueInput } from './flash-where-unique.input';
import { Type } from 'class-transformer';
import { FlashCreateWithoutProductsInput } from './flash-create-without-products.input';

@InputType()
export class FlashCreateOrConnectWithoutProductsInput {

    @Field(() => FlashWhereUniqueInput, {nullable:false})
    @Type(() => FlashWhereUniqueInput)
    where!: Prisma.AtLeast<FlashWhereUniqueInput, 'id'>;

    @Field(() => FlashCreateWithoutProductsInput, {nullable:false})
    @Type(() => FlashCreateWithoutProductsInput)
    create!: FlashCreateWithoutProductsInput;
}
