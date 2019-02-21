import request from '@/utils/request'

export const banner = () => {
    return request({
        'url': '/api/system/banner/list',
        method: 'get'
    })
}

export const partner = () => {
    return request({
        'url': '/api/regard/partner/list'
    })
}
