let dna = ["A", "C", "G", "T"];
let dna2 = ["T", "G", "C", "A"];
let dna_array = [];
let count = 15;
let copy_dna = [];
for (let i = 0; i < count; i++) {
    let ran = Math.random() * 3;
    let ran_int = Math.round(ran);
    dna_array[i] = dna[ran_int];
    copy_dna[i] = dna2[ran_int];
}
console.log(`dna_array = ${dna_array}`);
console.log(`copy_dna = ${copy_dna}`);
