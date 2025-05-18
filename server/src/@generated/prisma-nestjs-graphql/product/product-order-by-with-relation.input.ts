import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SellerOrderByWithRelationInput } from '../seller/seller-order-by-with-relation.input';
import { MainCategoryOrderByWithRelationInput } from '../main-category/main-category-order-by-with-relation.input';
import { CategoryOrderByWithRelationInput } from '../category/category-order-by-with-relation.input';
import { SubCategoryOrderByRelationAggregateInput } from '../sub-category/sub-category-order-by-relation-aggregate.input';
import { BrandOrderByWithRelationInput } from '../brand/brand-order-by-with-relation.input';
import { TagOrderByRelationAggregateInput } from '../tag/tag-order-by-relation-aggregate.input';
import { FlashOrderByWithRelationInput } from '../flash/flash-order-by-with-relation.input';
import { ProductAttributeValuesOrderByRelationAggregateInput } from '../product-attribute-values/product-attribute-values-order-by-relation-aggregate.input';
import { ProductAttributeVariantOrderByRelationAggregateInput } from '../product-attribute-variant/product-attribute-variant-order-by-relation-aggregate.input';
import { ProductAttributeOrderByRelationAggregateInput } from '../product-attribute/product-attribute-order-by-relation-aggregate.input';
import { ProductSpecificationOrderByRelationAggregateInput } from '../product-specification/product-specification-order-by-relation-aggregate.input';
import { ProductMetaOrderByWithRelationInput } from '../product-meta/product-meta-order-by-with-relation.input';
import { OrderProductOrderByRelationAggregateInput } from '../order-product/order-product-order-by-relation-aggregate.input';
import { RefundableOrderByRelationAggregateInput } from '../refundable/refundable-order-by-relation-aggregate.input';
import { WishlistOrderByRelationAggregateInput } from '../wishlist/wishlist-order-by-relation-aggregate.input';
import { ReviewOrderByRelationAggregateInput } from '../review/review-order-by-relation-aggregate.input';
import { SectionProductOrderByRelationAggregateInput } from '../section-product/section-product-order-by-relation-aggregate.input';

@InputType()
export class ProductOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    sellerId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    mainCategoryId?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    categoryId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    brandId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    unit?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    minPurchase?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    refundAble?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    images?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    youtubeLink?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    flashId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    price?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    quantity?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    discount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    discountUnit?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    visibility?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    isApproved?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    estimateDelivery?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    warranty?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    showStock?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    tax?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    taxUnit?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    totalPrice?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    disclaimer?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SellerOrderByWithRelationInput, {nullable:true})
    seller?: SellerOrderByWithRelationInput;

    @Field(() => MainCategoryOrderByWithRelationInput, {nullable:true})
    mainCategory?: MainCategoryOrderByWithRelationInput;

    @Field(() => CategoryOrderByWithRelationInput, {nullable:true})
    category?: CategoryOrderByWithRelationInput;

    @Field(() => SubCategoryOrderByRelationAggregateInput, {nullable:true})
    subCategories?: SubCategoryOrderByRelationAggregateInput;

    @Field(() => BrandOrderByWithRelationInput, {nullable:true})
    brand?: BrandOrderByWithRelationInput;

    @Field(() => TagOrderByRelationAggregateInput, {nullable:true})
    tags?: TagOrderByRelationAggregateInput;

    @Field(() => FlashOrderByWithRelationInput, {nullable:true})
    flash?: FlashOrderByWithRelationInput;

    @Field(() => ProductAttributeValuesOrderByRelationAggregateInput, {nullable:true})
    attributeValues?: ProductAttributeValuesOrderByRelationAggregateInput;

    @Field(() => ProductAttributeVariantOrderByRelationAggregateInput, {nullable:true})
    attributeVariants?: ProductAttributeVariantOrderByRelationAggregateInput;

    @Field(() => ProductAttributeOrderByRelationAggregateInput, {nullable:true})
    productAttribute?: ProductAttributeOrderByRelationAggregateInput;

    @Field(() => ProductSpecificationOrderByRelationAggregateInput, {nullable:true})
    specifications?: ProductSpecificationOrderByRelationAggregateInput;

    @Field(() => ProductMetaOrderByWithRelationInput, {nullable:true})
    meta?: ProductMetaOrderByWithRelationInput;

    @Field(() => OrderProductOrderByRelationAggregateInput, {nullable:true})
    orderProducts?: OrderProductOrderByRelationAggregateInput;

    @Field(() => RefundableOrderByRelationAggregateInput, {nullable:true})
    refundables?: RefundableOrderByRelationAggregateInput;

    @Field(() => WishlistOrderByRelationAggregateInput, {nullable:true})
    wishlists?: WishlistOrderByRelationAggregateInput;

    @Field(() => ReviewOrderByRelationAggregateInput, {nullable:true})
    reviews?: ReviewOrderByRelationAggregateInput;

    @Field(() => SectionProductOrderByRelationAggregateInput, {nullable:true})
    sectionProducts?: SectionProductOrderByRelationAggregateInput;
}
