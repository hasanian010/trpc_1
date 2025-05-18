import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeUpdateWithoutSelectedVariantsInput } from './product-attribute-update-without-selected-variants.input';
import { Type } from 'class-transformer';
import { ProductAttributeCreateWithoutSelectedVariantsInput } from './product-attribute-create-without-selected-variants.input';
import { ProductAttributeWhereInput } from './product-attribute-where.input';

@InputType()
export class ProductAttributeUpsertWithoutSelectedVariantsInput {

    @Field(() => ProductAttributeUpdateWithoutSelectedVariantsInput, {nullable:false})
    @Type(() => ProductAttributeUpdateWithoutSelectedVariantsInput)
    update!: ProductAttributeUpdateWithoutSelectedVariantsInput;

    @Field(() => ProductAttributeCreateWithoutSelectedVariantsInput, {nullable:false})
    @Type(() => ProductAttributeCreateWithoutSelectedVariantsInput)
    create!: ProductAttributeCreateWithoutSelectedVariantsInput;

    @Field(() => ProductAttributeWhereInput, {nullable:true})
    @Type(() => ProductAttributeWhereInput)
    where?: ProductAttributeWhereInput;
}
