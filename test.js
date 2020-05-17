const s = 'a_aa_xaaa_'
const r1 = /a+_/g
const r2 = /a+_/y
const l = console.log;
let match1 = ''
while(match1 = r1.exec(s)){
    l(match1)
}
//[ 'a_', index: 0, input: 'a_aa_xaaa_', groups: undefined ]
//[ 'aa_', index: 2, input: 'a_aa_xaaa_', groups: undefined ]
//[ 'aaa_', index: 6, input: 'a_aa_xaaa_', groups: undefined ]

let match2 = ''
while(match2 = r2.exec(s)){
    l(match2)
}
//[ 'a_', index: 0, input: 'a_aa_xaaa_', groups: undefined ]
//[ 'aa_', index: 2, input: 'a_aa_xaaa_', groups: undefined ]