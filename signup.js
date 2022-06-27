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
		}
		else if (fnam.value==''||snam.value==''||emai.value==''||pass.value==''||con.value==''){
			intext.innerText=('Please Kindly input all fields')
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
		 		localStorage.indexes=JSON.stringify(i)
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
			
			i=JSON.parse(localStorage.indexes)
			allStudents=JSON.parse(localStorage.allOfStudents)
			dashitems.innerText =('Welcome to your Dashboard, '+ allStudents[i].firstname)
			
			t='<tr>'
			for (let i = 0; i <allStudents.length; i++) {
				
				t+='<th>'+(i+1) +'</th>'
				t+='<td>'+(allStudents[i].firstname) + '</td>'
				t+='<td>'+(allStudents[i].surname)+ '</td>'
				t+='<td>'+(allStudents[i].email)+ '</td>'
				t+='<td>'+(allStudents[i].password)+ '</td>'
				t+='</tr>'
			}
			
			tab.innerHTML+=t
		} 
	