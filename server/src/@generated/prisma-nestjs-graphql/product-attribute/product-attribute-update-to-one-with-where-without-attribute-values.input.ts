import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeWhereInput } from './product-attribute-where.input';
import { Type } from 'class-transformer';
import { ProductAttributeUpdateWithoutAttributeValuesInput } from './product-attribute-update-without-attribute-values.input';

@InputType()
export class ProductAttributeUpdateToOneWithWhereWithoutAttributeValuesInput {

    @Field(() => ProductAttributeWhereInput, {nullable:true})
    @Type(() => ProductAttributeWhereInput)
    where?: ProductAttributeWhereInput;

    @Field(() => ProductAttributeUpdateWithoutAttributeValuesInput, {nullable:false})
    @Type(() => ProductAttributeUpdateWithoutAttributeValuesInput)
    data!: ProductAttributeUpdateWithoutAttributeValuesInput;
}
