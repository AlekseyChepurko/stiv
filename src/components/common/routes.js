/**
 * Created by Алексей on 28.05.2017.
 */

class Link {
    constructor(path, text){
        this.path = path;
        this.text = text
    }
}

export const routes = {
    root: new Link('/',""),
    loggedIn: {
        profile: new Link('/profile', ),
        settings: new Link('/account_settings',"Настройка аккаунта"),
        optionsML: new Link('/options_ml',"Настройка МФ/МЛ"),
        addAccount: new Link('/add_account',"Добавить аккаунт"),
        accountsList: new Link('/accounts_list',"Список аккаунтов"),
        accountFill: new Link('/account_fill',"Наполнение аккаунтов"),
        subscribeStatus: new Link('/subscribe_status',"Статус раскрутки"),
        rivalSubscribe: new Link('/rival_subscribe',"Подписка по конкурентам"),
        listSubscribe: new Link('/list_subscribe', "Подписка по списку"),
        audienceCollection: new Link('/audience_collection', "Сбор аудитории"),
        statistics: new Link('/statistics',"Статистика"),

},
    loggedOut: {
        login: new Link('/login',"Войти"),
        register: new Link('/registration',"Зарегистритоваться"),
        passForgot: new Link('/forgot_pass',"Забыли пароль?")
    }
};