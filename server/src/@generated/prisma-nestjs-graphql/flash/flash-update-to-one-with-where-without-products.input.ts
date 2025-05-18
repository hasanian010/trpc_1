import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FlashWhereInput } from './flash-where.input';
import { Type } from 'class-transformer';
import { FlashUpdateWithoutProductsInput } from './flash-update-without-products.input';

@InputType()
export class FlashUpdateToOneWithWhereWithoutProductsInput {

    @Field(() => FlashWhereInput, {nullable:true})
    @Type(() => FlashWhereInput)
    where?: FlashWhereInput;

    @Field(() => FlashUpdateWithoutProductsInput, {nullable:false})
    @Type(() => FlashUpdateWithoutProductsInput)
    data!: FlashUpdateWithoutProductsInput;
}
