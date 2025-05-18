import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MainCategoryWhereInput } from './main-category-where.input';

@InputType()
export class MainCategoryScalarRelationFilter {

    @Field(() => MainCategoryWhereInput, {nullable:true})
    is?: MainCategoryWhereInput;

    @Field(() => MainCategoryWhereInput, {nullable:true})
    isNot?: MainCategoryWhereInput;
}
