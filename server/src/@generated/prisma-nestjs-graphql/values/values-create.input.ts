import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttributeCreateNestedOneWithoutValuesInput } from '../attribute/attribute-create-nested-one-without-values.input';

@InputType()
export class ValuesCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    value!: string;

    @Field(() => String, {nullable:true})
    meta?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AttributeCreateNestedOneWithoutValuesInput, {nullable:false})
    attribute!: AttributeCreateNestedOneWithoutValuesInput;
}
