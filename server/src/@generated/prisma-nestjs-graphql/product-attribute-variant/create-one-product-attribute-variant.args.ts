import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductAttributeVariantCreateInput } from './product-attribute-variant-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProductAttributeVariantArgs {

    @Field(() => ProductAttributeVariantCreateInput, {nullable:false})
    @Type(() => ProductAttributeVariantCreateInput)
    data!: ProductAttributeVariantCreateInput;
}
