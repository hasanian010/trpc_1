import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedOneWithoutSpecificationsInput } from '../product/product-create-nested-one-without-specifications.input';

@InputType()
export class ProductSpecificationCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    value?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductCreateNestedOneWithoutSpecificationsInput, {nullable:false})
    product!: ProductCreateNestedOneWithoutSpecificationsInput;
}
