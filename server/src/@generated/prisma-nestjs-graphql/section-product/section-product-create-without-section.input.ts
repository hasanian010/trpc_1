import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedOneWithoutSectionProductsInput } from '../product/product-create-nested-one-without-section-products.input';

@InputType()
export class SectionProductCreateWithoutSectionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductCreateNestedOneWithoutSectionProductsInput, {nullable:false})
    product!: ProductCreateNestedOneWithoutSectionProductsInput;
}
