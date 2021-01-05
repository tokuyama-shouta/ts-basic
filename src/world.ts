export default class World {
  message: string

  constructor(message: string) {
    this.message = message
  }

  public sayHello(elem: HTMLElement | null) {
    if (elem) {
      elem.innerText = this.message
    }
  }
}

// プリミティブ型
// string: 文字列
// number: 数値
// boolean: trueとfalseの2つの値を扱う型

const name = 'pkpk'
const age = 28
const isSingle = true

// 判定式の結果も代入できる
const isOver20: boolean = age >= 20
