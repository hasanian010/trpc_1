import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerWhereInput } from './seller-where.input';
import { Type } from 'class-transformer';
import { SellerUpdateWithoutOrderSellersInput } from './seller-update-without-order-sellers.input';

@InputType()
export class SellerUpdateToOneWithWhereWithoutOrderSellersInput {

    @Field(() => SellerWhereInput, {nullable:true})
    @Type(() => SellerWhereInput)
    where?: SellerWhereInput;

    @Field(() => SellerUpdateWithoutOrderSellersInput, {nullable:false})
    @Type(() => SellerUpdateWithoutOrderSellersInput)
    data!: SellerUpdateWithoutOrderSellersInput;
}
