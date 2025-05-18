import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttributeWhereInput } from './attribute-where.input';
import { Type } from 'class-transformer';
import { AttributeOrderByWithRelationInput } from './attribute-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AttributeWhereUniqueInput } from './attribute-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AttributeScalarFieldEnum } from './attribute-scalar-field.enum';

@ArgsType()
export class FindFirstAttributeArgs {

    @Field(() => AttributeWhereInput, {nullable:true})
    @Type(() => AttributeWhereInput)
    where?: AttributeWhereInput;

    @Field(() => [AttributeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AttributeOrderByWithRelationInput>;

    @Field(() => AttributeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AttributeWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AttributeScalarFieldEnum], {nullable:true})
    distinct?: Array<`${AttributeScalarFieldEnum}`>;
}
