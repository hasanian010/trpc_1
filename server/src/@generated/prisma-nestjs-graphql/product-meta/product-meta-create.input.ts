import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductMetaCreatemetaTagsInput } from './product-meta-createmeta-tags.input';
import { ProductCreateNestedOneWithoutMetaInput } from '../product/product-create-nested-one-without-meta.input';

@InputType()
export class ProductMetaCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => ProductMetaCreatemetaTagsInput, {nullable:true})
    metaTags?: ProductMetaCreatemetaTagsInput;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductCreateNestedOneWithoutMetaInput, {nullable:false})
    product!: ProductCreateNestedOneWithoutMetaInput;
}
