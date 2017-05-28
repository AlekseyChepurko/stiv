/**
 * Created by Алексей on 28.05.2017.
 */


export const routes = {
    root: '/',
    loggedIn: {
        profile: '/profile',
        settings: '/account_settings',
        statistics: '/statistics',
        addAccount: '/add_account',
        accountsList: '/accounts_list',
        accountFill: 'account_fill',
        rivalSubscribe: '/rival_subscribe'
    },
    loggedOut: {
        login: "/login",
        register: '/registration',
        passForgot: '/forgot_pass'
    }
};