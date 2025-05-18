import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AttributeWhereUniqueInput } from './attribute-where-unique.input';
import { Type } from 'class-transformer';
import { AttributeUpdateWithoutProductAttributesInput } from './attribute-update-without-product-attributes.input';
import { AttributeCreateWithoutProductAttributesInput } from './attribute-create-without-product-attributes.input';

@InputType()
export class AttributeUpsertWithWhereUniqueWithoutProductAttributesInput {

    @Field(() => AttributeWhereUniqueInput, {nullable:false})
    @Type(() => AttributeWhereUniqueInput)
    where!: Prisma.AtLeast<AttributeWhereUniqueInput, 'id'>;

    @Field(() => AttributeUpdateWithoutProductAttributesInput, {nullable:false})
    @Type(() => AttributeUpdateWithoutProductAttributesInput)
    update!: AttributeUpdateWithoutProductAttributesInput;

    @Field(() => AttributeCreateWithoutProductAttributesInput, {nullable:false})
    @Type(() => AttributeCreateWithoutProductAttributesInput)
    create!: AttributeCreateWithoutProductAttributesInput;
}
