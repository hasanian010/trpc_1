import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeVariantCreateselectedInput } from './product-attribute-variant-createselected.input';

@InputType()
export class ProductAttributeVariantCreateManyProductInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ProductAttributeVariantCreateselectedInput, {nullable:true})
    selected?: ProductAttributeVariantCreateselectedInput;

    @Field(() => String, {nullable:true})
    productAttributeId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
