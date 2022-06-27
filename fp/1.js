const mark = [
    631,
    604,
    527,
    503,
    800,
    579,
    673,
    513,
    808,
    701,
    833,
    795,
    644,
    649,
    557,
    556,
    548,
    815,
    737,
    687,
    777,
    635,
    653,
    829,
    593,
    511,
    663,
    737,
    713,
    797,
    608,
    577,
    636,
    655,
    850,
    540,
    626,
    609,
    737,
    570,
    720,
    668,
    789,
    658,
    615,
    628,
    519,
    611,
    766,
    811
]
const result = marks => marks.map(mark=> {
    if(mark >= 800){
        console.log(mark+ ' is exellent')
    }
    if (mark >= 700){
        console.log(mark+ ' is good')
    }
    if (mark >= 600){
        console.log(mark+ ' is fair')
    }
    if (mark >= 500){
        console.log(mark+ ' is poor')
    }
})
result(mark)