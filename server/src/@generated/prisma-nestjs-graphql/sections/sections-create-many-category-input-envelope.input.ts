import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionsCreateManyCategoryInput } from './sections-create-many-category.input';
import { Type } from 'class-transformer';

@InputType()
export class SectionsCreateManyCategoryInputEnvelope {

    @Field(() => [SectionsCreateManyCategoryInput], {nullable:false})
    @Type(() => SectionsCreateManyCategoryInput)
    data!: Array<SectionsCreateManyCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
