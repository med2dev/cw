// P: string, representing a DNA sequence
// R: string, replresenting an RNA sequence, replacing T with U

// E:
DNAtoRNA('TTTT') // 'UUUU'

function DNAtoRNA(dna){
    dna.replace(/T/g, 'U')
}
