import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ValuesScalarWhereInput } from './values-scalar-where.input';
import { Type } from 'class-transformer';
import { ValuesUpdateManyMutationInput } from './values-update-many-mutation.input';

@InputType()
export class ValuesUpdateManyWithWhereWithoutAttributeInput {

    @Field(() => ValuesScalarWhereInput, {nullable:false})
    @Type(() => ValuesScalarWhereInput)
    where!: ValuesScalarWhereInput;

    @Field(() => ValuesUpdateManyMutationInput, {nullable:false})
    @Type(() => ValuesUpdateManyMutationInput)
    data!: ValuesUpdateManyMutationInput;
}
