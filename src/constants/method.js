import { NewReleasesRounded } from "@material-ui/icons"

const method = {
    handleString(string, n = 30) {
        let newString = string
        newString = newString.length > n ? newString.slice(0, n) + '...' : newString
        return newString
    },
    changeNumberToString(Numbers, n = 3) {
        let stringNumber = `${Numbers}`
        let arrOfStringNumber = stringNumber.split('')
        if (stringNumber.length <= n) return stringNumber
        else {

            for (let i = 0; i < this._c(stringNumber.length, n).kq; i++) {
                arrOfStringNumber = [...arrOfStringNumber.slice(0, arrOfStringNumber.length - (i + 1) * n - i), '.', ...arrOfStringNumber.slice(arrOfStringNumber.length - (i + 1) * n - i)]
            }
            return arrOfStringNumber.join('')
        }
    }, _c(x, y) {
        let du = x % y
        return {
            kq: (x > y && x % y === 0) ? Math.floor((x / y) - 1) : Math.floor((x / y)),
        }
    },
    changeMoney(number, st = 'Vnd') {
        return this.changeNumberToString(number) + '' + st
    }
}

// const al1=()=>{
//     let newArr=[1,2,3,4,5]
//     newArr[1]=3
//     console.log(newArr)
// }
// al1()
export default method
// method.changeNumberToString(4000000)