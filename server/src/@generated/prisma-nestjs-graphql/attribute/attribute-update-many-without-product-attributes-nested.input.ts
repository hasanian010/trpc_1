import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttributeCreateWithoutProductAttributesInput } from './attribute-create-without-product-attributes.input';
import { Type } from 'class-transformer';
import { AttributeCreateOrConnectWithoutProductAttributesInput } from './attribute-create-or-connect-without-product-attributes.input';
import { AttributeUpsertWithWhereUniqueWithoutProductAttributesInput } from './attribute-upsert-with-where-unique-without-product-attributes.input';
import { Prisma } from '@prisma/client';
import { AttributeWhereUniqueInput } from './attribute-where-unique.input';
import { AttributeUpdateWithWhereUniqueWithoutProductAttributesInput } from './attribute-update-with-where-unique-without-product-attributes.input';
import { AttributeUpdateManyWithWhereWithoutProductAttributesInput } from './attribute-update-many-with-where-without-product-attributes.input';
import { AttributeScalarWhereInput } from './attribute-scalar-where.input';

@InputType()
export class AttributeUpdateManyWithoutProductAttributesNestedInput {

    @Field(() => [AttributeCreateWithoutProductAttributesInput], {nullable:true})
    @Type(() => AttributeCreateWithoutProductAttributesInput)
    create?: Array<AttributeCreateWithoutProductAttributesInput>;

    @Field(() => [AttributeCreateOrConnectWithoutProductAttributesInput], {nullable:true})
    @Type(() => AttributeCreateOrConnectWithoutProductAttributesInput)
    connectOrCreate?: Array<AttributeCreateOrConnectWithoutProductAttributesInput>;

    @Field(() => [AttributeUpsertWithWhereUniqueWithoutProductAttributesInput], {nullable:true})
    @Type(() => AttributeUpsertWithWhereUniqueWithoutProductAttributesInput)
    upsert?: Array<AttributeUpsertWithWhereUniqueWithoutProductAttributesInput>;

    @Field(() => [AttributeWhereUniqueInput], {nullable:true})
    @Type(() => AttributeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AttributeWhereUniqueInput, 'id'>>;

    @Field(() => [AttributeWhereUniqueInput], {nullable:true})
    @Type(() => AttributeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AttributeWhereUniqueInput, 'id'>>;

    @Field(() => [AttributeWhereUniqueInput], {nullable:true})
    @Type(() => AttributeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AttributeWhereUniqueInput, 'id'>>;

    @Field(() => [AttributeWhereUniqueInput], {nullable:true})
    @Type(() => AttributeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AttributeWhereUniqueInput, 'id'>>;

    @Field(() => [AttributeUpdateWithWhereUniqueWithoutProductAttributesInput], {nullable:true})
    @Type(() => AttributeUpdateWithWhereUniqueWithoutProductAttributesInput)
    update?: Array<AttributeUpdateWithWhereUniqueWithoutProductAttributesInput>;

    @Field(() => [AttributeUpdateManyWithWhereWithoutProductAttributesInput], {nullable:true})
    @Type(() => AttributeUpdateManyWithWhereWithoutProductAttributesInput)
    updateMany?: Array<AttributeUpdateManyWithWhereWithoutProductAttributesInput>;

    @Field(() => [AttributeScalarWhereInput], {nullable:true})
    @Type(() => AttributeScalarWhereInput)
    deleteMany?: Array<AttributeScalarWhereInput>;
}
