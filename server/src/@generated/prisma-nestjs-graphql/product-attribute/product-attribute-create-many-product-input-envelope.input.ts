import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeCreateManyProductInput } from './product-attribute-create-many-product.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductAttributeCreateManyProductInputEnvelope {

    @Field(() => [ProductAttributeCreateManyProductInput], {nullable:false})
    @Type(() => ProductAttributeCreateManyProductInput)
    data!: Array<ProductAttributeCreateManyProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
