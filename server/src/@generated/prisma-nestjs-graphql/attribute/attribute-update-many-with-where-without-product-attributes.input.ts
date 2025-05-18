import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttributeScalarWhereInput } from './attribute-scalar-where.input';
import { Type } from 'class-transformer';
import { AttributeUpdateManyMutationInput } from './attribute-update-many-mutation.input';

@InputType()
export class AttributeUpdateManyWithWhereWithoutProductAttributesInput {

    @Field(() => AttributeScalarWhereInput, {nullable:false})
    @Type(() => AttributeScalarWhereInput)
    where!: AttributeScalarWhereInput;

    @Field(() => AttributeUpdateManyMutationInput, {nullable:false})
    @Type(() => AttributeUpdateManyMutationInput)
    data!: AttributeUpdateManyMutationInput;
}
