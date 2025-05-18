import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeValuesScalarWhereInput } from './product-attribute-values-scalar-where.input';
import { Type } from 'class-transformer';
import { ProductAttributeValuesUpdateManyMutationInput } from './product-attribute-values-update-many-mutation.input';

@InputType()
export class ProductAttributeValuesUpdateManyWithWhereWithoutProductAttributeInput {

    @Field(() => ProductAttributeValuesScalarWhereInput, {nullable:false})
    @Type(() => ProductAttributeValuesScalarWhereInput)
    where!: ProductAttributeValuesScalarWhereInput;

    @Field(() => ProductAttributeValuesUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductAttributeValuesUpdateManyMutationInput)
    data!: ProductAttributeValuesUpdateManyMutationInput;
}
