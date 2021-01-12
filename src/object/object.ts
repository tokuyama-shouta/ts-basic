export default function objectSample() {
  // const a: object = {
  //   name: 'Totahack',
  //   age: 28
  // }
  // a.name

  //オブジェクトリテラル記法で型定義
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }

  console.log('Object object sample 1:', country)

  country = {
    language: 'English',
    name: 'United States of America',
  }

  console.log('Object object sample 2:', country)

  // オプショナルとreadonly
  const pkpk: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 28,
    lastName: 'Yamada',
    firstName: 'Tarou',
  }

  pkpk.gender = 'male'
  pkpk.lastName = 'kamado'
  console.log('Object object sample 3:', pkpk)

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'seoul',
  }

  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'
  console.log('Object object sample 4:', capitals)
}
