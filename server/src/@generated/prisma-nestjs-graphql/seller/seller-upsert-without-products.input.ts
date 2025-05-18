import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerUpdateWithoutProductsInput } from './seller-update-without-products.input';
import { Type } from 'class-transformer';
import { SellerCreateWithoutProductsInput } from './seller-create-without-products.input';
import { SellerWhereInput } from './seller-where.input';

@InputType()
export class SellerUpsertWithoutProductsInput {

    @Field(() => SellerUpdateWithoutProductsInput, {nullable:false})
    @Type(() => SellerUpdateWithoutProductsInput)
    update!: SellerUpdateWithoutProductsInput;

    @Field(() => SellerCreateWithoutProductsInput, {nullable:false})
    @Type(() => SellerCreateWithoutProductsInput)
    create!: SellerCreateWithoutProductsInput;

    @Field(() => SellerWhereInput, {nullable:true})
    @Type(() => SellerWhereInput)
    where?: SellerWhereInput;
}
