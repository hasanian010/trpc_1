import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MainCategoryCreateManyInput } from './main-category-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMainCategoryArgs {

    @Field(() => [MainCategoryCreateManyInput], {nullable:false})
    @Type(() => MainCategoryCreateManyInput)
    data!: Array<MainCategoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
