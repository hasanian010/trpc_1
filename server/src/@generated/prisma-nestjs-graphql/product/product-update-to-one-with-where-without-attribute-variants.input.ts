import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutAttributeVariantsInput } from './product-update-without-attribute-variants.input';

@InputType()
export class ProductUpdateToOneWithWhereWithoutAttributeVariantsInput {

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;

    @Field(() => ProductUpdateWithoutAttributeVariantsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutAttributeVariantsInput)
    data!: ProductUpdateWithoutAttributeVariantsInput;
}
