import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerWhereInput } from './seller-where.input';

@InputType()
export class SellerListRelationFilter {

    @Field(() => SellerWhereInput, {nullable:true})
    every?: SellerWhereInput;

    @Field(() => SellerWhereInput, {nullable:true})
    some?: SellerWhereInput;

    @Field(() => SellerWhereInput, {nullable:true})
    none?: SellerWhereInput;
}
