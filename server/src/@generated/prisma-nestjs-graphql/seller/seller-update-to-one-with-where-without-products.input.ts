import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerWhereInput } from './seller-where.input';
import { Type } from 'class-transformer';
import { SellerUpdateWithoutProductsInput } from './seller-update-without-products.input';

@InputType()
export class SellerUpdateToOneWithWhereWithoutProductsInput {

    @Field(() => SellerWhereInput, {nullable:true})
    @Type(() => SellerWhereInput)
    where?: SellerWhereInput;

    @Field(() => SellerUpdateWithoutProductsInput, {nullable:false})
    @Type(() => SellerUpdateWithoutProductsInput)
    data!: SellerUpdateWithoutProductsInput;
}
