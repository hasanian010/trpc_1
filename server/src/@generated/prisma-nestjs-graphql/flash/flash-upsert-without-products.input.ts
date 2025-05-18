import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FlashUpdateWithoutProductsInput } from './flash-update-without-products.input';
import { Type } from 'class-transformer';
import { FlashCreateWithoutProductsInput } from './flash-create-without-products.input';
import { FlashWhereInput } from './flash-where.input';

@InputType()
export class FlashUpsertWithoutProductsInput {

    @Field(() => FlashUpdateWithoutProductsInput, {nullable:false})
    @Type(() => FlashUpdateWithoutProductsInput)
    update!: FlashUpdateWithoutProductsInput;

    @Field(() => FlashCreateWithoutProductsInput, {nullable:false})
    @Type(() => FlashCreateWithoutProductsInput)
    create!: FlashCreateWithoutProductsInput;

    @Field(() => FlashWhereInput, {nullable:true})
    @Type(() => FlashWhereInput)
    where?: FlashWhereInput;
}
