import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionProductWhereInput } from './section-product-where.input';

@InputType()
export class SectionProductListRelationFilter {

    @Field(() => SectionProductWhereInput, {nullable:true})
    every?: SectionProductWhereInput;

    @Field(() => SectionProductWhereInput, {nullable:true})
    some?: SectionProductWhereInput;

    @Field(() => SectionProductWhereInput, {nullable:true})
    none?: SectionProductWhereInput;
}
