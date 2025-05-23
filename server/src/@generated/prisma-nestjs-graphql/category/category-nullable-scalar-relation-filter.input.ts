import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereInput } from './category-where.input';

@InputType()
export class CategoryNullableScalarRelationFilter {

    @Field(() => CategoryWhereInput, {nullable:true})
    is?: CategoryWhereInput;

    @Field(() => CategoryWhereInput, {nullable:true})
    isNot?: CategoryWhereInput;
}
