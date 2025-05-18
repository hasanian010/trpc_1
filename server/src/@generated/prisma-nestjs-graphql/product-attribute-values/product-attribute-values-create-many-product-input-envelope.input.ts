import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeValuesCreateManyProductInput } from './product-attribute-values-create-many-product.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductAttributeValuesCreateManyProductInputEnvelope {

    @Field(() => [ProductAttributeValuesCreateManyProductInput], {nullable:false})
    @Type(() => ProductAttributeValuesCreateManyProductInput)
    data!: Array<ProductAttributeValuesCreateManyProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
