import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerUpdateWithoutOrderSellersInput } from './seller-update-without-order-sellers.input';
import { Type } from 'class-transformer';
import { SellerCreateWithoutOrderSellersInput } from './seller-create-without-order-sellers.input';
import { SellerWhereInput } from './seller-where.input';

@InputType()
export class SellerUpsertWithoutOrderSellersInput {

    @Field(() => SellerUpdateWithoutOrderSellersInput, {nullable:false})
    @Type(() => SellerUpdateWithoutOrderSellersInput)
    update!: SellerUpdateWithoutOrderSellersInput;

    @Field(() => SellerCreateWithoutOrderSellersInput, {nullable:false})
    @Type(() => SellerCreateWithoutOrderSellersInput)
    create!: SellerCreateWithoutOrderSellersInput;

    @Field(() => SellerWhereInput, {nullable:true})
    @Type(() => SellerWhereInput)
    where?: SellerWhereInput;
}
