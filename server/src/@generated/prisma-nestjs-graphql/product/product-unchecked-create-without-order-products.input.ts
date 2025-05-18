import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateimagesInput } from './product-createimages.input';
import { SubCategoryUncheckedCreateNestedManyWithoutProductsInput } from '../sub-category/sub-category-unchecked-create-nested-many-without-products.input';
import { TagUncheckedCreateNestedManyWithoutProductsInput } from '../tag/tag-unchecked-create-nested-many-without-products.input';
import { ProductAttributeValuesUncheckedCreateNestedManyWithoutProductInput } from '../product-attribute-values/product-attribute-values-unchecked-create-nested-many-without-product.input';
import { ProductAttributeVariantUncheckedCreateNestedManyWithoutProductInput } from '../product-attribute-variant/product-attribute-variant-unchecked-create-nested-many-without-product.input';
import { ProductAttributeUncheckedCreateNestedManyWithoutProductInput } from '../product-attribute/product-attribute-unchecked-create-nested-many-without-product.input';
import { ProductSpecificationUncheckedCreateNestedManyWithoutProductInput } from '../product-specification/product-specification-unchecked-create-nested-many-without-product.input';
import { ProductMetaUncheckedCreateNestedOneWithoutProductInput } from '../product-meta/product-meta-unchecked-create-nested-one-without-product.input';
import { RefundableUncheckedCreateNestedManyWithoutProductInput } from '../refundable/refundable-unchecked-create-nested-many-without-product.input';
import { WishlistUncheckedCreateNestedManyWithoutProductInput } from '../wishlist/wishlist-unchecked-create-nested-many-without-product.input';
import { ReviewUncheckedCreateNestedManyWithoutProductInput } from '../review/review-unchecked-create-nested-many-without-product.input';
import { SectionProductUncheckedCreateNestedManyWithoutProductInput } from '../section-product/section-product-unchecked-create-nested-many-without-product.input';

@InputType()
export class ProductUncheckedCreateWithoutOrderProductsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    sellerId!: string;

    @Field(() => String, {nullable:false})
    mainCategoryId!: string;

    @Field(() => String, {nullable:true})
    categoryId?: string;

    @Field(() => String, {nullable:true})
    brandId?: string;

    @Field(() => String, {nullable:true})
    unit?: string;

    @Field(() => String, {nullable:true})
    minPurchase?: string;

    @Field(() => Boolean, {nullable:true})
    refundAble?: boolean;

    @Field(() => ProductCreateimagesInput, {nullable:true})
    images?: ProductCreateimagesInput;

    @Field(() => String, {nullable:true})
    youtubeLink?: string;

    @Field(() => String, {nullable:true})
    flashId?: string;

    @Field(() => String, {nullable:false})
    price!: string;

    @Field(() => String, {nullable:false})
    quantity!: string;

    @Field(() => String, {nullable:false})
    discount!: string;

    @Field(() => String, {nullable:false})
    discountUnit!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:true})
    visibility?: boolean;

    @Field(() => Boolean, {nullable:true})
    isApproved?: boolean;

    @Field(() => String, {nullable:true})
    estimateDelivery?: string;

    @Field(() => String, {nullable:true})
    warranty?: string;

    @Field(() => Boolean, {nullable:true})
    showStock?: boolean;

    @Field(() => String, {nullable:false})
    tax!: string;

    @Field(() => String, {nullable:false})
    taxUnit!: string;

    @Field(() => String, {nullable:false})
    totalPrice!: string;

    @Field(() => String, {nullable:false})
    disclaimer!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => SubCategoryUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    subCategories?: SubCategoryUncheckedCreateNestedManyWithoutProductsInput;

    @Field(() => TagUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    tags?: TagUncheckedCreateNestedManyWithoutProductsInput;

    @Field(() => ProductAttributeValuesUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    attributeValues?: ProductAttributeValuesUncheckedCreateNestedManyWithoutProductInput;

    @Field(() => ProductAttributeVariantUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    attributeVariants?: ProductAttributeVariantUncheckedCreateNestedManyWithoutProductInput;

    @Field(() => ProductAttributeUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    productAttribute?: ProductAttributeUncheckedCreateNestedManyWithoutProductInput;

    @Field(() => ProductSpecificationUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    specifications?: ProductSpecificationUncheckedCreateNestedManyWithoutProductInput;

    @Field(() => ProductMetaUncheckedCreateNestedOneWithoutProductInput, {nullable:true})
    meta?: ProductMetaUncheckedCreateNestedOneWithoutProductInput;

    @Field(() => RefundableUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    refundables?: RefundableUncheckedCreateNestedManyWithoutProductInput;

    @Field(() => WishlistUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    wishlists?: WishlistUncheckedCreateNestedManyWithoutProductInput;

    @Field(() => ReviewUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput;

    @Field(() => SectionProductUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    sectionProducts?: SectionProductUncheckedCreateNestedManyWithoutProductInput;
}
