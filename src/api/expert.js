import request from '@/utils/request'

// 热门专家
export const hotList = () => {
    return request({
        'url': '/api/professional/hot/list',
        method: 'get'
    })
}

// 专家类别
export const expertCategory = () => {
    return request({
        'url': '/api/professional/category/stat',
        method: 'get'
    })
}

// 行业列表
export const categoryList = (params) => {
    return request({
        'url': '/api/common/category',
        method: 'get',
        params: params
    })
}
