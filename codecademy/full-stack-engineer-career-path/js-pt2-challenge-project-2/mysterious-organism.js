// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(num, arr) {
  return {
    _specimenNum: num,
    _dna: arr,
    mutate() {
      for (let i = 0; i < this._dna.length; i++) {
        let oldValue = this._dna[i];
        while (this._dna[i] === oldValue) {
          this._dna[i] = returnRandBase();
        }
      }
      return this.dna;
    },
    compareDNA(pAequor) {
      let count = 0;
      for (let i = 0; i < this._dna.length; i++) {
        if (this._dna[i] === pAequor._dna[i]) {
          count++;
        }
      }
      let precentage = (count / 15) * 100;
      return (
        "specimen " +
        this._specimenNum +
        " and specimen " +
        pAequor._specimenNum +
        " have " +
        precentage.toFixed(2) +
        "% DNA in common"
      );
    },
    willLikelySurvive() {
      let count = 0;
      this._dna.forEach((item) => {
        if (item === "C" || item === "G") {
          count++;
        }
      });
      let precentage = (count / 15) * 100;
      return precentage > 60 ? true : false;
    },
  };
}
let a = mockUpStrand();
// console.log(a);
let b = pAequorFactory(11, a);
// console.log(b);
b.mutate();
console.log(b);
let c = mockUpStrand();
let d = pAequorFactory(53, c);
console.log(d);
console.log(d.compareDNA(b));

// Create 30 instances of pAequor that can survive in their natural environment.
let count = 0;
let arrSurviving = [];
do {
  let param1 = Math.floor(Math.random() * 1000) + 1;
  let param2 = mockUpStrand();
  let pAequor = pAequorFactory(param1, param2);
  if (pAequor.willLikelySurvive() === true) {
    count++;
    arrSurviving.push(pAequor);
  }
} while (count < 30);
console.log(arrSurviving);
