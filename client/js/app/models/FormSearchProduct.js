class FormSearchProduct {
    constructor(input) {
        this._input = input
    }

    handleSearchProduct(e, callback) {
        e.preventDefault()

        callback(this._input.value)
    }
}