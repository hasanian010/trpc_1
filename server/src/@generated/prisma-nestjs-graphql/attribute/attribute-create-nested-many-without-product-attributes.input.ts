import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttributeCreateWithoutProductAttributesInput } from './attribute-create-without-product-attributes.input';
import { Type } from 'class-transformer';
import { AttributeCreateOrConnectWithoutProductAttributesInput } from './attribute-create-or-connect-without-product-attributes.input';
import { Prisma } from '@prisma/client';
import { AttributeWhereUniqueInput } from './attribute-where-unique.input';

@InputType()
export class AttributeCreateNestedManyWithoutProductAttributesInput {

    @Field(() => [AttributeCreateWithoutProductAttributesInput], {nullable:true})
    @Type(() => AttributeCreateWithoutProductAttributesInput)
    create?: Array<AttributeCreateWithoutProductAttributesInput>;

    @Field(() => [AttributeCreateOrConnectWithoutProductAttributesInput], {nullable:true})
    @Type(() => AttributeCreateOrConnectWithoutProductAttributesInput)
    connectOrCreate?: Array<AttributeCreateOrConnectWithoutProductAttributesInput>;

    @Field(() => [AttributeWhereUniqueInput], {nullable:true})
    @Type(() => AttributeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AttributeWhereUniqueInput, 'id'>>;
}
