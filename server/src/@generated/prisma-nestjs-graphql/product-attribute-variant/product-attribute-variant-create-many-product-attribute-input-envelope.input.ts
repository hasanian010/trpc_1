import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeVariantCreateManyProductAttributeInput } from './product-attribute-variant-create-many-product-attribute.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductAttributeVariantCreateManyProductAttributeInputEnvelope {

    @Field(() => [ProductAttributeVariantCreateManyProductAttributeInput], {nullable:false})
    @Type(() => ProductAttributeVariantCreateManyProductAttributeInput)
    data!: Array<ProductAttributeVariantCreateManyProductAttributeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
