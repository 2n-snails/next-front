import produce from "immer";
import shortId from "shortid";
import Faker from "faker";
import {
  LOAD_PRODUCTS_ERROR,
  LOAD_PRODUCTS_REQUEST,
  LOAD_PRODUCTS_SUCCESS,
} from "@/action/products";

Faker.locale = "ko";

const init = {
  loadProductsLoading: false,
  loadProductsSuccess: false,
  loadProductsError: null,

  //상품 list
  productsList: [
    {
      productNo: shortId.generate(),
      productPrice: Faker.random.number(99999999),

      productUploadDate: "2020-05-04",
      //상품 작정자 정보
      User: {
        id: 1,
        nickname: Faker.name.findName(),
        src: Faker.image.image(),
      },
      //상품 내용
      productContent: "게시글 내용 테스트입니당아아아아아 당근마켓 번개장터",
      //이미지 정보
      Images: [
        {
          id: shortId.generate(),
          src: Faker.image.image(),
        },
      ],
      //댓글
      Comments: [
        {
          user: {
            id: shortId.generate(),
            nickname: Faker.name.findName(),
            src: Faker.image.image(),
          },
          id: shortId.generate(),
          content: "댓글달러 왔습니다 상품 얼마인가요",
        },
      ],
    },
  ],
};

const commentLength = Number((Math.random() * 50).toFixed(0));
const commentsArray = Array(commentLength)
  .fill()
  .map(() => ({
    user: {
      id: shortId.generate(),
      src: Faker.image.image(),
      nickname: Faker.name.findName(),
    },
    id: shortId.generate(),
    content: Faker.lorem.sentence(),
  }));

//상품 더미데이터 생성
init.productsList = init.productsList.concat(
  Array(20)
    .fill()
    .map(() => ({
      productNo: shortId.generate(),
      productPrice: Faker.random.number(99999999),
      // 여기서 date 처리를 해줘여하는데
      productUploadDate: "2020-05-04",
      User: {
        id: shortId.generate(),
        src: Faker.image.image(),
      },
      productContent: Faker.lorem.paragraph(),
      Images: [
        {
          id: shortId.generate(),
          src: Faker.image.image(),
        },
        {
          id: shortId.generate(),
          src: Faker.image.image(),
        },
      ],
      //댓글
      Comments: commentsArray,
    })),
);
// init.productsList = init.productsList.concat(

// );

const products = (state = init, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_PRODUCTS_REQUEST:
        draft.loadProductsLoading = true;
        draft.loadProductsSuccess = false;
        draft.loadProductsError = null;
        break;
      case LOAD_PRODUCTS_SUCCESS:
        draft.loadProductsLoading = false;
        draft.loadProductsSuccess = true;
        draft.loadProductsError = null;
        break;
      case LOAD_PRODUCTS_ERROR:
        draft.loadProductsLoading = false;
        draft.loadProductsSuccess = false;
        draft.loadProductsError = action.data;
        break;
      default:
        break;
    }
  });

export default products;
