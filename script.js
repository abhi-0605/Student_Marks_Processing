let student=[];

function addstudent(){

    let name=document.getElementById("name").value.trim();
    let mark=document.getElementById("mark").value;
    let marks=Number(mark);

    if(name==="" || mark===""){
        alert("please enter student name and marks");
        return;
    }

    if(marks<0 || marks>100){
        alert("Marks should be between 0 to 100");
        return;
    }

    student.push({
        name:name,
        marks:marks
    })

    document.getElementById("name").value="";
    document.getElementById("mark").value="";

    alert("Student added");

}

function processdata(){
    if(student.length===0){
        alert("Add student");
        return;
    }

    const passedstudent=student.filter(
        student=>student.marks>=30
    );

    const failstudent=student.filter(
        student=>student.marks<=30
    );

    const totalmark=student.reduce(
        (sum,student)=>sum+student.marks,0
    );

    const avgmarks=totalmark/student.length;

    const names=student.map(
        student=>student.name
    );

    const highestmark=Math.max(
        ...student.map(
            student=>student.marks
        )
    )

    const lowestmark=Math.min(
        ...student.map(
            student=>student.marks
        )
    );

    document.getElementById("output").innerHTML=
    `<h3>Results</h3>

    <p><strong>student:</strong> ${names.join(", ")}</p>
    <p><strong>totalmark:</strong> ${totalmark}</p>
    <p><strong>Average Marks:</strong> ${avgmarks.toFixed(2)}</p>
    <p><strong>Highest Marks:</strong> ${highestmark}</p>
    <p><strong>Lowest Marks:</strong> ${lowestmark}</p>
    <p><strong>Passed Student:</strong> 
    ${passedstudent.map(
        student=>student.name
    ).join(", ")}</p>
    <p><strong>Fail Student:</strong> 
    ${failstudent.map(
        student=>student.name
    ).join(", ")}</p>
    <p><strong>Total Student:</strong> ${student.length}</p>
    `
}

