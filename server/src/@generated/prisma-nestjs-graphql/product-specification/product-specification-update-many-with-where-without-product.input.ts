import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductSpecificationScalarWhereInput } from './product-specification-scalar-where.input';
import { Type } from 'class-transformer';
import { ProductSpecificationUpdateManyMutationInput } from './product-specification-update-many-mutation.input';

@InputType()
export class ProductSpecificationUpdateManyWithWhereWithoutProductInput {

    @Field(() => ProductSpecificationScalarWhereInput, {nullable:false})
    @Type(() => ProductSpecificationScalarWhereInput)
    where!: ProductSpecificationScalarWhereInput;

    @Field(() => ProductSpecificationUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductSpecificationUpdateManyMutationInput)
    data!: ProductSpecificationUpdateManyMutationInput;
}
