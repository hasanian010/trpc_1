import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttributeUpdateWithoutValuesInput } from './attribute-update-without-values.input';
import { Type } from 'class-transformer';
import { AttributeCreateWithoutValuesInput } from './attribute-create-without-values.input';
import { AttributeWhereInput } from './attribute-where.input';

@InputType()
export class AttributeUpsertWithoutValuesInput {

    @Field(() => AttributeUpdateWithoutValuesInput, {nullable:false})
    @Type(() => AttributeUpdateWithoutValuesInput)
    update!: AttributeUpdateWithoutValuesInput;

    @Field(() => AttributeCreateWithoutValuesInput, {nullable:false})
    @Type(() => AttributeCreateWithoutValuesInput)
    create!: AttributeCreateWithoutValuesInput;

    @Field(() => AttributeWhereInput, {nullable:true})
    @Type(() => AttributeWhereInput)
    where?: AttributeWhereInput;
}
