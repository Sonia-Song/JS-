import http from './http/index'
/***
 * @param:url
 * @param:request
 * @param:res
 */

/* 获取用户信息 */
export const entInfo = () => http('/usercenter','/user');

/* 登录框地址绘制一 */
export const getLoginUrl_first=()=>http('/usercenter','/pub/login/localsso4',{},'post');

/* 登录框地址绘制1.2 */
export const getLonin_first=(url)=>http('/bjsso',url);

/* 登录框地址绘制二 */
export const getLoginUrl_second=(data)=>http('/usercenter','/pub/login/swloginurl/',data,'post');

/* 获取物流应用列表 */
export const getLogistics=()=>http('/usercenter','/pub/app/logistics/');
/* 获取金融应用列表 */
export const getFinance=()=>http('/usercenter','/pub/app/finance/');
/* 获取数据应用列表 */
export const getData=()=>http('/usercenter','/pub/app/data/');

/* 获取分类列表信息 */
export const getNewsType=(str)=>http('/drdcms','/api/directive/categoryList?'+str);

/* 根据分类id查列表 */
export const getNewsList=(str)=>http('/drdcms','/api/directive/contentList?'+str);

/* 根据文章id查询详情 */
export const getNewsDetail=(str)=>http('/drdcms','/api/method/getContentAttribute?'+str);

/* 获取cms域名 */
export const getURLA=(token)=>http('/drdcms','api/directive/sysSiteList?appToken='+token);

/* 获取token */
export const getToken=(key)=>http('/drdcms','/api/appToken?appKey='+key);






