import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MainCategoryWhereInput } from './main-category-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyMainCategoryArgs {

    @Field(() => MainCategoryWhereInput, {nullable:true})
    @Type(() => MainCategoryWhereInput)
    where?: MainCategoryWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
