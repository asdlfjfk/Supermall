import {request2} from './request'


export function  getCategory() {
  return request2({
    url: '/category',
  })
}

export function getCategoryInfo(maitKey) {
  return request2({
    url: "/subcategory",
    params: {
      maitKey
    }
  });
}
