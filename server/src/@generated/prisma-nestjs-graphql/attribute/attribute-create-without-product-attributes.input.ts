import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ValuesCreateNestedManyWithoutAttributeInput } from '../values/values-create-nested-many-without-attribute.input';

@InputType()
export class AttributeCreateWithoutProductAttributesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ValuesCreateNestedManyWithoutAttributeInput, {nullable:true})
    values?: ValuesCreateNestedManyWithoutAttributeInput;
}
