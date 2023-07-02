import React, { useEffect, useState } from "react";
import { useQuery, useLazyQuery } from "react-apollo";
import getProductsReviews from './graphql/getProductsReviews.graphql';
import getProductCategory from './graphql/getProductCategory.graphql';

type Review = {
  productId: string
  rating: number
  reviewDateTime: string
  reviewerName: string
  text: string
  title: string
}

type Reviews = {
  data: Review[]
}

type ReviewsData = {
  reviews: Reviews
}

type CategoryTree = {
  id: number
}

type ProductsByIdentifier = {
  categoryTree: CategoryTree[]
  linkText: string
  productId: string
  productName: string
}

type CategoryData = {
  productsByIdentifier: ProductsByIdentifier[]
}

type FinalProduct = {
  productId: string
  rating: number
  reviewDateTime: string
  reviewerName: string
  text: string
  title: string
  categoryTree: CategoryTree[]
  linkText: string
  productName: string
}

export default function ReviewsLibros() {

  //QUERIES
  const { data: reviewsData } = useQuery(getProductsReviews);
  const [validarCategoria, { data: categoryData }] = useLazyQuery(getProductCategory);

  //STATES
  const [reseñas, setReseñas] = useState<FinalProduct[]>([]);

  //EFFECTS
  useEffect(() => {
    if(reviewsData) {
      const { reviews }:ReviewsData = reviewsData;
      let reviewsCategoriaLibros:string[] = reviews.data.map(review => review.productId)

      const productParameters = {
        variables: {
          productsId: reviewsCategoriaLibros
        }
      }
      validarCategoria(productParameters);
    }
  },[reviewsData])

  useEffect(() => {
    if(categoryData) {
      const { productsByIdentifier }:CategoryData = categoryData;
      const { reviews }:ReviewsData = reviewsData;
      const productsIdentifierMap = new Map();

      productsByIdentifier.forEach((product) => {
        if(product.categoryTree[0].id === 1) {
          productsIdentifierMap.set(product.productId, product);
        }
      })

      let finalProducts:FinalProduct[] = [];

      reviews.data.forEach((review) => {
        const validacionReview = productsIdentifierMap.get(review.productId);

        if(validacionReview) {
          finalProducts.push({
            ...review,
            ...validacionReview
          })
        }
      })

      setReseñas(finalProducts);
    }
  },[categoryData])

  //JSX
  if(reseñas.length > 0) {
    return (
      <div>
        <h3>RESEÑAS</h3>
        <ul>
          {
            reseñas.map((reseña, index) => {
              return (
                <li key={index}>
                  <div>{reseña.reviewerName}</div>
                  <div>{reseña.rating}</div>
                  <div>{reseña.reviewDateTime}</div>
                  <div>{reseña.title}</div>
                  <div>{reseña.text}</div>
                  <a href={`/${reseña.linkText}/p`}>VER PRODUCTO</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  return null
}


