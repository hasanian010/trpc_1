import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerWhereInput } from './seller-where.input';

@InputType()
export class SellerScalarRelationFilter {

    @Field(() => SellerWhereInput, {nullable:true})
    is?: SellerWhereInput;

    @Field(() => SellerWhereInput, {nullable:true})
    isNot?: SellerWhereInput;
}
