import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductAttributeVariantCreateManyInput } from './product-attribute-variant-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProductAttributeVariantArgs {

    @Field(() => [ProductAttributeVariantCreateManyInput], {nullable:false})
    @Type(() => ProductAttributeVariantCreateManyInput)
    data!: Array<ProductAttributeVariantCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
