import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductAttributeValuesCreateInput } from './product-attribute-values-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProductAttributeValuesArgs {

    @Field(() => ProductAttributeValuesCreateInput, {nullable:false})
    @Type(() => ProductAttributeValuesCreateInput)
    data!: ProductAttributeValuesCreateInput;
}
