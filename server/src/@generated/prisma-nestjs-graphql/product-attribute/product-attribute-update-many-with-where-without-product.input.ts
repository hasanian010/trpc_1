import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeScalarWhereInput } from './product-attribute-scalar-where.input';
import { Type } from 'class-transformer';
import { ProductAttributeUpdateManyMutationInput } from './product-attribute-update-many-mutation.input';

@InputType()
export class ProductAttributeUpdateManyWithWhereWithoutProductInput {

    @Field(() => ProductAttributeScalarWhereInput, {nullable:false})
    @Type(() => ProductAttributeScalarWhereInput)
    where!: ProductAttributeScalarWhereInput;

    @Field(() => ProductAttributeUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductAttributeUpdateManyMutationInput)
    data!: ProductAttributeUpdateManyMutationInput;
}
