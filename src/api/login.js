import request from '@/utils/request'
// 登录
export const login = (params) => {
    return request({
        'url': '/api/passport/signIn',
        method: 'post',
        params
    })
}
// 注册
export const register = (params) => {
    return request({
        'url': '/api/passport/register',
        method: 'post',
        params
    })
}
// 验证账号否有存在
export const verifyAccount = (params) => {
    return request({
        'url': '/api/passport/valid/exist',
        method: 'post',
        params
    })
}
// 验证该账号是否已经存在
export const existence = (params) => {
    return request({
        'url': '/api/passport/valid/notExist',
        method: 'post',
        params
    })
}
// 发送验证码
export const sendVerificationCode = (params) => {
    return request({
        'url': '/api/passport/sendCode',
        method: 'post',
        params
    })
}
// 忘记密码
export const forgetPassword = (params) => {
    return request({
        'url': '/api/passport/forget/password',
        method: 'post',
        params
    })
}
