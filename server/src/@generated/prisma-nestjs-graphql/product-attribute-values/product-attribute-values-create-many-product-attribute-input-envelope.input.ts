import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeValuesCreateManyProductAttributeInput } from './product-attribute-values-create-many-product-attribute.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductAttributeValuesCreateManyProductAttributeInputEnvelope {

    @Field(() => [ProductAttributeValuesCreateManyProductAttributeInput], {nullable:false})
    @Type(() => ProductAttributeValuesCreateManyProductAttributeInput)
    data!: Array<ProductAttributeValuesCreateManyProductAttributeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
