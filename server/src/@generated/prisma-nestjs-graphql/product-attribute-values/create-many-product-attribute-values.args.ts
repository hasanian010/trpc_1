import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductAttributeValuesCreateManyInput } from './product-attribute-values-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProductAttributeValuesArgs {

    @Field(() => [ProductAttributeValuesCreateManyInput], {nullable:false})
    @Type(() => ProductAttributeValuesCreateManyInput)
    data!: Array<ProductAttributeValuesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
