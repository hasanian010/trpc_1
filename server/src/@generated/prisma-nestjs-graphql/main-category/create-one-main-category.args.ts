import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MainCategoryCreateInput } from './main-category-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMainCategoryArgs {

    @Field(() => MainCategoryCreateInput, {nullable:false})
    @Type(() => MainCategoryCreateInput)
    data!: MainCategoryCreateInput;
}
