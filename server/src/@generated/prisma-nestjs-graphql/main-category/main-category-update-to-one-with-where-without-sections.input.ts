import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MainCategoryWhereInput } from './main-category-where.input';
import { Type } from 'class-transformer';
import { MainCategoryUpdateWithoutSectionsInput } from './main-category-update-without-sections.input';

@InputType()
export class MainCategoryUpdateToOneWithWhereWithoutSectionsInput {

    @Field(() => MainCategoryWhereInput, {nullable:true})
    @Type(() => MainCategoryWhereInput)
    where?: MainCategoryWhereInput;

    @Field(() => MainCategoryUpdateWithoutSectionsInput, {nullable:false})
    @Type(() => MainCategoryUpdateWithoutSectionsInput)
    data!: MainCategoryUpdateWithoutSectionsInput;
}
