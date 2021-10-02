
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
        return {
            kq: (x > y && x % y === 0) ? Math.floor((x / y) - 1) : Math.floor((x / y)),
        }
    },
    changeMoney(number, st = 'Vnd') {
        return this.changeNumberToString(number) + '' + st
    },
    listPaginationBtn(currentPage, showPage, maxPage) {

        let page = showPage < maxPage ? showPage : maxPage
        let rangePage = showPage % 2 == 0 ? showPage / 2 : (showPage - 1) / 2
        let arr = []
        if (maxPage === 0) return [1]
        if (maxPage >= currentPage && (showPage - currentPage >= 0 || maxPage - currentPage < showPage)) {
            if (showPage - currentPage >= 0) {
                for (let i = 1; i <= page; i++) {
                    arr.push(i)
                }
            } else if (maxPage - currentPage < showPage) {
                for (let i = 1; i <= page; i++) {
                    arr.push(maxPage - showPage + i)
                }
            }
        }
        // else if (maxPage < currentPage) {
        //     for (let i = 1; i <= maxPage; i++) {
        //         arr.push(i)
        //     }
        // }
        else {
            for (let i = 0; i < showPage; i++) {
                arr.push(currentPage - rangePage + i)
            }
        }
        return arr
    },
    changeBoolearn(x) {
        if (x === 'true') return true
        if (x==='false') return false
        if (x===undefined) return undefined
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