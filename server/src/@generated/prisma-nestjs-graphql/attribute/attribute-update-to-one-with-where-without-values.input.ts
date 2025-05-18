import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttributeWhereInput } from './attribute-where.input';
import { Type } from 'class-transformer';
import { AttributeUpdateWithoutValuesInput } from './attribute-update-without-values.input';

@InputType()
export class AttributeUpdateToOneWithWhereWithoutValuesInput {

    @Field(() => AttributeWhereInput, {nullable:true})
    @Type(() => AttributeWhereInput)
    where?: AttributeWhereInput;

    @Field(() => AttributeUpdateWithoutValuesInput, {nullable:false})
    @Type(() => AttributeUpdateWithoutValuesInput)
    data!: AttributeUpdateWithoutValuesInput;
}
