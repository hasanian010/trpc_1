import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MainCategoryUpdateManyMutationInput } from './main-category-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MainCategoryWhereInput } from './main-category-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyMainCategoryArgs {

    @Field(() => MainCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => MainCategoryUpdateManyMutationInput)
    data!: MainCategoryUpdateManyMutationInput;

    @Field(() => MainCategoryWhereInput, {nullable:true})
    @Type(() => MainCategoryWhereInput)
    where?: MainCategoryWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
