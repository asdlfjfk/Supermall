import {request2} from "./request";

export function getDetail(iid) {
  return request2({
    url:'/detail',
    params: {
      iid
    }
  })
}


export function getRecommend(){
  return request2({
    url: '/recommend'
  })
}

export class goodsinfo {
  constructor(itemInfo,columns,services){
      this.title = itemInfo.title
      this.desc = itemInfo.desc
      this.newPrice = itemInfo.price
      this.oldPrice = itemInfo.oldPrice
      this.discount = itemInfo.discountDesc
      this.replace = itemInfo.lowNowPrice
      this.columns = columns
      this.services = services
  }
}

export class shopinfo{
  constructor(shopInfo){
      this.logo = shopInfo.shopLogo
      this.name = shopInfo.name
      this.goods = shopInfo.cGoods
      this.sells = shopInfo.cSells
      this.fans = shopInfo.cFans
      this.score = shopInfo.score
  }
}

export class goodsparams {
  constructor(info,rule){
    //image某些商品没有值
    this.image = info.image ? info.image[0] : ''
    this.infos = info.set
    this.sizes = rule.tables
  }
}

