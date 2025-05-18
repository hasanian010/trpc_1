import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ValuesUncheckedCreateNestedManyWithoutAttributeInput } from '../values/values-unchecked-create-nested-many-without-attribute.input';

@InputType()
export class AttributeUncheckedCreateWithoutProductAttributesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ValuesUncheckedCreateNestedManyWithoutAttributeInput, {nullable:true})
    values?: ValuesUncheckedCreateNestedManyWithoutAttributeInput;
}
