import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeUpdateWithoutAttributeValuesInput } from './product-attribute-update-without-attribute-values.input';
import { Type } from 'class-transformer';
import { ProductAttributeCreateWithoutAttributeValuesInput } from './product-attribute-create-without-attribute-values.input';
import { ProductAttributeWhereInput } from './product-attribute-where.input';

@InputType()
export class ProductAttributeUpsertWithoutAttributeValuesInput {

    @Field(() => ProductAttributeUpdateWithoutAttributeValuesInput, {nullable:false})
    @Type(() => ProductAttributeUpdateWithoutAttributeValuesInput)
    update!: ProductAttributeUpdateWithoutAttributeValuesInput;

    @Field(() => ProductAttributeCreateWithoutAttributeValuesInput, {nullable:false})
    @Type(() => ProductAttributeCreateWithoutAttributeValuesInput)
    create!: ProductAttributeCreateWithoutAttributeValuesInput;

    @Field(() => ProductAttributeWhereInput, {nullable:true})
    @Type(() => ProductAttributeWhereInput)
    where?: ProductAttributeWhereInput;
}
