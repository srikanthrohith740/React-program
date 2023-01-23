// function Template(){
//     let name="srikanth"
//     let result=`${name}`+"hi"
//     console.log(result)
// }
// export default Template;
 
// templaate function
// function Template(){
//     let name="sri"
//     let course="web developer"
//     console.log(`my name is${name}course is ${course}`)
// }
// export default Template;

// 

 function Template(){
    // Destructing of an object 

    // let detail={
    //     name:"srikanth",
    //     surname:"banavath",
    //     age:"23"
    // }
    // let {name,surname,age}=detail
    // console.log(name,surname,age)

    // destructing of array
// Es5
    // const names = ["vinod,srinu,pavan"]
    // console.log(names[0])
    // console.log(names[1])
    // console.log(names[2])
    //Es6
    // const[first,second,third]=names
    // console.log(second,first,third)

    // const ages =["23,25,28"]
    // const[first,second,third]=ages
    // console.log(first,second,third)

// spread operator

// let name=["srikanth"]
// let age=[23]
// let result=[...name,...age]
// console.log(result)

// rest operator

let a=[1,2,3]
let b=[4,5,6]
let c=[7,8,9]
let result=[a,b,...c]
console.log(a)
console.log(b)
console.log(c)


    
    return(
        <div>
            <h1>Arrow function</h1>
        </div>
    )
}
export default Template;

// arrow function
// const Template=()=>{
//     console.log("im arrow function")
// }
// export default Template;

// 

