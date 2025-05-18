import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateManyMainCategoryInput } from './category-create-many-main-category.input';
import { Type } from 'class-transformer';

@InputType()
export class CategoryCreateManyMainCategoryInputEnvelope {

    @Field(() => [CategoryCreateManyMainCategoryInput], {nullable:false})
    @Type(() => CategoryCreateManyMainCategoryInput)
    data!: Array<CategoryCreateManyMainCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
