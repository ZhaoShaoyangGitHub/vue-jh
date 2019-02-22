import request from '@/utils/request'

export const hotList = () => {
    return request({
        'url': '/api/professional/hot/list',
        method: 'get'
    })
}