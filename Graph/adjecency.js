adjecencyList = {
    'A' : ['B'],
    'B' : [],
    'C' : ['B'],
    'D' :[]
}
adjecencyList['B'] = ['A']
adjecencyList['C'].push('A')
adjecencyList['A'].push('C')

for(let v in adjecencyList){
    console.log(v + '->'+[...adjecencyList[v]])

}