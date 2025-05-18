import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannerUpdateManyMutationInput } from './banner-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BannerWhereInput } from './banner-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyBannerArgs {

    @Field(() => BannerUpdateManyMutationInput, {nullable:false})
    @Type(() => BannerUpdateManyMutationInput)
    data!: BannerUpdateManyMutationInput;

    @Field(() => BannerWhereInput, {nullable:true})
    @Type(() => BannerWhereInput)
    where?: BannerWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
