import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ValuesUncheckedCreateNestedManyWithoutAttributeInput } from '../values/values-unchecked-create-nested-many-without-attribute.input';
import { ProductAttributeUncheckedCreateNestedManyWithoutAttributesInput } from '../product-attribute/product-attribute-unchecked-create-nested-many-without-attributes.input';

@InputType()
export class AttributeUncheckedCreateInput {

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

    @Field(() => ProductAttributeUncheckedCreateNestedManyWithoutAttributesInput, {nullable:true})
    productAttributes?: ProductAttributeUncheckedCreateNestedManyWithoutAttributesInput;
}
