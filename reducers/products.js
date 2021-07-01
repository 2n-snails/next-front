import produce from 'immer';
import shortId from 'shortid';
import faker from 'faker';
import {
  LOAD_PRODUCTS_ERROR,
  LOAD_PRODUCTS_REQUEST,
  LOAD_PRODUCTS_SUCCESS,
} from '../action/products';

const init = {
  loadProductsLoading: false,
  loadProductsSuccess: false,
  loadProductsError: null,

  //상품 list
  productsList: [
    {
      //상품 작정자 정보
      User: {
        id: 1,
        nickname: '혜민',
      },
      //상품 id
      id: 1,
      //상품 내용
      content: '게시글 내용 테스트입니당아아아아아 당근마켓 번개장터',
      //이미지 정보
      Images: [
        {
          id: shortId.generate(),
          src: faker.image,
        },
      ],
      //댓글
      Comments: [{}],
    },
  ],
};

//상품 더미데이터 생성
init.productsList = init.productsList.concat(
  Array(20)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      User: {
        id: shortId.generate(),
        nickname: faker.name.findName(),
      },
      content: faker.lorem.paragraph(),
      Images: [
        {
          src: faker.image.image,
        },
      ],
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
