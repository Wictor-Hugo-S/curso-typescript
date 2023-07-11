type SumProps={
    a:number;
    b:number;
    c:number;
    d:number
}

type ReturnSumProps={
    sum:number
}

export const handleFunction= ({ a, b,c , d }:SumProps):ReturnSumProps=>{
    return{

        sum: a + b + c +d
    }
}

console.log(handleFunction({

    a:5,
    b:5,
    c:2,
    d:2
}))