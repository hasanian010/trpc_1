import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeVariantCreateManyProductInput } from './product-attribute-variant-create-many-product.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductAttributeVariantCreateManyProductInputEnvelope {

    @Field(() => [ProductAttributeVariantCreateManyProductInput], {nullable:false})
    @Type(() => ProductAttributeVariantCreateManyProductInput)
    data!: Array<ProductAttributeVariantCreateManyProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
