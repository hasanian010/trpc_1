import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PreorderCreateproductImageInput } from './preorder-createproduct-image.input';
import { PreorderCreateproductUrlInput } from './preorder-createproduct-url.input';

@InputType()
export class PreorderCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => PreorderCreateproductImageInput, {nullable:true})
    productImage?: PreorderCreateproductImageInput;

    @Field(() => PreorderCreateproductUrlInput, {nullable:true})
    productUrl?: PreorderCreateproductUrlInput;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
