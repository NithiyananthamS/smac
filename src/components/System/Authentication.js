class Authentication{

    _isAuthorized = false;

    giveAuth(){
        this._isAuthorized = true;
    }

    removeAuth(){
        this._isAuthorized = false;
    }

    get getAuth(){
        return this._isAuthorized;
    }
}

export default new Authentication();