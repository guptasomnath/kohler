class ApiResponse {
    constructor(status, message, data){
        this.message = message;
        this.status = status;
        this.success = status < 400;
        this.data = data
    }
}

module.exports = ApiResponse