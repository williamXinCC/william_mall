/**
 *@des 个人中心相关接口
 *@author stav stavyan@qq.com
 *@blog https://stavtop.club
 *@date 2019/11/16 11:04:16
 */
// 个人信息
const memberInfo = '/william-customer/getCustomerInfo';
// 个人信息修改
const memberUpdate = '/william-customer/updateCustomerInfo';

// 收货地址列表
const addressList = '/william-address/getCustomerAddressList';
// 默认收货地址
const addressDefault = '/william-address/updateDefaultAddress';
// 默认收货地址
const addressDetail = '/william-address/getDefaultAddress';
// 创建收货地址
const addressCreate = '/william-address/saveAddress';
// 修改收货地址
const addressUpdate = '/william-address/updateAddress';
// 删除收货地址
const addressDelete = '/william-address/deleteAddress';

// 获取优惠券列表
const couponList = '/william-coupon/getCouponCenter';
// 获取我的优惠券列表
const myCouponList = '/william-coupon/getCouponByType';
// 优惠券详情
const couponDetail = '/william-coupon/getCouponDetail';
// 领取优惠券
const couponReceive = '/william-coupon/saveCoupon';
// 清空失效优惠券
const couponClear = '/william-coupon/deleteExpireCoupon';

// 获取我的订单
const orderList = '/william-order/getOrderListByStatus';
// 订单确认收货
const orderTakeDelivery = '/tiny-shop/v1/member/order/take-delivery';
// 退货/退款申请
const orderRefundApply = '/tiny-shop/v1/member/order-product/refund-apply';
// 产品退货提交物流
const orderProductSalesReturn = '/tiny-shop/v1/member/order-product/refund-sales-return';
// 关闭退货/退款申请
const closeOrderRefundApply = '/tiny-shop/v1/member/order-product/refund-close';

// 获取订单详情
const orderDetail = '/william-order/getOrderDetail';
// 删除已关闭订单
const orderDelete = '/william-order/deleteOrder';

// 获取我的足迹
const footPrintList = '/william-footmark/getFootmarkByUid';
// 删除我的足迹
const footPrintDel = '/william-footmark/deleteFootmarkById';

// 收藏列表
const collectList = '/william-collect/getMyCollect';

// 积分余额日志
const creditsLogList = '/tiny-shop/v1/member/credits-log/index';

// 创建订单评价
const evaluateCreate = '/tiny-shop/v1/member/evaluate/create';
// 追加评价
const evaluateAgain = '/tiny-shop/v1/member/evaluate/again';
// 订单商品
const orderProductIndex = '/tiny-shop/v1/member/order-product/index';

// 发票列表
const invoiceList = '/tiny-shop/v1/member/invoice/index';
// 发票列表
const invoiceCreate = '/tiny-shop/v1/member/invoice/create';
// 发票编辑
const invoiceUpdate = '/tiny-shop/v1/member/invoice/update';
// 发票详情
const invoiceDetail = '/tiny-shop/v1/member/invoice/view';
// 默认发票
const invoiceDefault = '/tiny-shop/v1/member/invoice/default';
// 删除发票
const invoiceDel = '/tiny-shop/v1/member/invoice/delete';
// 开票列表
const orderInvoiceList = '/tiny-shop/v1/member/order-invoice/index';

// 意见反馈列表
const opinionList = '/tiny-shop/v1/member/opinion/index';
// 意见反馈创建
const opinionCreate = '/tiny-shop/v1/member/opinion/create';
// 意见反馈详情
const opinionDetail = '/tiny-shop/v1/member/opinion/view';

// 第三方授权列表
const thirdPartyAuthList = '/tiny-shop/v1/member/auth/index';
// 解除第三方授权列表
const thirdPartyAuthDelete = '/tiny-shop/v1/member/auth/delete';

// 充值金额
const rechargeConfigIndex = '/tiny-shop/v1/member/recharge-config/index';

// 订单售后
// 申请退款/退货
const orderCustomerRefundApply = '/tiny-shop/v1/member/order-customer/apply';
// 退货提交物流
const orderCustomerSalesReturn = '/tiny-shop/v1/member/order-customer/sales-return';
// 退款/退货关闭申请
const orderCustomerRefundClose = '/tiny-shop/v1/member/order-customer/close';

// 上传图片
const uploadImage = '/tiny-shop/v1/common/file/images';

export {
    memberInfo,
    memberUpdate,
    addressList,
    addressCreate,
    addressDefault,
    addressDetail,
    addressUpdate,
    addressDelete,
    couponList,
    myCouponList,
    couponClear,
    couponDetail,
    orderList,
    orderRefundApply,
    closeOrderRefundApply,
    orderProductSalesReturn,
    orderDetail,
    orderDelete,
    orderTakeDelivery,
    couponReceive,
    footPrintList,
    footPrintDel,
    collectList,
    creditsLogList,
    evaluateCreate,
    evaluateAgain,
    invoiceList,
    invoiceCreate,
    invoiceUpdate,
    invoiceDetail,
    invoiceDefault,
    invoiceDel,
    orderInvoiceList,
    uploadImage,
    opinionList,
    opinionCreate,
    opinionDetail,
    thirdPartyAuthList,
    thirdPartyAuthDelete,
    rechargeConfigIndex,
    orderCustomerSalesReturn,
    orderCustomerRefundApply,
    orderCustomerRefundClose,
    orderProductIndex
};
