import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeVariantScalarWhereInput } from './product-attribute-variant-scalar-where.input';
import { Type } from 'class-transformer';
import { ProductAttributeVariantUpdateManyMutationInput } from './product-attribute-variant-update-many-mutation.input';

@InputType()
export class ProductAttributeVariantUpdateManyWithWhereWithoutProductAttributeInput {

    @Field(() => ProductAttributeVariantScalarWhereInput, {nullable:false})
    @Type(() => ProductAttributeVariantScalarWhereInput)
    where!: ProductAttributeVariantScalarWhereInput;

    @Field(() => ProductAttributeVariantUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductAttributeVariantUpdateManyMutationInput)
    data!: ProductAttributeVariantUpdateManyMutationInput;
}
