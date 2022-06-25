let allStudents=[]
	function getpreviousvalues(){
		if(localStorage.allOfStudents){
			 allStudents=JSON.parse(localStorage.allOfStudents)
		}
	}
	function signup(){
		let newStudents={
			firstname:fnam.value,
			surname:snam.value,
			email:emai.value,
			password:pass.value
		}
		var confirmpassword=con.value
		if(pass.value!=con.value){
			intext.innerText=('The passwords inputed are different,Kindly reconfirm the password')
			return false 
		}
		else if (fnam.value==''||snam.value==''||emai.value==''||pass.value==''||con.value==''){
			intext.innerText=('Please Kindly input all fields')
			return false
		}else{
			allStudents.push(newStudents)
			location.assign('signin.html')
		}
		localStorage.allOfStudents=JSON.stringify (allStudents)
		console.log(allStudents)

	}


function signin(){
		 Email=emai.value
		 Password=pass.value
		var found =false
		 allStudents=JSON.parse(localStorage.allOfStudents)
		 for (let i = 0; i<allStudents.length ; i++) {
		 	if(Email==allStudents[i].email && Password==allStudents[i].password){
		 		var found=true
		 	}
		 }
		 if (found==false){
		 		incorrect.innerText=('Invalid Email or Invalid Password')
		 	}else{
		 		location.assign('dashboard.html')
		 	}
	}

	
	
	function dashboard(){
			allStudents= JSON.parse(localStorage.allOfStudents)
			for (let i = 0; i <allStudents.length; i++) {
				dashitems.innerText= ('Welcome to your Dashboard,'+ ' '+allStudents[i].firstname) 
				dashitems1.innerText=('Firstname:' +' '+ allStudents[i].firstname)
				dashitems2.innerText=('Lastname:' +' '+ allStudents[i].surname)
				dashitems3.innerText=('Email Contact:' +' '+ allStudents[i].email)
				dashitems4.innerText=('Password:' +' '+ allStudents[i].password)

			}
			
		} 
	