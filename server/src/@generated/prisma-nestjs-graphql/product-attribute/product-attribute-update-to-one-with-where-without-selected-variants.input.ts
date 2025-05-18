import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeWhereInput } from './product-attribute-where.input';
import { Type } from 'class-transformer';
import { ProductAttributeUpdateWithoutSelectedVariantsInput } from './product-attribute-update-without-selected-variants.input';

@InputType()
export class ProductAttributeUpdateToOneWithWhereWithoutSelectedVariantsInput {

    @Field(() => ProductAttributeWhereInput, {nullable:true})
    @Type(() => ProductAttributeWhereInput)
    where?: ProductAttributeWhereInput;

    @Field(() => ProductAttributeUpdateWithoutSelectedVariantsInput, {nullable:false})
    @Type(() => ProductAttributeUpdateWithoutSelectedVariantsInput)
    data!: ProductAttributeUpdateWithoutSelectedVariantsInput;
}
